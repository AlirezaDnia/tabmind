import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_40%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center">
        
        <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
          AI-powered browser memory
        </div>

        <h1 className="max-w-5xl text-6xl font-bold leading-tight tracking-tight md:text-7xl">
          Never lose useful
          <span className="block text-white/50">
            content again.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
          Save articles, code snippets, and ideas directly
          from your browser.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg">
            Install Extension
          </Button>

          <Button size="lg" variant="secondary">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}