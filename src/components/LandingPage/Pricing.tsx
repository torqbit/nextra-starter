import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PageSection } from "../ui/page-section";
import { PricingPlan } from "@/lib/types";

const Pricing: React.FC<{ plans: PricingPlan[]; annualDiscount: number }> = ({ plans, annualDiscount }) => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <PageSection name='Pricing' description='Simple, transparent pricing for your business needs.'>
      <div className='mt-12 space-y-10'>
        <div className='flex w-full justify-center px-4'>
          <div
            className={cn(
              "relative flex items-center gap-3 rounded-full border px-2 py-2 backdrop-blur-sm",
              "border-border/40 bg-gray-200 dark:bg-black/80",
              "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
            )}>
            <button
              type='button'
              className={cn(
                "relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                isYearly ? "text-primary" : "text-muted-foreground"
              )}
              onClick={() => setIsYearly(true)}>
              {isYearly && (
                <span className='absolute inset-0 -z-10 rounded-full bg-white dark:bg-foreground/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]' />
              )}
              Yearly
              <span className='text-emerald-500'>Save {annualDiscount}%</span>
            </button>
            <button
              type='button'
              className={cn(
                "relative flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                !isYearly ? "text-foreground" : "text-muted-foreground"
              )}
              onClick={() => setIsYearly(false)}>
              {!isYearly && (
                <span className='absolute inset-0 -z-10 rounded-full bg-white dark:bg-foreground/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]' />
              )}
              Monthly
            </button>
          </div>
        </div>

        <div
          className={cn(
            "mx-auto w-full overflow-hidden border-t",
            "dark:bg-[#050505]",
            "bg-neutral-50",
            "dark:border-white/10",
            "border-neutral-200",
            "dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
            "shadow-lg"
          )}>
          <div className='grid grid-cols-1 md:grid-cols-4'>
            {plans.map((plan, index) => {
              const buttonClass = plan.isPopular ? "bg-brand text-white" : "bg-white dark:bg-black/10 text-primary";

              return (
                <div
                  key={plan.name}
                  className={cn(
                    "flex h-full flex-col gap-8 p-8 md:p-10 transition-colors duration-300",
                    "dark:bg-[#0d0d0f]",
                    "bg-white",
                    index !== plans.length - 1 && "border-b md:border-b-0",
                    index > 0 && "md:border-l",
                    "dark:border-white/10",
                    "border-neutral-200"
                  )}>
                  <div className='space-y-6'>
                    <div className='space-y-2'>
                      <div className='flex items-center justify-between'>
                        <p className={cn("text-sm font-semibold uppercase tracking-wide")}>{plan.name}</p>
                        {plan.isPopular && (
                          <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", buttonClass)}>Popular</span>
                        )}
                      </div>
                      <div>
                        <h3 className='text-4xl font-semibold text-foreground'>
                          {isYearly ? Math.round(plan.monthlyPrice * (1 - annualDiscount / 100)) : plan.monthlyPrice}/mo
                        </h3>
                      </div>
                    </div>

                    <p className='text-sm leading-relaxed text-muted-foreground'>{plan.description}</p>

                    <div>
                      <ul className='mt-4 space-y-3 text-sm'>
                        {plan.features.map((feature) => {
                          const [value, ...rest] = feature.split(" ");
                          return (
                            <li key={feature} className='flex items-start gap-3'>
                              <svg className='mt-1 h-4 w-4 flex-shrink-0 text-emerald-400' viewBox='0 0 20 20' fill='currentColor'>
                                <path
                                  fillRule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414L8.75 11.586l6.543-6.543a1 1 0 011.414 0z'
                                  clipRule='evenodd'
                                />
                              </svg>
                              <span className='text-muted-foreground'>
                                <span className='font-semibold text-foreground'>{value}</span> {rest.join(" ")}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <Button variant={plan.buttonVariant} className={cn("mt-auto h-12 w-full text-base font-semibold", buttonClass)}>
                    {plan.buttonLabel}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageSection>
  );
};
export default Pricing;
