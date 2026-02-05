import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Streetwear Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Orange Glow Effect */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 border border-brand-green/30 rounded-full mb-8 animate-fade-in shadow-[0_0_20px_rgba(18,60,10,0.2)]">
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
            <span className="text-sm font-medium text-brand-green uppercase tracking-wider font-persian">کالکشن جدید ۲۰۲۵</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title mb-6 animate-fade-in text-brand-dark" style={{ animationDelay: "0.1s" }}>
            GIVE <span className="text-gradient">SOUL</span><br />
            TO YOUR <span className="text-gradient">STYLE</span>
          </h1>

          {/* Persian Subtitle */}
          <p className="hero-subtitle mb-10 animate-fade-in font-persian text-xl md:text-2xl text-brand-green/70" style={{ animationDelay: "0.2s" }}>
            تمام کارها اورجینال و وارداتی
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="#products">
              <Button className="h-14 px-8 rounded-2xl bg-brand-green text-white hover:bg-brand-green/90 transition-all duration-300 font-persian font-bold group" size="lg">
                مشاهده محصولات
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#products">
              <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-black transition-all duration-300 font-persian font-bold shadow-lg" size="lg">
                خرید آنلاین
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-brand-green rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;