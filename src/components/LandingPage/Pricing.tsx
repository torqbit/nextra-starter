import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "nextra-theme-docs";
import { PageSection } from "../ui/page-section";

interface PricingPlan {
  name: string;
  price: {
    monthly: string;
    yearly: string;
  };
  credits: {
    monthly: string;
    yearly: string;
  };
  description: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  features: string[];
  buttonLabel: string;
  buttonVariant: "default" | "outline";
  accentColor: {
    light: string;
    dark: string;
  };
  highlightColor: {
    light: string;
    dark: string;
  };
  buttonClasses: {
    light: string;
    dark: string;
  };
  badge?: {
    label: string;
    lightClasses: string;
    darkClasses: string;
  };
}

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  console.log(`theme: ${theme} and ${isDark}`);

  const plans: PricingPlan[] = [
    {
      name: "Hobby",
      price: {
        monthly: "Free",
        yearly: "Free",
      },
      credits: {
        monthly: "$10 in Credits per month",
        yearly: "$120 in Credits per year",
      },
      description: {
        prefix: "Everything you need to",
        highlight: "start",
        suffix: "automating browsers.",
      },
      features: ["100 Browser Hours"],
      buttonLabel: "Start For Free",
      buttonVariant: "outline",
      accentColor: {
        light: "text-neutral-600",
        dark: "text-neutral-300",
      },
      highlightColor: {
        light: "text-neutral-900",
        dark: "text-white",
      },
      buttonClasses: {
        light: "dark:bg-dark/100  bg-dark/100 dark:text-white text-white border-neutral-200 hover:bg-black-100",
        dark: "dark:bg-dark/100 dark:text-white border-white/10 hover:bg-dark/90",
      },
    },
    {
      name: "Starter",
      price: {
        monthly: "$25",
        yearly: "$250",
      },
      credits: {
        monthly: "$25 in Credits per month",
        yearly: "$250 in Credits per year",
      },
      description: {
        prefix: "Everything you need to",
        highlight: "start",
        suffix: "automating browsers.",
      },
      features: ["290 Browser Hours", "2.9 GB Proxy Bandwidth", "7.2k Captcha Solves"],
      buttonLabel: "Get Started",
      buttonVariant: "default",
      accentColor: {
        light: "text-emerald-600",
        dark: "text-emerald-400",
      },
      highlightColor: {
        light: "text-emerald-600",
        dark: "text-emerald-400",
      },
      buttonClasses: {
        light: "bg-emerald-500 hover:bg-emerald-400 text-white",
        dark: "bg-emerald-500/90 hover:bg-emerald-500 text-white",
      },
    },
    {
      name: "Developers",
      price: {
        monthly: "$100",
        yearly: "$1000",
      },
      credits: {
        monthly: "$100 in Credits per month",
        yearly: "$1000 in Credits per year",
      },
      description: {
        prefix: "Everything you need to",
        highlight: "launch",
        suffix: "your project.",
      },
      features: ["1,238 Browser Hours", "12 GB Proxy Bandwidth", "28k Captcha Solves"],
      buttonLabel: "Get Started",
      buttonVariant: "default",
      accentColor: {
        light: "text-sky-600",
        dark: "text-sky-400",
      },
      highlightColor: {
        light: "text-sky-600",
        dark: "text-sky-300",
      },
      buttonClasses: {
        light: "bg-sky-600 hover:bg-sky-500 text-white",
        dark: "bg-sky-500 hover:bg-sky-400 text-white",
      },
      badge: {
        label: "Popular",
        lightClasses: "bg-sky-100 text-sky-700",
        darkClasses: "bg-sky-500/20 text-sky-200",
      },
    },
    {
      name: "Startups",
      price: {
        monthly: "$500",
        yearly: "$5000",
      },
      credits: {
        monthly: "$499 in Credits per month",
        yearly: "$5,988 in Credits per year",
      },
      description: {
        prefix: "Everything you need to",
        highlight: "scale",
        suffix: "your masterpiece.",
      },
      features: ["9,980 Browser Hours", "166 GB Proxy Bandwidth", "166k Captcha Solves"],
      buttonLabel: "Get Started",
      buttonVariant: "default",
      accentColor: {
        light: "text-amber-500",
        dark: "text-amber-400",
      },
      highlightColor: {
        light: "text-amber-500",
        dark: "text-amber-300",
      },
      buttonClasses: {
        light: "bg-amber-400 hover:bg-amber-300 text-neutral-900",
        dark: "bg-amber-400/90 hover:bg-amber-300 text-neutral-900",
      },
    },
  ];

  return (
    <PageSection name='Pricing' description='Simple pricing for everyone.'>
      <div className='mt-12 space-y-10'>
        <div className='flex w-full justify-center px-4'>
          <div
            className={cn(
              "relative flex items-center gap-3 rounded-full border px-2 py-2 backdrop-blur-sm",
              "border-border/40 bg-gray-100 dark:bg-black/80",
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
              <span className='text-emerald-500'>Save 20%</span>
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
              const accentClass = isDark ? plan.accentColor.dark : plan.accentColor.light;
              const highlightClass = isDark ? plan.highlightColor.dark : plan.highlightColor.light;
              const buttonClass = isDark ? plan.buttonClasses.dark : plan.buttonClasses.light;
              const badgeClass = plan.badge ? (isDark ? plan.badge.darkClasses : plan.badge.lightClasses) : undefined;

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
                        <p className={cn("text-sm font-semibold uppercase tracking-wide", accentClass)}>{plan.name}</p>
                        {plan.badge && (
                          <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", badgeClass)}>{plan.badge.label}</span>
                        )}
                      </div>
                      <div>
                        <h3 className='text-4xl font-semibold text-foreground'>{isYearly ? plan.price.yearly : plan.price.monthly}</h3>
                      </div>
                    </div>

                    <p className='text-sm leading-relaxed text-muted-foreground'>
                      {plan.description.prefix} <span className={cn("font-semibold", highlightClass)}>{plan.description.highlight}</span>{" "}
                      {plan.description.suffix}
                    </p>

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
