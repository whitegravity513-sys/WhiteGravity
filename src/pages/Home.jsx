import React from "react";
import Hero from "../components/sections/Hero";
import StatsBanner from "../components/sections/StatsBanner";
import ServicesGrid from "../components/sections/ServicesGrid";
import WhyUs from "../components/sections/WhyUs";
import Process from "../components/sections/Process";
import Projects from "../components/sections/Projects";
import TechStack from "../components/sections/TechStack";
import VideoTestimonials from "../components/sections/VideoTestimonials";
import IndustriesSection from "../components/sections/IndustriesSection";
import CTA from "../components/sections/CTA";
import FAQ from "../components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <ServicesGrid />
      <WhyUs />
      <Process />
      <Projects />
      <TechStack />
      <VideoTestimonials />
      <IndustriesSection />
      <FAQ />
      <CTA />
    </>
  );
}
