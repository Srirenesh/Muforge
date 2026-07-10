"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PieChart, GraduationCap, Globe, Megaphone, Camera, BookOpen, Terminal, Video, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const services = [
    {
      title: "Data Analysis",
      desc: "Transform raw data into actionable business intelligence. We build custom dashboards, parse complex datasets, and create high-impact visual reports.",
      details: ["Excel Automation & Advanced Formulae", "Power BI & Tableau Dashboard Creation", "Automated Business Reports", "Data Modeling & Cleaning"],
      icon: PieChart,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Final Year Projects",
      desc: "Complete academic and technical guidance for university students. We help you design, develop, and document high-scoring projects with source code.",
      details: ["Project Ideation & Architectural Design", "Complete Coding & Development", "Documentation & Synopsis Support", "Viva-Voce Preparation & Training"],
      icon: GraduationCap,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Website Development",
      desc: "Modern, fully responsive, and SEO-optimized web platforms built with the latest technologies like Next.js, React, and robust server architectures.",
      details: ["Custom Frontend Development", "Full Stack Next.js Applications", "E-commerce Platforms", "CMS Integrations (WordPress, Headless)"],
      icon: Globe,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Digital Marketing",
      desc: "Accelerate your brand growth. We drive target traffic, optimize search rankings, and design high-converting social media campaigns.",
      details: ["Search Engine Optimization (SEO)", "Social Media Management", "Pay-Per-Click (PPC) Campaigns", "Content Marketing & Strategy"],
      icon: Megaphone,
      color: "from-red-500 to-rose-500",
    },
    {
      title: "Product Photography / Shoots",
      desc: "Premium, studio-quality product captures and visual assets that make your products stand out on e-commerce, catalogs, and social channels.",
      details: ["Studio Product Shoots", "Creative Commercial Photography", "Image Post-Processing & Retouching", "Social Media Asset Creation"],
      icon: Camera,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Frontend & Backend Training",
      desc: "Master software engineering. We offer guided mentoring and practical, industry-oriented training programs for aspiring developers.",
      details: ["HTML, CSS & JS Fundamentals", "Advanced React & Next.js Training", "Node.js, Express & Database Backend", "Git, Deployment & Real-World Best Practices"],
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Custom Software Development",
      desc: "Tailored enterprise solutions designed specifically to address your unique business workflows, bottlenecks, and automation requirements.",
      details: ["Bespoke SaaS Platforms", "Desktop & Cloud Utility Apps", "API Design & Backend Integration", "Legacy System Modernization"],
      icon: Terminal,
      color: "from-sky-500 to-cyan-500",
    },
    {
      title: "Video Editing",
      desc: "Cinematic, engaging, and clean post-production. We craft high-quality corporate, promotional, educational, and social media video content.",
      details: ["Commercial & Promo Videos", "Color Grading & Audio Enhancement", "Motion Graphics & VFX Subtitle Integration", "Social Reels & TikTok Formatting"],
      icon: Video,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "ERP Projects",
      desc: "Integrated management of main business processes. We develop customized ERPs for inventory, payroll, CRM, and task tracking.",
      details: ["Inventory & Supply Chain Modules", "HRM & Automated Payroll Tracking", "CRM & Lead Pipeline Management", "Cross-Department Reporting & Visuals"],
      icon: Briefcase,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pb-24 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/services_hero.png"
          alt="MuForge Digital Services & Innovation"
          fill
          sizes="100vw"
          className="object-cover opacity-10 dark:opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/20 via-transparent to-slate-50 dark:from-slate-950/20 dark:via-transparent dark:to-slate-950" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl px-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">
            Our <span className="text-cyan-500 dark:text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Innovative digital capabilities tailored to help your business scale and empower your technical growth.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)",
                }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md hover:border-cyan-500/50 hover:bg-slate-100/50 dark:hover:bg-slate-900/60 transition-all group shadow-xl cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm">{service.desc}</p>
                
                {/* Detailed points */}
                <ul className="space-y-2">
                  {service.details.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 mt-24">
        <div className="relative z-10 p-6 sm:p-12 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 backdrop-blur-xl text-center shadow-2xl overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 text-slate-900 dark:text-white">Have a custom requirement?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
            Let&apos;s design a custom package or solution that perfectly aligns with your goals. Our team is ready to deliver.
          </p>
          <Link href="/contact" className="relative z-10 inline-block">
            <Button size="lg" className="bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold px-10 h-14 rounded-full text-lg shadow-xl transition-transform hover:scale-105 relative z-10 cursor-pointer">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
