import { ArrowLeft, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24" dir="rtl">

          {/* Text Content */}
          <div className="flex-1 text-right space-y-6">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase leading-none">
              JOIN THE <span className="text-brand-green">CULT.</span>
            </h2>
            <p className="text-white/60 font-persian text-lg max-w-md">
              از جدیدترین دراپ‌ها، تخفیف‌های مخفی و رویدادهای اختصاصی زودتر از بقیه باخبر شوید.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex-1 w-full max-w-xl flex justify-end">
            <a
              href="https://t.me/vintagestyling"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-brand-green text-white px-10 py-6 rounded-full font-black text-xl hover:bg-white hover:text-brand-dark transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 font-persian">عضویت در کانال تلگرام</span>
              <Send className="w-6 h-6 relative z-10 rotate-180 group-hover:rotate-0 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

        </div>

        {/* Big Background Text */}
        <div className="absolute bottom-[-10%] left-[-2%] text-[15vw] font-black font-display text-white/[0.02] select-none pointer-events-none leading-none">
          COMMUNITY
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;