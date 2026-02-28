import { ArrowRight, Users } from 'lucide-react';

function BottleSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22 8 L22 20 Q18 24 16 32 L14 60 L14 130 Q14 140 20 144 L40 144 Q46 140 46 130 L46 60 L44 32 Q42 24 38 20 L38 8 Z"
        fill="currentColor"
        opacity="0.12"
      />
      <rect x="22" y="4" width="16" height="8" rx="3" fill="currentColor" opacity="0.15" />
      <rect x="18" y="55" width="24" height="50" rx="2" fill="currentColor" opacity="0.08" />
    </svg>
  );
}

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, oklch(0.22 0.08 250) 0%, oklch(0.30 0.10 240) 30%, oklch(0.42 0.12 220) 60%, oklch(0.55 0.10 200) 85%, oklch(0.68 0.08 185) 100%)',
      }}
    >
      {/* Hero background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.png')" }}
      />

      {/* Floating bottle silhouettes */}
      <BottleSilhouette className="absolute top-16 left-[8%] w-16 h-40 text-white animate-float-slow" />
      <BottleSilhouette className="absolute top-32 right-[10%] w-12 h-32 text-white animate-float-medium" />
      <BottleSilhouette className="absolute bottom-24 left-[18%] w-10 h-28 text-white animate-float-fast" />
      <BottleSilhouette className="absolute bottom-16 right-[22%] w-14 h-36 text-white animate-float-slow" />
      <BottleSilhouette className="absolute top-1/2 left-[3%] w-8 h-24 text-white animate-float-medium" />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white/90 text-sm font-medium mb-8">
          <Users className="w-4 h-4 text-brand-aqua" />
          <span>Purpose-Driven Brand Activation Agency</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Where Marketing Meets{' '}
          <span className="text-brand-aqua">Social Impact</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
          We help schools, hospitals, and growing brands connect with communities through purpose-driven offline campaigns.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => handleScroll('#contact')}
            className="group flex items-center gap-2 px-8 py-4 bg-brand-green text-white font-semibold text-base rounded-xl hover:bg-brand-green-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Start a Campaign
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => handleScroll('#about')}
            className="flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold text-base rounded-xl border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            Partner With Us
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { value: '25K+', label: 'Bottles Per Campaign' },
            { value: '50+', label: 'Brand Partners' },
            { value: '100+', label: 'Communities Reached' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/65 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 Q360 80 720 40 Q1080 0 1440 40 L1440 80 L0 80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
