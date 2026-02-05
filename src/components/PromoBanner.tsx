import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Percent, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
    {
        id: 1,
        title: "کالکشن جدید زمستانه",
        subtitle: "استایل‌های خاص وینتیج",
        description: "جدیدترین پافره‌ها و هودی‌های وارداتی با کیفیت تضمینی",
        icon: <Sparkles className="w-6 h-6" />,
        color: "bg-brand-green",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 2,
        title: "تخفیف‌های ویژه پایان فصل",
        subtitle: "تا ۵۰٪ تخفیف واقعی",
        description: "روی تمامی محصولات تی‌شرت و شلوار جین به مدت محدود",
        icon: <Percent className="w-6 h-6" />,
        color: "bg-brand-dark",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 3,
        title: "ارسال رایگان به کل کشور",
        subtitle: "خریدهای بالای ۲ میلیون تومان",
        description: "تحویل درب منزل در سریع‌ترین زمان ممکن با بسته‌بندی ویژه",
        icon: <Truck className="w-6 h-6" />,
        color: "bg-brand-green/80",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1200",
    },
];

const PromoBanner = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <div className="relative h-[500px] md:h-[750px] w-full overflow-hidden bg-brand-cream/50">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <motion.img
                        src={slides[current].image}
                        alt={slides[current].title}
                        initial={{ scale: 1.2, filter: "blur(10px)" }}
                        animate={{ scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-dark/95 via-brand-dark/40 to-transparent" />
                </motion.div>
            </AnimatePresence>

            <div className="container-custom relative h-full flex items-center pt-20" dir="rtl">
                <div className="max-w-4xl text-right">
                    <motion.div
                        key={`badge-${current}`}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl text-white text-xs md:text-base font-black mb-8 shadow-float"
                    >
                        <div className="p-2 bg-brand-green rounded-xl">
                            {slides[current].icon}
                        </div>
                        <span className="tracking-widest uppercase">{slides[current].subtitle}</span>
                    </motion.div>

                    <div className="relative mb-10">
                        <motion.h1
                            key={`title-main-${current}`}
                            initial={{ opacity: 0, y: 40, skewY: 5 }}
                            animate={{ opacity: 1, y: 0, skewY: 0 }}
                            transition={{ type: "spring", damping: 20, stiffness: 100 }}
                            className="text-5xl md:text-9xl font-display font-black text-white tracking-tighter leading-[0.85] relative z-10"
                        >
                            {slides[current].title.split(" ").map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </motion.h1>
                        <motion.div
                            key={`title-bg-${current}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.05, scale: 1 }}
                            className="absolute top-0 left-0 w-full text-[20vw] font-black text-white pointer-events-none select-none -translate-y-1/2"
                        >
                            VINTAGE
                        </motion.div>
                    </div>

                    <motion.p
                        key={`desc-${current}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-3xl text-white/60 font-persian leading-tight mb-12 max-w-xl font-medium"
                    >
                        {slides[current].description}
                    </motion.p>

                    <motion.div
                        key={`btn-${current}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="flex items-center gap-6"
                    >
                        <Button className="h-16 md:h-20 px-12 md:px-16 rounded-[2rem] bg-brand-green text-white hover:bg-white hover:text-brand-dark font-black text-xl md:text-2xl transition-all duration-500 shadow-float hover:shadow-elevated group">
                            مشاهده محصولات
                            <ArrowLeft className="mr-3 h-6 w-6 transition-transform group-hover:-translate-x-2" />
                        </Button>

                        <div className="hidden md:flex flex-col text-white/30 font-black text-sm uppercase tracking-widest leading-none">
                            <span>Premium</span>
                            <span>Imported</span>
                            <span>Quality</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-12 left-10 md:left-24 flex items-center gap-8 z-30">
                <div className="flex gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 transition-all duration-500 rounded-full ${current === i ? "w-16 bg-brand-green" : "w-4 bg-white/20 hover:bg-white/40"}`}
                        />
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={prev}
                        className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl text-white border border-white/10 hover:bg-brand-green hover:border-brand-green transition-all duration-500 flex items-center justify-center group"
                    >
                        <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                        onClick={next}
                        className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl text-white border border-white/10 hover:bg-brand-green hover:border-brand-green transition-all duration-500 flex items-center justify-center group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>

            <div className="absolute top-0 right-12 md:right-24 w-px h-full bg-white/5 hidden md:block" />
        </div>
    );
};

export default PromoBanner;
