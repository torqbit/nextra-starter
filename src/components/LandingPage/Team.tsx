// src/components/LandingPage/Team.tsx
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  previous: string;
  socials: {
    twitter?: string;
    linkedin?: string;
  };
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Annabelle",
      role: "CEO",
      image: "/team/annabelle.jpg", // Replace with actual image path
      description: "Strategy and leadership, having led a multi-billion dollar crypto platform",
      previous: "Prev: Amber Group; AirSwap (ConsenSys); Deutsche Bank",
      socials: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Anit",
      role: "CTO",
      image: "/team/anit.jpg", // Replace with actual image path
      description: "Engineering, expert on scalable distributed systems as a HFT systems veteran",
      previous: "Prev: Hudson River Trading (employee #12); Oracle",
      socials: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Angie",
      role: "COO",
      image: "/team/angie.jpg", // Replace with actual image path
      description:
        "Scaled 5+ DeFi and infra products from zero to market—bridging technical product design and systems strategy across multiple market cycles",
      previous: "Prev: Semiotic Labs (The Graph); Clipper DEX; Accenture Strategy",
      socials: {
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Seasoned experts from finance, tech, and crypto</h2>
          <p className='text-xl text-gray-600 mb-8'>
            Our global team combines deep expertise from multibillion-dollar HFT firms like HRT to crypto companies like Binance and Amber
            Group.
          </p>
          <Button asChild className='bg-[#FF4D4D] hover:bg-[#FF3333] text-white px-8 py-6 text-lg'>
            <Link href='#'>See Open Roles</Link>
          </Button>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {teamMembers.map((member, index) => (
            <div key={index} className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100'>
                <Image src={member.image} alt={member.name} width={128} height={128} className='w-full h-full object-cover' />
              </div>
              <h3 className='text-xl font-bold text-gray-900'>{member.name}</h3>
              <p className='text-[#FF4D4D] font-medium mb-2'>{member.role}</p>
              <p className='text-gray-600 mb-4'>{member.description}</p>
              <p className='text-sm text-gray-500 mb-4'>{member.previous}</p>
              <div className='flex justify-center space-x-4'>
                {member.socials.twitter && (
                  <a href={member.socials.twitter} className='text-[#FF4D4D] hover:text-[#FF3333]'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                    </svg>
                  </a>
                )}
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} className='text-[#FF4D4D] hover:text-[#FF3333]'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
