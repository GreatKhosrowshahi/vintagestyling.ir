import { Instagram, Send, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-cream pt-24 pb-8 border-t border-brand-dark/5">
      <div className="container-custom" dir="rtl">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">

          {/* Brand Info - Spans 4 columns */}
          <div className="lg:col-span-4 text-right space-y-8">
            <h3 className="text-3xl font-display font-black tracking-tighter text-brand-dark">
              VINTAGE STYLING
            </h3>
            <p className="text-brand-dark/60 font-persian leading-loose">
              مرجع تخصصی استایل خیابانی و پوشاک وینتیج وارداتی.
              ما داستان هر لباس را زنده می‌کنیم.
            </p>

            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/vintage.styling/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://t.me/vintagestyling" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all">
                <Send className="w-5 h-5" />
              </a>
              <a href="https://t.me/vintageadmin1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns - Spans 8 columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 text-right">

            {/* Column 1 */}
            <div className="space-y-6">
              <h4 className="font-bold text-brand-dark font-persian">دسترسی سریع</h4>
              <ul className="space-y-4 font-persian text-brand-dark/60 text-sm">
                <li><a href="#" className="hover:text-brand-green transition-colors">صفحه اصلی</a></li>
                <li><a href="#products" className="hover:text-brand-green transition-colors">محصولات جدید</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">تخفیف‌ها</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">وبلاگ</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <h4 className="font-bold text-brand-dark font-persian">راهنمای مشتریان</h4>
              <ul className="space-y-4 font-persian text-brand-dark/60 text-sm">
                <li><a href="#" className="hover:text-brand-green transition-colors">راهنمای سایز</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">رویه ارسال سفارش</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">رویه بازگشت کالا</a></li>
                <li><a href="#" className="hover:text-brand-green transition-colors">سوالات متداول</a></li>
              </ul>
            </div>

            {/* Column 3 - Contact */}
            <div className="col-span-2 md:col-span-1 space-y-6">
              <h4 className="font-bold text-brand-dark font-persian">تماس با ما</h4>
              <ul className="space-y-4 font-persian text-brand-dark/60 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-green" />
                  <span>info@vintagestyling.ir</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-dark/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 text-brand-dark/40 font-persian text-sm w-full justify-end">
            <p>کلیه حقوق مادی و معنوی این وب‌سایت محفوظ و متعلق به <span className="font-bold text-brand-dark">وینتج استایلینگ</span> می‌باشد © ۲۰۲۶</p>
            <span className="hidden md:block mx-2">|</span>
            <p className="opacity-100 font-medium">
              طراحی و توسعه: <a href="https://runtimestudio.ir" target="_blank" rel="noopener noreferrer" className="font-black text-brand-dark hover:text-brand-green transition-colors text-base border-b-2 border-brand-green/20 hover:border-brand-green pb-0.5" title="طراحی سایت توسط استدیو ران‌تایم">استدیو ران‌تایم</a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;