import { FC, ReactNode } from "react";
import { PageSection } from "../ui/page-section";

const FeatureCard: FC<{ title: string; icon: ReactNode; description: string; link: string }> = ({ title, icon, description, link }) => {
  return (
    <div className=' flex items-center flex-col justify-between gap-[10px]  p-[20px]  hover:bg-(--bg-selected-menu) transition-all ease-linear'>
      <i className='leading-[0] text-[25px] rounded-[8px]  p-[8px] flex item-center justify-center bg-(--bg-secondary)'>{icon}</i>
      <div className='text-lg sm:text-xl lg:text-2xl font-medium'>{title}</div>
      <p className='m-0 text-center'>{description}</p>
    </div>
  );
};
const Features: FC<{
  title: string;
  description: string;
  items: { title: string; icon: ReactNode; description: string; link: string }[];
}> = ({ title, description, items }) => {
  return (
    <PageSection name={title} description={description}>
      <div className='relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full'>
        {items.map((props, idx) => {
          const isLastInRow = (idx + 1) % 3 === 0;
          const isLastInSmRow = (idx + 1) % 2 === 0;
          const shouldShowBottomBorder = idx < 3 || (idx >= 3 && idx < 6);

          return (
            <div
              key={idx}
              className={`group nextra-border p-4 
                ${shouldShowBottomBorder ? "border-b" : ""} 
                ${!isLastInRow ? "lg:border-r" : ""} 
                ${!isLastInSmRow ? "sm:border-r" : ""}
                ${idx % 2 === 0 ? "sm:border-r" : ""}`}>
              <FeatureCard {...props} />
            </div>
          );
        })}
      </div>
    </PageSection>
  );
};

export default Features;
