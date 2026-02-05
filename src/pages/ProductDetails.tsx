import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../components/ProductsSection";
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
      <main className="container-custom py-12 md:py-20 bg-brand-cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Main Gallery */}
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

          {/* Product Info */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-brand-green font-bold text-sm tracking-widest uppercase">
                <Star className="w-4 h-4 fill-current" />
                <span>برترین انتخاب فصل</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-brand-dark font-display">
                {product.name}
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(۴۸ نظر ثبت شده)</span>
              </div>
            </div>

            <div className="text-3xl font-black text-brand-green font-persian">
              {product.price.toLocaleString("fa-IR")} <span className="text-base font-medium">تومان</span>
            </div>

            <p className="text-lg text-brand-dark/60 leading-relaxed font-persian">
              {product.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
                <span>ضمانت بازگشت کالا تا ۷ روز</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
                <span>ارسال سریع به سراسر کشور</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                className="flex-1 h-14 rounded-2xl bg-brand-green text-white hover:bg-brand-green/80 hover:scale-[1.02] transition-all text-lg gap-3 font-persian shadow-lg shadow-brand-green/20"
                onClick={() => addItem(product)}
              >
                <ShoppingCart className="w-5 h-5" />
                افزودن به سبد خرید
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-2xl border-border/50 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors"
                onClick={() => toast.success("به لیست علاقه‌مندی‌ها اضافه شد")}
              >
                <Heart className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-2xl border-border/50 transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success("لینک محصول کپی شد");
                }}
              >
                <Share2 className="w-6 h-6" />
              </Button>
            </div>

            {/* Additional Details */}
            <div className="mt-8 p-8 bg-white/50 backdrop-blur-sm rounded-[2rem] border border-brand-green/10 space-y-6 shadow-sm">
              <h3 className="font-bold text-xl text-brand-green">مشخصات کالا</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm font-persian">
                <div className="text-brand-dark/40">جنس:</div>
                <div className="font-bold text-brand-dark">درجه یک وارداتی</div>
                <div className="text-brand-dark/40">دسته‌بندی:</div>
                <div className="font-bold text-brand-dark">{product.category}</div>
                <div className="text-brand-dark/40">وضعیت:</div>
                <div className="font-bold text-brand-green">موجود در انبار</div>
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
