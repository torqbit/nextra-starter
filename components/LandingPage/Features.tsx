import { FC, ReactNode } from "react";

const FeatureCard: FC<{ title: string; icon: ReactNode; description: string; link: string }> = ({
  title,
  icon,
  description,
  link,
}) => {
  return (
    <div className=" flex items-center flex-col justify-between gap-[10px]  p-[20px] bg-(--bg-primary) hover:bg-(--bg-selected-menu) transition-all ease-linear">
      <i className="leading-[0] text-[25px] rounded-[8px]  p-[8px] flex item-center justify-center bg-(--bg-secondary)">
        {icon}
      </i>
      <h3>{title}</h3>
      <p className="max-w-[70%] m-0 text-center">{description}</p>
      <a style={{ textDecoration: "none" }} href={link} className="text-(--font-secondary) hover:text-(--brand-color)">
        {"Learn more >"}
      </a>
    </div>
  );
};
const Features: FC<{ featureList: { title: string; icon: ReactNode; description: string; link: string }[] }> = ({
  featureList,
}) => {
  return (
    <section className="relative border-(--border-color) border-l border-r z-10 overflow-hidden">
      {/* Fading shadow at top */}
      <h2 className="relative text-center my-[40px] z-10 font-semibold">Features</h2>

      <div className="absolute top-[40px] left-0 w-full h-[80px] bg-linear-to-t from-(--bg-secondary) via-(--bg-secondary)/80 to-transparent z-0" />

      <div className="relative z-10 grid grid-cols-3 bg-(--bg-secondary)">
        {featureList.map((props, idx) => {
          const isLastInRow = (idx + 1) % 3 === 0;
          return (
            <div
              key={idx}
              className={`group border-(--border-color) border-b ${idx < 3 ? "border-t" : ""} ${
                !isLastInRow ? "border-r" : ""
              }`}
            >
              <FeatureCard {...props} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
