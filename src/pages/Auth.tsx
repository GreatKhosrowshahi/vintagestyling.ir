import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Lock, ArrowRight, UserPlus, LogIn, Github } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-green selection:text-white">
      <Header />

      <main className="container-custom pt-32 pb-20 flex items-center justify-center">
        <div className="w-full max-w-xl relative">
          {/* Background Glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-green/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-cream/5 rounded-full blur-[100px] animate-pulse delay-700" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-[#0a0a0a]/80 backdrop-blur-3xl rounded-[2.5rem] border border-brand-green/10 p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            {/* Toggle Tabs */}
            <div className="flex bg-white/5 p-1 rounded-2xl mb-12 border border-white/5">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-xl transition-all duration-300 font-persian flex items-center justify-center gap-2 ${isLogin ? "background-brand-green bg-brand-green text-white shadow-lg" : "text-gray-400 hover:text-white"
                  }`}
              >
                <LogIn className="w-4 h-4" />
                ورود
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-xl transition-all duration-300 font-persian flex items-center justify-center gap-2 ${!isLogin ? "background-brand-green bg-brand-green text-white shadow-lg" : "text-gray-400 hover:text-white"
                  }`}
              >
                <UserPlus className="w-4 h-4" />
                ثبت‌نام
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? "login" : "signup"}
                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-black font-display tracking-tight text-brand-cream">
                    {isLogin ? "خوش آمدید" : "ساخت حساب نو"}
                  </h2>
                  <p className="text-gray-400 font-persian">
                    {isLogin
                      ? "برای دسترسی به پنل خود و پیگیری سفارشات وارد شوید."
                      : "به جمع خانواده Vintage Styling بپیوندید."}
                  </p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label className="text-gray-300 font-persian mr-1">نام و نام خانوادگی</Label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-green transition-colors" />
                        <Input
                          type="text"
                          placeholder="نام خود را وارد کنید"
                          className="h-14 pl-12 bg-white/5 border-white/5 focus:border-brand-green/50 focus:ring-brand-green/20 rounded-2xl font-persian text-brand-cream"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label className="text-gray-300 font-persian mr-1">ایمیل</Label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-green transition-colors" />
                      <Input
                        type="email"
                        placeholder="example@gmail.com"
                        className="h-14 pl-12 bg-white/5 border-white/5 focus:border-brand-green/50 focus:ring-brand-green/20 rounded-2xl text-brand-cream"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label className="text-gray-300 font-persian mr-1">رمز عبور</Label>
                      {isLogin && (
                        <button className="text-xs text-brand-green hover:underline font-persian">فراموش کردید؟</button>
                      )}
                    </div>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-green transition-colors" />
                      <Input
                        type="password"
                        placeholder="••••••••"
                        className="h-14 pl-12 bg-white/5 border-white/5 focus:border-brand-green/50 focus:ring-brand-green/20 rounded-2xl text-brand-cream"
                      />
                    </div>
                  </div>

                  <Button className="w-full h-14 rounded-2xl bg-brand-green hover:bg-brand-green/80 text-white font-black text-lg transition-all shadow-lg shadow-brand-green/20 font-persian gap-2">
                    {isLogin ? "ورود به حساب" : "ایجاد حساب کاربری"}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>

                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/5"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[#0a0a0a] px-4 text-gray-500 font-persian">یا ادامه با</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-13 rounded-2xl border-white/5 bg-white/5 hover:bg-white/10 text-brand-cream gap-2 font-persian">
                    <Github className="w-5 h-5" />
                    گیت‌هاب
                  </Button>
                  <Button variant="outline" className="h-13 rounded-2xl border-white/5 bg-white/5 hover:bg-white/10 text-brand-cream gap-2 font-persian">
                    <div className="w-5 h-5 bg-brand-cream rounded-full p-0.5 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-full h-full fill-black"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.27.81-.57z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                    </div>
                    گوگل
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;
