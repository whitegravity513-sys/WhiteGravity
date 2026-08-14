import React from "react";
import PageHeader from "../components/PageHeader";
import WhyUs from "../components/sections/WhyUs";
import CTA from "../components/sections/CTA";
import TechStack from "../components/sections/TechStack";
import { CheckCircle2, Target, Rocket, Handshake, Users } from "lucide-react";
import SectionPill from "../components/SectionPill";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "To empower businesses through innovative technology, creative thinking, and strategic digital solutions that deliver measurable growth, long-term value, and exceptional customer experiences.",
    },
    {
      icon: Rocket,
      title: "Our Vision",
      desc: "To become one of India's most trusted digital transformation companies by delivering world-class technology solutions that inspire innovation and help businesses succeed in the digital era.",
    },
    {
      icon: Handshake,
      title: "Our Values",
      desc: "Innovation, integrity, excellence, customer success, and collaboration are the values that drive everything we do. We embrace new ideas and technologies to deliver reliable, high-quality solutions while maintaining honesty and transparency in every relationship.",
    },
  ];

  return (
    <>
      <PageHeader title="About White Gravity" crumbs={[{ label: "About" }]} />

      {/* ── WHO WE ARE ── */}
      <section className="py-10 md:py-14 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <SectionPill>Who We Are</SectionPill>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Engineered for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                digital growth.
              </span>
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed text-base md:text-lg max-w-xl text-justify font-normal">
              White Gravity Web Solutions is a premium IT company in Noida. We
              specialize in custom software architecture, high-performance
              website development, and targeted digital marketing campaigns that
              drive measurable ROI.
            </p>
            <ul className="mt-8 space-y-3.5 text-left">
              {[
                "5+ years of digital delivery excellence",
                "50+ engineers, designers & marketers",
                "Certified Zoho, Meta and Odoo partners",
                "100+ projects shipped across 15+ industries",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-medium text-sm md:text-base">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-[2.5rem] transform translate-x-4 translate-y-4 opacity-20" />
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative border-8 border-white group">
              <img
                src="/images/about-team-new.jpg"
                alt="White Gravity Tech Team"
                className="w-full h-auto sm:h-[500px] object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES CARDS ── */}
      <section className="py-10 md:py-14 bg-emerald-50/60">
        <div className="container-x grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30, rotateY: 180 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotateY: 180 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="relative h-[270px] cursor-pointer"
            >
              {/* Front Face */}
              <div 
                className="absolute inset-0 h-full w-full rounded-2xl bg-white p-6 border border-emerald-100 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center mb-4">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 text-center mb-2">
                  {v.title}
                </h3>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Hover to Read Details</p>
              </div>

              {/* Back Face */}
              <div 
                className="absolute inset-0 h-full w-full rounded-2xl bg-[#009B6C] p-6 text-white flex flex-col items-center justify-center shadow-lg"
                style={{ 
                  backfaceVisibility: 'hidden', 
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)' 
                }}
              >
                <h3 className="text-lg font-extrabold mb-3">{v.title}</h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-emerald-50 text-justify">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT US SECTION (text left, image right) ── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col"
          >
            <SectionPill icon={Users}>About Us</SectionPill>
            <div className="mt-5 space-y-4 text-slate-600 text-base leading-relaxed text-justify">
              <p>
                At White Gravity Web Solutions, we believe technology is more
                than just code—it's the foundation for business growth and
                innovation. We are a leading IT company specializing in custom
                software development, website development, mobile applications,
                eCommerce solutions, digital marketing, and business automation.
              </p>
              <p>
                With over 5 years of industry experience, we have successfully
                delivered 500+ projects for startups, SMEs, enterprises, and
                government organizations across multiple industries.
              </p>
              <p>
                Our team of passionate developers, designers, marketers, and
                consultants is committed to delivering innovative, scalable, and
                result-driven digital solutions.
              </p>
              <p>
                Whether you're launching a new business, modernizing your
                existing systems, or scaling your digital presence, White
                Gravity is your trusted technology partner.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/images/about-collaboration-new.jpg"
                alt="White Gravity Team Collaboration"
                className="w-full h-[380px] object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MEET OUR FOUNDER ── */}
      <section className="py-10 md:py-14 bg-slate-50">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
            Meet Our Founder
          </h2>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 flex flex-col"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Afreen</h3>
              <p className="mt-1 text-[#009B6C] font-semibold text-sm md:text-base">
                Founder &amp; CEO | White Gravity Web Solutions
              </p>
              <div className="mt-5 space-y-4 text-slate-600 text-base leading-relaxed text-justify">
                <p>
                  Behind every successful company is a vision, and White Gravity
                  Web Solutions was founded with one clear mission—to help
                  businesses embrace technology and achieve sustainable digital
                  growth.
                </p>
                <p>
                  With a passion for innovation and customer success, Afreen
                  established White Gravity to deliver reliable, scalable, and
                  future-ready digital solutions. Under her leadership, the
                  company has grown into a trusted technology partner for
                  startups, SMEs, enterprises, and public sector organizations,
                  helping businesses transform ideas into impactful digital
                  products.
                </p>
                <p>
                  Afreen believes that technology should not only solve problems
                  but also create opportunities. Her focus on quality,
                  transparency, and long-term client relationships has shaped
                  White Gravity into a company known for excellence, innovation,
                  and customer satisfaction.
                </p>
                <blockquote className="border-l-4 border-[#009B6C] pl-4 italic text-slate-700 text-sm md:text-base">
                  "Success is built on trust, innovation, and the courage to
                  transform ideas into reality. At White Gravity, our goal is to
                  create digital solutions that empower businesses to grow,
                  compete, and lead in a rapidly evolving world."
                </blockquote>
                <p className="font-bold text-slate-800 text-sm md:text-base">
                  — Afreen
                  <br />
                  <span className="font-bold text-[#009B6C]">
                    Founder &amp; CEO
                  </span>
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#009B6C] max-w-sm mx-auto bg-white flex items-end justify-center pt-8 relative z-10">
                
                {/* White curtain overlay — slides open on load from opposite direction */}
                <motion.div
                  initial={{ scaleX: 1 }}
                  whileInView={{ scaleX: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  style={{ originX: 1 }}
                  className="absolute inset-0 bg-white z-20 rounded-xl"
                />

                <img
                  src="/images/founder-afreen.jpg"
                  alt="Afreen - Founder & CEO White Gravity"
                  className="w-full max-h-[440px] object-contain object-bottom relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhyUs />
      <TechStack isMarquee={true} />
      <CTA />
    </>
  );
}
