import { Meteors } from "../ui/meteors";
import { PageSection } from "../ui/page-section";
import { Button } from "../ui/button";

export const CTA = () => {
  return (
    <PageSection>
      <div className='relative h-[500px] w-full overflow-hidden'>
        <Meteors />
        <div className='flex flex-col items-center justify-center h-full'>
          <h2 className='text-3xl font-bold text-foreground mb-2'>Start Building with Acme AI</h2>
          <p className='text-muted-foreground max-w-2xl mb-4'>
            Ready to get started? Sign up for a free account and start building with Acme AI today.
          </p>
          <Button className='mt-4'>Get Started</Button>
        </div>
      </div>
    </PageSection>
  );
};
