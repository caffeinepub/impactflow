import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Droplets, Eye, Heart } from 'lucide-react';

const pillars = [
  { icon: Droplets, title: 'Hydration Access', description: 'Providing clean water to communities in need.' },
  { icon: Eye, title: 'Awareness Campaigns', description: 'Spreading meaningful messages at scale.' },
  { icon: Heart, title: 'Community Care', description: 'Building lasting trust through genuine service.' },
];

export default function SocialImpactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="impact" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/assets/generated/community-event.dim_1200x600.png"
              alt="Community event with branded water bottle distribution"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green/15 rounded-xl flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <div className="text-brand-navy font-bold text-sm">Real Community Impact</div>
                    <div className="text-brand-slate text-xs">Every bottle tells a story of care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Social Impact
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight mb-6">
              Marketing With Meaning
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-8">
              Every campaign is designed to provide real utility to communities. Our distribution drives promote hydration, awareness, and accessibility — while ensuring brand visibility in responsible and respectful ways.
            </p>
            <p className="text-brand-slate text-base leading-relaxed mb-10">
              We don't just deliver bottles — we deliver moments of connection between brands and the people they serve. Each campaign leaves a lasting impression built on genuine community benefit.
            </p>

            <div className="space-y-4">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4 p-4 bg-brand-surface rounded-xl border border-brand-blue/8">
                  <div className="w-10 h-10 bg-brand-green/15 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <div className="text-brand-navy font-semibold text-sm">{title}</div>
                    <div className="text-brand-slate text-sm mt-0.5">{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
