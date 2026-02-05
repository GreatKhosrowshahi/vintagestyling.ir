import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import CategoriesSection from "@/components/CategoriesSection";
import NewsletterSection from "@/components/NewsletterSection";
import FAQSection from "@/components/FAQSection";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-cream relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] bg-brand-green/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] -left-[10%] w-[40vw] h-[40vw] bg-brand-green/[0.03] blur-[100px] rounded-full" />

        <motion.div
          style={{ y: backgroundY }}
          className="absolute top-1/2 left-0 w-full text-[25vw] font-black text-brand-dark/[0.01] select-none text-center whitespace-nowrap leading-none"
        >
          VINTAGE STYLING
        </motion.div>
      </div>

      <Header />
      <main className="relative z-10">
        <PromoBanner />
        <div className="space-y-0">
          <CategoriesSection />
          <ProductsSection />
          <NewsletterSection />
          <FAQSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
