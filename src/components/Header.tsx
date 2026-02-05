import { useState, useEffect } from "react";
import { ShoppingBag, User, Menu, X, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, totalCount, totalPrice, removeItem, updateQuantity } = useCart();

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("fa-IR").format(amount);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { name: "Hoodie", href: "#products" },
    { name: "Sweatshirt", href: "#products" },
    { name: "Jogger", href: "#products" },
    { name: "Jacket", href: "#products" },
    { name: "T-Shirt", href: "#products" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-700 ${isScrolled
          ? "top-2 py-0"
          : "top-6 py-2"
        }`}
    >
      <div
        className={`relative flex items-center justify-between h-16 md:h-20 px-6 md:px-10 rounded-[2rem] transition-all duration-700 overflow-hidden ${isScrolled
            ? "bg-brand-cream/60 backdrop-blur-3xl border border-brand-green/10 shadow-float"
            : "bg-white/40 backdrop-blur-2xl border border-white/20 shadow-cool"
          }`}
      >
        {/* Decorative Internal Glow */}
        <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-brand-green/5 blur-[80px] rounded-full" />
        <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-brand-green/5 blur-[80px] rounded-full" />

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group relative z-10">
          <span className="text-xl md:text-3xl font-display font-black tracking-tighter text-brand-dark group-hover:text-brand-green transition-all duration-500">
            VINTAGE <span className="text-brand-green group-hover:text-brand-dark">STYLING</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 relative z-10">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative text-[11px] font-black text-brand-dark/50 hover:text-brand-green transition-colors uppercase tracking-[0.2em]"
            >
              {category.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-green transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4 relative z-10">
          <a href="/auth" className="hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-2xl hover:bg-brand-green hover:text-white text-brand-green transition-all duration-500 hover:shadow-glow"
            >
              <User className="h-5 w-5" />
            </Button>
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative w-12 h-12 rounded-2xl bg-brand-green/5 border border-brand-green/5 hover:bg-brand-green hover:text-white text-brand-green transition-all duration-500"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={totalCount}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <ShoppingBag className="h-5 w-5" />
                  </motion.div>
                </AnimatePresence>
                {totalCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-brand-green text-white text-[10px] rounded-full flex items-center justify-center font-black ring-4 ring-brand-cream"
                  >
                    {totalCount}
                  </motion.span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-brand-cream/95 backdrop-blur-3xl border-brand-green/10 flex flex-col w-full sm:max-w-md shadow-2xl" dir="rtl">
              <SheetHeader className="text-right pb-6 border-b border-brand-green/10">
                <SheetTitle className="text-3xl font-display font-black text-brand-green flex items-center justify-between">
                  <span>سبد خرید</span>
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                </SheetTitle>
              </SheetHeader>

              <ScrollArea className="flex-1 -mx-6 px-6 py-8">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[50vh] text-brand-green/20 gap-6">
                    <div className="w-24 h-24 rounded-[2rem] bg-brand-green/5 flex items-center justify-center animate-pulse">
                      <ShoppingBag className="h-12 w-12" />
                    </div>
                    <p className="font-persian text-xl font-bold">سبد خرید شما فعلاً خالیه</p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-5 animate-fade-in group">
                        <div className="w-28 h-28 rounded-[2rem] overflow-hidden bg-white border border-brand-green/5 shadow- cool relative">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-brand-green/5 group-hover:opacity-0 transition-opacity" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-1">
                          <div className="space-y-1">
                            <h4 className="font-black text-lg text-brand-dark group-hover:text-brand-green transition-colors">{item.name}</h4>
                            <p className="text-brand-green font-black font-persian">{formatPrice(item.price)} <span className="text-[10px] text-brand-green/40">تومان</span></p>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center bg-white rounded-xl p-1 border border-brand-green/5 shadow-sm">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-lg hover:bg-brand-green hover:text-white transition-all"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-10 text-center font-black text-brand-dark">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-lg hover:bg-brand-green hover:text-white transition-all"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-400 hover:bg-red-50 hover:text-red-600 rounded-xl h-10 w-10 transition-all"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>

              <div className="pt-8 border-t border-brand-green/10 space-y-6 bg-brand-cream/50 p-6 rounded-[2.5rem] mt-auto">
                <div className="flex items-center justify-between text-2xl font-black text-brand-dark">
                  <span className="text-lg opacity-40">جمع کل</span>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-green">{formatPrice(totalPrice)}</span>
                    <span className="text-xs opacity-40">تومان</span>
                  </div>
                </div>
                <Button className="w-full h-16 rounded-[2rem] bg-brand-green text-white hover:bg-brand-dark text-xl font-black transition-all shadow-float hover:shadow-elevated">
                  نهایی کردن سفارش
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden w-12 h-12 rounded-2xl bg-brand-green/5 text-brand-green transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu - Completely Redesigned */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-4 mx-4 bg-brand-cream/98 backdrop-blur-3xl rounded-[2.5rem] border border-brand-green/10 shadow-float overflow-hidden z-40"
            dir="rtl"
          >
            <nav className="p-8">
              <div className="grid grid-cols-1 gap-4">
                {categories.map((category, idx) => (
                  <motion.a
                    key={category.name}
                    href={category.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between px-6 py-6 rounded-2xl bg-brand-green/5 text-xl font-black text-brand-green hover:bg-brand-green hover:text-white transition-all group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{category.name}</span>
                    <Plus className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 pt-6 border-t border-brand-green/10"
                >
                  <a href="/auth" className="flex items-center justify-center gap-3 w-full h-16 rounded-2xl bg-brand-dark text-white font-black text-lg shadow-xl" onClick={() => setIsMobileMenuOpen(false)}>
                    <User className="h-6 w-6" />
                    <span>حساب کاربری</span>
                  </a>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;