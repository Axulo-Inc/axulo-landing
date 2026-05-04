'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SystemVisual from '@/components/SystemVisual';

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/35 blur-3xl" />
        <div className="absolute bottom-0 right-16 h-52 w-52 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-blue-100">
            Production-grade decentralized intelligence
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Build secure AI-native systems with <span className="text-blue-300">Axulo</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-blue-100 md:text-lg">
            Axulo helps teams launch fast with hardened infrastructure, observability, and policy-aware orchestration from day one.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#waitlist"
              className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Platform
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-sky-300/40 px-6 py-3 text-sm font-semibold text-sky-200 transition hover:bg-sky-300/10"
            >
              Book a Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <SystemVisual />
        </motion.div>
      </div>
    </header>
  );
}
