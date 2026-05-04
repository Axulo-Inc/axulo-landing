'use client';

import { motion } from 'framer-motion';

const nodes = [
  { label: 'Ingestion', x: '8%', y: '52%' },
  { label: 'Security Layer', x: '27%', y: '28%' },
  { label: 'Inference Mesh', x: '50%', y: '16%' },
  { label: 'Policy Engine', x: '72%', y: '28%' },
  { label: 'Observability', x: '90%', y: '52%' },
];

export default function SystemVisual() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#60a5fa1f,transparent_55%)]" />
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>
        <path
          d="M40,170 C140,120 210,60 320,100 C400,130 500,130 610,170"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + index * 0.12, duration: 0.4 }}
          className="absolute"
          style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
        >
          <motion.div
            animate={{ boxShadow: ['0 0 0px #60a5fa66', '0 0 24px #60a5fa99', '0 0 0px #60a5fa66'] }}
            transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: index * 0.1 }}
            className="rounded-xl border border-sky-400/40 bg-slate-950/80 px-3 py-2 text-xs font-medium text-slate-100"
          >
            {node.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
