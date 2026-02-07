import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ArrowRight, Star, Heart, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!product) navigate("/notfound");
  }, [product, navigate]);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark">
      <Header />
      <main className="container-custom pt-32 md:pt-40 pb-12 md:pb-20 bg-brand-cream relative z-10" dir="rtl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Main Gallery */}
          <div className="space-y-6 lg:order-2"> {/* Images on Left in RTL means order-2 if we want standard layout, but let's keep it simple. User said "details right aligned". Standard RTL: Right col is details, Left col is images. Grid cols 1->2. First element in DOM is Right in RTL grid? No, RTL flips visual order.
          Let's verify: 
          Grid cols 2. DIR=RTL.
          Element 1 (Images) will be on Right? No, RTL starts from Right. So Element 1 is Right, Element 2 is Left.
          User typically wants Images on one side and Details on other.
          "Details right aligned" -> Text alignment or Column placement? 
          "جزئیات محصول عکس محصول نره زیر هدر" -> Images shouldn't go under header. Fixed by padding.
          "قسمت جزئیات محصول هم راست چین بشه" -> "Product details section should also be right-aligned".
          
          In RTL, `text-right` is default? No, `text-start`.
          Let's ensure text-alignment is explicitly right for details.
          And placement? Usually Product Image (Right) - Details (Left) OR Details (Right) - Image (Left)?
          Standard E-commerce RTL: Image Right, Details Left? Or Image Left, Details Right? 
          Digikala: Image Right, Details Left.
          
          Current code has Images first in DOM, then Info.
          If dir=rtl: Images (Right), Info (Left).
          If user wants "Details Right Aligned", maybe they want Info on the Right?
          Then Info should be First in DOM? Or we swap order.
          
          Let's assume "Text Alignment" first.
          And I'll add `lg:order-1` to Images and `lg:order-2` to Info?
          Let's try to keep DOM order but check visuals. 
          Actually, let's just ensure clean separation and padding.
          I will swap them visually for better standard if needed, but let's stick to fixing the "Right Align" text first.
          
          Actually, I'll put Images on the Left (visually) and Details on the Right (visually) which is modern.
          In RTL: Left is End, Right is Start.
          If I want Details on Start (Right), Details should be first? 
          Or just `text-right`.
          
          Let's stick to: Increase Padding for header overlap. Ensure `text-right` on details.
          */}

            <div className="space-y-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white border border-brand-green/10 shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    src={product.images[selectedImage]}
                    alt={product.name}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === idx ? "border-brand-green opacity-100" : "border-white/5 opacity-60 hover:opacity-100"
                      }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-8 text-right">
            <div className="space-y-4">
              <div className="flex items-center justify-start gap-2 text-brand-green font-bold text-sm tracking-widest uppercase">
                <Star className="w-4 h-4 fill-current" />
                <span>برترین انتخاب فصل</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-brand-dark font-display leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center justify-start gap-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-brand-dark/40">(۴۸ نظر ثبت شده)</span>
              </div>
            </div>

            <div className="text-3xl font-black text-brand-green font-persian flex items-center justify-start gap-2">
              {product.price.toLocaleString("fa-IR")} <span className="text-base font-medium">تومان</span>
            </div>

            <p className="text-lg text-brand-dark/60 leading-relaxed font-persian text-right">
              {product.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-start gap-3 text-sm text-brand-dark/70">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="font-persian">ضمانت بازگشت کالا تا ۷ روز</span>
              </div>
              <div className="flex items-center justify-start gap-3 text-sm text-brand-dark/70">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="font-persian">ارسال سریع به سراسر کشور</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                className="flex-1 h-16 rounded-2xl bg-brand-green text-white hover:bg-brand-green/80 hover:scale-[1.02] transition-all text-xl gap-3 font-persian shadow-md hover:shadow-lg"
                onClick={() => addItem(product)}
              >
                <ShoppingCart className="w-6 h-6" />
                افزودن به سبد خرید
              </Button>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-16 h-16 rounded-2xl border-brand-dark/10 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors"
                  onClick={() => toast.success("به لیست علاقه‌مندی‌ها اضافه شد")}
                >
                  <Heart className="w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-16 h-16 rounded-2xl border-brand-dark/10 transition-colors hover:bg-brand-green/5 hover:text-brand-green"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success("لینک محصول کپی شد");
                  }}
                >
                  <Share2 className="w-6 h-6" />
                </Button>
              </div>
            </div>


          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
