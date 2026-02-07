import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, Sparkles, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
    {
        id: 1,
        title: "NEW SEASON",
        subtitle: "WINTER COLLECTION 2026",
        description: "کالکشن زمستانه با طراحی‌های اختصاصی و پارچه‌های وارداتی درجه یک.",
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e194?auto=format&fit=crop&q=80&w=1200", // Stylish model
        color: "#123c0a"
    },
    {
        id: 2,
        title: "STREET WEAR",
        subtitle: "URBAN ESSENTIALS",
        description: "استایل خیابانی خود را با جدیدترین آیتم‌های ترند جهانی ارتقا دهید.",
        image: "https://images.unsplash.com/photo-1523398002811-69988e2c695d?auto=format&fit=crop&q=80&w=1200", // Urban style
        color: "#000000"
    },
    {
        id: 3,
        title: "LIMITED DROP",
        subtitle: "EXCLUSIVE VINTAGE",
        description: "تعداد محدود. کیفیت نامحدود. فقط برای کسانی که تفاوت را می‌فهمند.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200", // Fashion editorial
        color: "#3f2e18"
    }
];

const PromoBanner = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[90vh] overflow-hidden bg-brand-dark text-white">
            {/* Background Slides */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <img
                        src={slides[current].image}
                        alt={slides[current].title}
                        className="w-full h-full object-cover opacity-60"
                        style={{ objectPosition: "center 20%" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1200px] w-full mx-auto relative z-10" dir="rtl">
                    <motion.div
                        key={`text-${current}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-right space-y-6"
                    >
                        {/* Subtitle Badge */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-12 h-[1px] bg-white/60" />
                            <span className="text-sm md:text-base font-bold tracking-[0.3em] font-body uppercase text-white/80">
                                {slides[current].subtitle}
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black font-display tracking-tighter leading-[0.9] uppercase text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60">
                            {slides[current].title}
                        </h1>

                        {/* Description & CTA */}
                        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mt-8">
                            <p className="max-w-xl text-lg md:text-xl text-white/70 font-persian leading-relaxed pl-8 border-l border-white/10">
                                {slides[current].description}
                            </p>

                            <Button
                                className="h-16 px-10 rounded-full bg-white text-brand-dark hover:bg-brand-green hover:text-white transition-all duration-300 font-bold text-lg md:text-xl group"
                            >
                                <span className="font-persian">خرید کالکشن</span>
                                <ArrowLeft className="mr-3 w-5 h-5 transition-transform group-hover:-translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Progress/Navigation */}
            <div className="absolute bottom-12 left-12 flex gap-4 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${current === idx ? "w-12 bg-white" : "w-4 bg-white/20 hover:bg-white/40"
                            }`}
                    />
                ))}
            </div>

            {/* Decor Elements */}
            <div className="absolute top-8 right-8 mix-blend-overlay opacity-50">
                <Globe className="w-12 h-12 text-white animate-spin-slow" />
            </div>
        </div>
    );
};

export default PromoBanner;
