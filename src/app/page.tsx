"use client";

import Companies from "@/components/LandingPage/Companies";
import Features from "@/components/LandingPage/Features";
import Hero from "@/components/LandingPage/Hero";
import Pricing from "@/components/LandingPage/Pricing";
import LandingPageLayout from "@/components/Layout/LandingPageLayout";
import SvgIcons from "@/components/SvgIcons";

export default function Home() {
  const logoArray = {
    firstGroup: [SvgIcons.google, SvgIcons.microsoft, SvgIcons.amazone, SvgIcons.netflix, SvgIcons.instagram],
    secondGroup: [SvgIcons.spotify, SvgIcons.dropbox, SvgIcons.slack, SvgIcons.zoom, SvgIcons.shopify],
  };
  return (
    <LandingPageLayout>
      <Hero
        extraContent={<img src='img/doc-bg.png' alt='' />}
        buttonInfo={{
          text: "Get Started",
          link: "/",
        }}
        tagLine={{
          tag: "New",
          description: "Introducing AI Agent SDK",
        }}
        description={
          "Create powerful AI agent workflows with just a few lines of code, enabling complex task automation and decision-making processes."
        }
        title={"AI Agent SDK"}
        extraDescription='Available for all major programming languages'
      />
      <Companies items={logoArray} />
      <Features
        featureList={[
          {
            title: "Simple Agent Workflows",
            icon: SvgIcons.workFlow,
            description: "Easily create and manage AI agent workflows with intuitive APIs.",
            link: "/",
          },
          {
            title: "Multi-Agent Systems",
            icon: SvgIcons.user,
            description: "Build complex systems with multiple AI agents working together.",
            link: "/",
          },
          {
            title: "Tool Integration",
            icon: SvgIcons.plug,
            description: "Seamlessly integrate external tools and APIs into your agent workflows.",
            link: "/",
          },
          {
            title: "Cross-Language Support",
            icon: SvgIcons.globe,
            description: "Available in all major programming languages for maximum flexibility.",
            link: "/",
          },
          {
            title: "Customizable Agents",
            icon: SvgIcons.code,
            description: "Design and customize agents to fit your specific use case and requirements.",
            link: "/",
          },
          {
            title: "Efficient Execution",
            icon: SvgIcons.zap,
            description: "Optimize agent performance with built-in efficiency and scalability features.",
            link: "/",
          },
        ]}
      />
      <Pricing />
    </LandingPageLayout>
  );
}
