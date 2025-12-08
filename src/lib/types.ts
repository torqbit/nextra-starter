export interface PricingPlan {
  name: string;
  monthlyPrice: number;
  description: string;
  features: string[];
  buttonLabel: string;
  buttonVariant: "default" | "outline";
  isPopular: boolean;
}

export interface IPricingProps {
  annualDiscount: number;
  plans: PricingPlan[];
}
