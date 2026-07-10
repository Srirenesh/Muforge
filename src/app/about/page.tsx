"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const reasons = [
    "Expert and innovative team",
    "Customized business solutions",
    "Affordable and transparent pricing",
    "On-time project delivery",
    "Continuous technical support",
    "Customer-focused approach",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pb-24 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/about-hero.png"
          alt="MuForge Technology Innovation"
          fill
          sizes="100vw"
          className="object-cover opacity-10 dark:opacity-30"
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
            About <span className="text-cyan-500 dark:text-cyan-400">MuForge</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 font-medium">
            Forging the Future with Technology.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Who We Are</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                MuForge is a technology solutions company dedicated to helping businesses, startups, and students transform ideas into practical digital solutions. We specialize in delivering innovative, reliable, and cost-effective services that improve productivity, streamline operations, and accelerate growth.
              </p>
              <p>
                Our expertise includes Data Analytics, Custom Software Development, Website Development, Mobile Applications, Digital Marketing, UI/UX Design, Business Dashboards, ERP & CRM Solutions, AI-powered Applications, and Technical Training. We also support academic innovation through Final Year Project development and mentoring.
              </p>
              <p>
                At MuForge, we believe technology should be simple, scalable, and result-driven. Every solution is designed to meet our clients&apos; unique business needs while maintaining high standards of quality, security, and performance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-500/10"
          >
            <Image
              src="/images/about-mission.png"
              alt="Global Technology Partnership"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-xl"
          >
            <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              To empower businesses and individuals with innovative technology solutions that drive efficiency, digital transformation, and sustainable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-xl"
          >
            <div className="w-12 h-12 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              To become a trusted global technology partner recognized for innovation, quality, and customer success.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12 text-slate-800 dark:text-white">Why Choose MuForge?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:border-cyan-500/50 transition-colors shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-lg font-medium text-slate-700 dark:text-slate-300">{reason}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
