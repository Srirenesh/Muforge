"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") || "";
    const lastName = formData.get("lastName") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";

    const subject = encodeURIComponent(`MuForge Inquiry from ${firstName} ${lastName}`);
    const body = encodeURIComponent(`Inquiry Details:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:muforgetech@gmail.com?subject=${subject}&body=${body}`;
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400"
          >
            Get in <span className="text-cyan-500 dark:text-cyan-400">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind, need technical training, or want to discuss digital solutions? We are here to help.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Contact Information</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Reach out to us directly or fill out the form. Our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/5 dark:bg-cyan-500/10 flex items-center justify-center border border-cyan-500/10 dark:border-cyan-500/20">
                  <Mail className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200">Email Us</h3>
                  <a href="mailto:muforgetech@gmail.com" className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">muforgetech@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 flex items-center justify-center border border-blue-500/10 dark:border-blue-500/20">
                  <Phone className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200">WhatsApp Us</h3>
                  <a href="https://wa.me/919790261693" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">+91 9790261693</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full bg-slate-100/50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full bg-slate-100/50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-slate-100/50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full bg-slate-100/50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
