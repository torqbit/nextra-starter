import SvgIcons from "@/components/SvgIcons";
import {
  ShieldCheckIcon,
  FunnelIcon,
  PhoneArrowUpRightIcon,
  ShoppingBagIcon,
  BriefcaseIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { IPricingProps } from "./types";

export const brand = {
  logo: "/logo.png",
  name: "Acme AI",
  tagline: "AI Automation Engine",
};

export const HeroProps = {
  notification: {
    tag: "New",
    description: "Introducing AI Agent SDK",
  },
  title: "All-in-One AI Automation Engine",
  description: "Automate customer engagement, support, sales, and internal workflows with a single unified AI engine.",
  btnGetStarted: {
    text: "Get Started",
    link: "/",
  },
  btnBookDemo: {
    text: "Book a Demo",
    link: "/",
  },
  extraContent: <img src='img/doc-bg.png' alt='' />,
  extraDescription: "Powering the world's leading companies with AI automation.",
};

export const CompanyProps = {
  logos: [
    SvgIcons.google,
    SvgIcons.microsoft,
    SvgIcons.amazone,
    SvgIcons.netflix,
    SvgIcons.instagram,
    SvgIcons.spotify,
    SvgIcons.dropbox,
    SvgIcons.slack,
    SvgIcons.zoom,
    SvgIcons.shopify,
  ],
};

export const FeatureItems = {
  title: "Use Cases",
  description: "From large-scale scrape jobs to fully autonomous web agents, Steel makes it easy to run browser automations in the cloud.",
  items: [
    {
      title: "Customer Support",
      icon: <ShieldCheckIcon className='w-6 h-6' />,
      description: "Reduce resolution times by 80% while improving accuracy with AI trained on your product.",
      link: "/",
    },
    {
      title: "Sales & Lead Qualification",
      icon: <FunnelIcon className='w-6 h-6' />,
      description: "AI learns your ICP, qualifies leads automatically, and schedules meetings.",
      link: "/",
    },
    {
      title: "AI Voice Agents",
      icon: <PhoneArrowUpRightIcon className='w-6 h-6' />,
      description: "Make automated outbound calls, reminders, surveys, and follow-ups.",
      link: "/",
    },
    {
      title: "E-Commerce AI Concierge",
      icon: <ShoppingBagIcon className='w-6 h-6' />,
      description: "AI that recommends products, tracks orders, handles returns & improves conversion.",
      link: "/",
    },
    {
      title: "Operations Automation",
      icon: <BriefcaseIcon className='w-6 h-6' />,
      description: "Handle employee requests, knowledge retrieval, HR queries, and IT support.",
      link: "/",
    },
    {
      title: "Marketing AI Assistant",
      icon: <SparklesIcon className='w-6 h-6' />,
      description: "Generate content, landing pages, campaigns, and reports instantly.",
      link: "/",
    },
  ],
};

export const PricingProps: IPricingProps = {
  annualDiscount: 20,
  plans: [
    {
      name: "Starter",
      monthlyPrice: 25,
      description: "Perfect for small businesses",
      features: ["1 AI assistant", "1,000 messages", "Basic voice generation", "Email + chat channels"],
      buttonLabel: "Get Started",
      buttonVariant: "outline",
      isPopular: false,
    },
    {
      name: "Growth",
      monthlyPrice: 125,
      description: "For scaling teams",
      features: ["3 assistants", "10,000 messages", "Multi-channel automation", "CRM integrations", "Voice + workflows"],
      buttonLabel: "Get Started",
      buttonVariant: "outline",
      isPopular: false,
    },
    {
      name: "Pro",
      monthlyPrice: 625,
      description: "For serious automation",
      features: ["10 assistants", "50,000 messages", "Unlimited workflows", "Dedicated Training Engine", "Priority support"],
      buttonLabel: "Get Started",
      buttonVariant: "default",
      isPopular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 1250,
      description: "Full automation suite",
      features: ["Unlimited messages", "On-prem or VPC", "Custom voice cloning", "Dedicated success engineer", "SLA-backed uptime"],
      buttonLabel: "Contact Sales",
      buttonVariant: "outline",
      isPopular: false,
    },
  ],
};
