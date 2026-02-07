import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import PromoBanner from "@/components/PromoBanner";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-cream relative overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-brand-green/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-brand-green/5 blur-[80px] rounded-full" />
      </div>

      <Header />

      <main className="relative z-10">
        <PromoBanner />

        <div className="container-custom py-24">
          {/* Simple Page Title - Optional context but minimal */}
          <div className="mb-12 text-center" dir="rtl">
            {/* Leaving empty for now to be strictly minimal as requested, or just a small spacer */}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  images={product.images}
                  category={product.category}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


