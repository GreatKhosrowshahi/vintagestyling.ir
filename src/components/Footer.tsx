import { Instagram, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-brand-cream pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-green/5 to-transparent" />

      <div className="container-custom relative z-10" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-10 text-right">
            <h3 className="text-4xl font-display font-black tracking-tighter text-brand-dark">
              VINTAGE<br /><span className="text-brand-green">STYLLING</span>
            </h3>
            <div className="space-y-4">
              <p className="text-brand-green/60 leading-relaxed font-persian text-sm md:text-base">
                خاص‌ترین کالکشن‌های خیابانی و وینتیج وارداتی برای استایل‌های متمایز.
              </p>
              <div className="flex items-center gap-4 text-brand-green opacity-40">
                <div className="w-8 h-px bg-current" />
                <span className="text-[10px] font-black uppercase tracking-widest">Premium Quality</span>
              </div>
            </div>

            {/* E-Namad Placeholder */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 bg-white/40 backdrop-blur-xl rounded-3xl border border-brand-green/10 p-4 flex items-center justify-center shadow-cool overflow-hidden"
            >
              <img
                src="/images/enamad.png"
                alt="e-Namad"
                className="w-full h-full object-contain opacity-40 grayscale group-hover:grayscale-0 transition-all"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=e-Namad';
                }}
              />
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider font-persian text-brand-green">محصولات</h4>
            <ul className="space-y-3 font-persian">
              {["تی‌شرت", "هودی", "شلوار", "کت", "کاپشن"].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-brand-dark/60 hover:text-brand-green transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider font-persian text-brand-green">پشتیبانی</h4>
            <ul className="space-y-4 font-persian">
              <li>
                <a href="#products" className="text-brand-dark/70 hover:text-brand-green transition-colors text-sm font-medium">
                  راهنمای سایز
                </a>
              </li>
              <li>
                <a href="#products" className="text-brand-dark/70 hover:text-brand-green transition-colors text-sm font-medium">
                  شرایط ارسال
                </a>
              </li>
              <li>
                <a href="#products" className="text-brand-dark/70 hover:text-brand-green transition-colors text-sm font-medium">
                  شرایط بازگشت
                </a>
              </li>
              <li>
                <a href="#products" className="text-brand-dark/70 hover:text-brand-green transition-colors text-sm font-medium">
                  سوالات متداول
                </a>
              </li>
              <li>
                <a href="/auth" className="text-brand-dark/70 hover:text-brand-green transition-colors text-sm font-medium">
                  ارتباط با ما
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider font-persian text-brand-green">ارتباط با ما</h4>
            <div className="flex flex-col gap-4">
              {[
                { icon: <Instagram className="h-6 w-6" />, label: "اینستاگرام", href: "https://www.instagram.com/vintage.styling/", sub: "@vintage.styling" },
                { icon: <Send className="h-6 w-6" />, label: "کانال تلگرام", href: "https://t.me/vintagestyling", sub: "@vintagestyling" },
                { icon: <MessageCircle className="h-6 w-6" />, label: "پشتیبانی (ادمین)", href: "https://t.me/vintageadmin1", sub: "ارسال پیام" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-green/5 hover:border-brand-green/30 hover:bg-brand-green/5 transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                    {social.icon}
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-sm font-bold text-brand-dark group-hover:text-brand-green transition-colors font-persian">
                      {social.label}
                    </span>
                    <span className="text-[10px] text-brand-green/40 font-persian">
                      {social.sub}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-green/10" dir="rtl">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-brand-green/40 text-sm font-persian text-right">
              © {new Date().getFullYear()} VintageStyling. تمامی حقوق محفوظ است.
            </p>
            <div className="flex items-center gap-6 text-sm text-brand-green/40">
              <a href="#" className="hover:text-brand-green transition-colors font-persian">
                حریم خصوصی
              </a>
              <a href="#" className="hover:text-brand-green transition-colors font-persian">
                شرایط استفاده
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;