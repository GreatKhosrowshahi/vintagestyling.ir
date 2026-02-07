import { ShoppingCart, Heart, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  category?: string;
}

const ProductCard = ({ id, name, description, price, images, category }: ProductCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("fa-IR").format(amount);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id, name, price, images, category });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${id}`)}
      className={`group relative bg-white/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-brand-green/10 hover:border-brand-green transition-all duration-500 cursor-pointer flex flex-col`}
    >
      {/* Category Badge - Now on the right for variety */}
      {category && (
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-brand-green/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-wider rounded-lg shadow-sm">
            {category}
          </span>
        </div>
      )}

      {/* Interactive Actions */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 translate-x-[-20%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
        <Button
          size="icon"
          variant="secondary"
          className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-md border border-brand-green/10 hover:bg-brand-green text-brand-green hover:text-white shadow-xl transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            toast.success("به لیست علاقه‌مندی‌ها اضافه شد");
          }}
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>

      {/* Image Gallery */}
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={name}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />

        {/* Rapid Change Trigger */}
        {images.length > 1 && isHovered && (
          <div
            className="absolute inset-0 z-10 grid"
            style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)` }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const sectionWidth = rect.width / images.length;
              const index = Math.floor(x / sectionWidth);
              if (index !== currentImage && index >= 0 && index < images.length) {
                setCurrentImage(index);
              }
            }}
          >
            {images.map((_, i) => <div key={i} className="h-full w-full" />)}
          </div>
        )}

        {/* Progress Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 transition-all duration-300 rounded-full ${currentImage === idx ? "w-6 bg-brand-green" : "w-1.5 bg-brand-green/20"}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Section - Redesigned for Clarity */}
      <div className="p-3 md:p-5 flex flex-col flex-1 bg-white/30">
        <div className="flex items-center justify-between mb-2 md:mb-3 gap-2 md:gap-3" dir="rtl">
          <h3 className="font-bold text-xs md:text-xl text-brand-dark group-hover:text-brand-green transition-colors duration-300 line-clamp-1 flex-1 text-right">
            {name}
          </h3>
          <div className="flex items-center gap-1 md:gap-1.5 bg-brand-green/5 text-brand-green px-1 md:px-2 py-0.5 md:py-1 rounded-md md:rounded-lg border border-brand-green/10">
            <span className="text-[10px] md:text-sm">4.9</span>
            <Star className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 fill-current" />
          </div>
        </div>

        {/* Dedicated Description Space */}
        <div className="mb-3 md:mb-6 min-h-[32px] md:min-h-[40px]" dir="rtl">
          <p className="text-[10px] md:text-sm text-brand-dark/70 leading-tight md:leading-relaxed font-persian text-right line-clamp-2">
            {description}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-3" dir="rtl">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[8px] md:text-[10px] text-brand-green/40 font-bold uppercase tracking-wider">قیمت</span>
              <div className="flex items-center gap-1">
                <span className="text-sm md:text-2xl font-black text-brand-green font-persian">
                  {formatPrice(price)}
                </span>
                <span className="text-[8px] md:text-xs font-bold text-brand-green/60">تومان</span>
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.94 }}
              className="flex items-center justify-center w-8 h-8 md:w-auto md:px-5 md:h-12 rounded-lg md:rounded-xl bg-brand-green text-white hover:bg-brand-dark transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden md:inline mr-2 font-persian font-black text-sm">افزودن</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;