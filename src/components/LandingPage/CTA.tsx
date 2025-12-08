import { Meteors } from "../ui/meteors";
import { PageSection } from "../ui/page-section";
import { Button } from "../ui/button";

export const CTA = () => {
  return (
    <PageSection>
      <div className='relative h-[500px] w-full overflow-hidden'>
        <Meteors />
        <div className='flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4'>Start Building with Acme AI</h2>
          <p className='text-muted-foreground text-sm sm:text-base max-w-2xl mb-6 sm:mb-8'>
            Ready to get started? Sign up for a free account and start building with Acme AI today.
          </p>
          <Button className='w-full sm:w-auto'>Get Started</Button>
        </div>
      </div>
    </PageSection>
  );
};
