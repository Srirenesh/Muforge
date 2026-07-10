"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Background3D } from "@/components/Background3D";
import { PieChart, GraduationCap, Globe, Megaphone, Camera, BookOpen, Terminal, Video, Briefcase, Package, Factory, Receipt, Phone, Mail, X, ExternalLink } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    { title: "Data Analysis", desc: "Expert Excel, Power BI, interactive dashboards, and comprehensive reports.", icon: PieChart },
    { title: "Final Year Projects", desc: "End-to-end guidance and development for academic and professional projects.", icon: GraduationCap },
    { title: "Website Development", desc: "High-performance, scalable, and beautifully designed web applications.", icon: Globe },
    { title: "Digital Marketing", desc: "Data-driven strategies to amplify your brand and accelerate growth.", icon: Megaphone },
    { title: "Product Photography", desc: "Premium product shoots and visual storytelling that captivates your audience.", icon: Camera },
    { title: "Frontend & Backend Training", desc: "Industry-standard development training to build the next generation of engineers.", icon: BookOpen },
    { title: "Custom Software", desc: "Bespoke enterprise applications tailored specifically to your business workflows.", icon: Terminal },
    { title: "Video Editing", desc: "Professional post-production, motion graphics, and cinematic video editing.", icon: Video },
    { title: "ERP Projects", desc: "Comprehensive Enterprise Resource Planning systems to streamline your operations.", icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-cyan-500/30 transition-colors duration-300">
      {/* Hero Section with 3D Background */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-[95vh] px-4">
        {/* The 3D Canvas */}
        <Background3D />

        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center max-w-4xl mx-auto"
        >
          {/* Premium Logo Showcase */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05 }}
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 flex items-center justify-center cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="MuForge Logo"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-contain relative z-10"
            />
          </motion.div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide">Forging the Future with Technology</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 drop-shadow-sm">
            Transforming Ideas into <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
              Powerful Digital Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            MuForge delivers enterprise-grade software, AI applications, and premium web platforms tailored to scale your business into the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white px-8 h-12 rounded-full w-full sm:w-auto transition-all bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-md cursor-pointer">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>



      {/* Services Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Capabilities</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg mb-12">Comprehensive technology solutions designed with precision, creativity, and scalability in mind.</p>

            <div className="w-full max-w-5xl mx-auto h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 mb-16 relative group">
              <div className="absolute inset-0 bg-cyan-500/5 dark:bg-cyan-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image 
                src="/images/services_hero.png" 
                alt="MuForge Services" 
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)",
                  }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-cyan-500/50 transition-all cursor-pointer backdrop-blur-md group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-slate-200 dark:border-white/5">
                    <Icon className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4 bg-slate-100/50 dark:bg-slate-900/10 border-y border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 dark:bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">Featured System Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">Enterprise dashboard integrations and custom systems built to maximize operational efficiency.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Inventory System",
                desc: "Real-time stock level monitoring, barcode tracking, and automated supply level forecasts to prevent shortages.",
                img: "/images/project_inventory.png",
                icon: Package,
                color: "text-cyan-500",
              },
              {
                title: "Production Monitor",
                desc: "Interactive assembly pipeline tracing, status trackers, machine integration, and operational throughput analytics.",
                img: "/images/project_production.png",
                icon: Factory,
                color: "text-amber-500",
              },
              {
                title: "Payment Follow-up",
                desc: "Automated billing tracking, invoice logs, client notification alerts, and balance statement visualization.",
                img: "/images/project_payment.png",
                icon: Receipt,
                color: "text-emerald-500",
              },
            ].map((proj, i) => {
              const Icon = proj.icon;
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
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 backdrop-blur-md hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-950/60 transition-all flex flex-col cursor-pointer group shadow-xl"
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={proj.img}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-6 h-6 ${proj.color}`} />
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{proj.title}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-blue-100/20 dark:from-slate-950 dark:to-blue-950/20" />
        <div className="max-w-5xl mx-auto relative z-10 p-6 sm:p-12 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 backdrop-blur-xl text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Ready to Transform Your Business?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
            Join the forward-thinking enterprises that trust MuForge to architect their digital future.
            Let&apos;s build something extraordinary together.
          </p>
          <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold px-10 h-14 rounded-full text-lg shadow-xl transition-transform hover:scale-105 cursor-pointer">
            Contact Our Experts
          </Button>
        </div>
      </section>
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="absolute inset-0 cursor-pointer" onClick={() => setIsModalOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl text-center z-10 overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="relative w-28 h-28 mx-auto mb-5 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-slate-900 relative">
                  <Image 
                    src="/images/tharun.jpg" 
                    alt="Tharun U" 
                    fill
                    sizes="112px"
                    className="object-cover" 
                  />
                </div>
                <div className="absolute inset-0 -m-1 rounded-full border border-cyan-500/30 animate-ping opacity-60 pointer-events-none" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-0.5">THARUN U</h3>
              <p className="text-xs font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 mb-6 uppercase">Founder, MuForge</p>
              
              <div className="space-y-3 text-left">
                <a 
                  href="https://wa.me/919790261693" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-950/40 hover:border-cyan-500/50 hover:bg-slate-100 dark:hover:bg-slate-950 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">Call / WhatsApp</p>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200">9790261693</p>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-slate-400 group-hover:text-cyan-500 transition-colors" />
                </a>

                <a 
                  href="mailto:muforgetech@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-950/40 hover:border-cyan-500/50 hover:bg-slate-100 dark:hover:bg-slate-950 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">Email Address</p>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate max-w-[170px]">muforgetech@gmail.com</p>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-slate-400 group-hover:text-cyan-500 transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

