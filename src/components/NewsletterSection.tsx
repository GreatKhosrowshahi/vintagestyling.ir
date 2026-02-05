import { Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-green/10 blur-[100px] rounded-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-brand-dark/5 blur-[80px] rounded-full" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-6xl mx-auto bg-white/40 backdrop-blur-3xl border border-white/20 p-10 md:p-20 rounded-[4rem] text-center shadow-float relative overflow-hidden group"
        >
          {/* Animated Internal Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent group-hover:opacity-100 transition-opacity" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10" dir="rtl">
            <div className="text-right flex-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-dark text-white rounded-full text-[10px] font-black uppercase tracking-widest"
              >
                <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                VINTAGE COMMUNITY
              </motion.div>
              <h2 className="text-5xl md:text-8xl font-display font-black text-brand-dark tracking-tighter leading-none">
                همراه <br /> <span className="text-brand-green italic">تلگرام</span> ما شو
              </h2>
              <p className="text-brand-green/50 font-persian leading-relaxed text-xl md:text-2xl max-w-lg">
                خبرهای داغ، کالکشن‌های محدود و کدهای تخفیف مخصوص اعضای وفادار.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 min-w-[320px]">
              <motion.a
                href="https://t.me/vintagestyling"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full inline-flex items-center justify-center gap-4 bg-brand-green text-white px-10 py-6 rounded-[2rem] font-black text-2xl hover:bg-brand-dark transition-all duration-500 shadow-elevated group/btn relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700" />
                <Send className="h-6 w-6" />
                <span className="font-persian">عضویت فوری</span>
                <ArrowRight className="h-5 w-5 rotate-180 group-hover/btn:-translate-x-2 transition-transform" />
              </motion.a>
              <div className="flex flex-col items-center gap-2">
                <div className="flex -space-x-4 space-x-reverse">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-cream bg-brand-green/10 flex items-center justify-center text-[10px] font-black overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-brand-cream bg-brand-dark text-white flex items-center justify-center text-[8px] font-black z-10">
                    +10K
                  </div>
                </div>
                <p className="text-brand-green/40 text-[10px] font-black uppercase tracking-widest">Active Community Members</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;