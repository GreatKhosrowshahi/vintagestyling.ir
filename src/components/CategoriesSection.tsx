import { ArrowRight, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "T-Shirts",
    nameFa: "تی‌شرت",
    count: 24,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    size: "large"
  },
  {
    id: 2,
    name: "Hoodies",
    nameFa: "هودی",
    count: 18,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: 3,
    name: "Pants",
    nameFa: "شلوار",
    count: 15,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: 4,
    name: "Jackets",
    nameFa: "کت و کاپشن",
    count: 21,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800",
    size: "large"
  },
  {
    id: 5,
    name: "Accessories",
    nameFa: "اکسسوری",
    count: 36,
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: 6,
    name: "Streetwear",
    nameFa: "استایل خیابانی",
    count: 42,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-32 bg-brand-cream relative overflow-hidden">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[60vw] h-[60vw] bg-brand-green/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-[40vw] h-[40vw] bg-brand-green/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header - More aggressive and modern */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10" dir="rtl">
          <div className="max-w-3xl text-right">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 text-brand-green mb-6"
            >
              <div className="w-12 h-px bg-brand-green/30" />
              <span className="text-xs font-black uppercase tracking-[0.4em]">Curated Collections</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-display font-black text-brand-dark tracking-tighter leading-none"
            >
              خرید بر <br /> اساس <span className="text-brand-green italic">دسته</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-sm text-right text-brand-green/50 font-persian leading-relaxed text-lg pb-4"
          >
            مجموعه‌ای از برترین استایل‌های وینتیج و خیابانی، انتخاب شده برای سلیقه‌ی خاص شما.
          </motion.p>
        </div>

        {/* Dynamic Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, idx) => (
            <CategoryCard key={category.id} category={category} index={idx} />
          ))}
        </div>

        {/* Floating CTA */}
        <div className="mt-32 flex justify-center">
          <motion.a
            href="#products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-8 px-12 py-6 bg-brand-dark text-white rounded-[2.5rem] font-black text-2xl shadow-float hover:shadow-elevated transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 font-persian">کالکشن کامل</span>
            <div className="relative z-10 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20">
              <MoveRight className="h-6 w-6 rotate-180" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ category, index }: { category: any, index: number }) => (
  <motion.a
    href="#products"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1, type: "spring", damping: 20 }}
    className={`group relative block overflow-hidden rounded-[3rem] bg-white shadow-cool hover:shadow-float transition-all duration-700 ${category.size === 'large' ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'
      }`}
  >
    {/* High-Resolution Reveal Effect */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.img
        src={category.image}
        alt={category.name}
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Advanced Multi-Layered Overlays */}
    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors duration-700" />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

    {/* Glass Morphic Details Layer */}
    <div className="absolute top-8 left-8 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
      <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] text-white font-black tracking-widest uppercase">
        {category.count} Items
      </div>
    </div>

    {/* Main Content */}
    <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end text-right" dir="rtl">
      <div className="relative z-10">
        <h3 className="text-3xl md:text-6xl font-display font-black text-white mb-4 leading-none tracking-tighter">
          {category.name}
          <span className="block text-brand-green text-sm md:text-xl font-persian mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
            {category.nameFa}
          </span>
        </h3>

        <div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-500">
          <Button variant="ghost" className="text-white p-0 hover:bg-transparent hover:text-brand-green flex items-center gap-3 text-lg font-black">
            <span className="font-persian">مشاهده کالکشن</span>
            <ArrowRight className="w-5 h-5 rotate-180" />
          </Button>
        </div>
      </div>
    </div>

    {/* Technical Line Elements */}
    <div className="absolute bottom-8 right-8 w-12 h-px bg-white/20 group-hover:w-24 transition-all duration-700" />
  </motion.a>
);

export default CategoriesSection;