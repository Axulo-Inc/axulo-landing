import HeroSection from '@/components/HeroSection';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { CheckCircle2, GaugeCircle, LockKeyhole, Network, Rocket, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/site';

const features = [
  {
    icon: GaugeCircle,
    title: 'Ultra-fast inference routing',
    description:
      'Route workloads across optimized compute tiers with latency-aware orchestration and intelligent failover.',
  },
  {
    icon: LockKeyhole,
    title: 'Security-first architecture',
    description:
      'Runtime policy controls, encrypted transport, and audit-ready workflows built for regulated environments.',
  },
  {
    icon: Network,
    title: 'Composable system mesh',
    description:
      'Connect data sources, models, and agents with predictable pipelines and production-grade observability.',
  },
];

const benefits = [
  'Dedicated implementation support',
  'Architecture review with Axulo engineers',
  'Priority access to new platform releases',
  'Deployment guides for teams and enterprise environments',
];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: ['https://github.com/Axulo-Inc'],
    description: siteConfig.description,
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <HeroSection />

      <main>
        <section id="features" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Platform capabilities
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Built for high-assurance AI and decentralized systems
            </h2>
            <p className="mt-3 text-slate-600">
              Axulo combines speed, control, and resilience so your team can ship faster without sacrificing governance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <Icon className="h-8 w-8 text-blue-600" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="waitlist" className="border-y border-slate-200 bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-start">
            <div>
              <p className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
                <Rocket className="mr-2 h-3.5 w-3.5" />
                Launch with confidence
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Get early access to Axulo
              </h2>
              <p className="mt-4 text-slate-600">
                We partner with product and platform teams to move from prototype to production quickly.
              </p>

              <ul className="mt-6 space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start text-sm text-slate-700">
                    <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <LeadCaptureForm />
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-slate-950 py-12 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold text-white">Axulo Technologies</p>
            <p className="mt-2 text-sm text-slate-400">Secure infrastructure for decentralized intelligence.</p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <a href="#waitlist" className="transition hover:text-white">
              Join waitlist
            </a>
            <a
              href="https://github.com/Axulo-Inc"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
            <a href="mailto:hello@axulo.com" className="transition hover:text-white">
              hello@axulo.com
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 px-6 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Axulo Technologies Inc. All rights reserved.
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
