import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "زمان تحویل سفارش‌ها چقدر است؟",
        answer: "سفارش‌های تهران معمولاً در کمتر از ۲۴ ساعت کاری و سفارش‌های شهرستان بین ۲ تا ۴ روز کاری توسط پست یا تیپاکس تحویل داده می‌شوند."
    },
    {
        question: "آیا محصولات اورجینال هستند؟",
        answer: "بله، تمام محصولات موجود در VintageStyling با ضمانت اصالت و کیفیت ارائه می‌شوند. ما مستقیماً بهترین کالکشن‌های خارجی را وارد می‌کنیم."
    },
    {
        question: "امکان تعویض یا بازگشت کالا وجود دارد؟",
        answer: "بله، شما تا ۷ روز پس از دریافت کالا، در صورت عدم استفاده و حفظ شرایط اولیه محصول، امکان بازگشت یا تعویض آن را دارید."
    },
    {
        question: "چگونه می‌توانم سایز مناسب خود را انتخاب کنم؟",
        answer: "در صفحه هر محصول راهنمای سایز دقیق به سانتیمتر قرار داده شده است. همچنین می‌توانید با پشتیبانی ما در تلگرام مشورت کنید."
    },
    {
        question: "آیا خرید حضوری هم دارید؟",
        answer: "در حال حاضر تمرکز ما بر روی فروش آنلاین است تا بتوانیم بهترین قیمت و خدمات را به کل کشور ارائه دهیم، اما تمامی عکس‌ها غیر ژورنالی و واقعی هستند."
    }
];

const FAQSection = () => {
    return (
        <section className="py-24 bg-white/50 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto" dir="rtl">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-green/10 border border-brand-green/20 rounded-full text-brand-green text-[10px] md:text-sm font-black uppercase tracking-widest">
                            <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />
                            <span>Questions</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-brand-dark tracking-tighter">
                            سوالات <span className="text-brand-green">متداول</span>
                        </h2>
                    </div>

                    <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-12 border border-brand-green/10 shadow-xl">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-brand-green/5 rounded-2xl px-6 transition-all hover:border-brand-green/20 bg-brand-cream/5"
                                >
                                    <AccordionTrigger className="text-right py-6 hover:no-underline font-persian font-bold text-lg md:text-xl text-brand-dark hover:text-brand-green transition-colors">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-right text-brand-green/60 font-persian leading-relaxed text-base md:text-lg pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
