import ProductCard from "./ProductCard";

// محصولات جدید بر اساس عکس‌های پوشه public/images/products
export const products = [
  {
    id: 1,
    name: "تی‌شرت وینتج طرح کلاسیک",
    description: "تی‌شرت نخ‌پنبه ۱۰۰٪ با چاپ با کیفیت و طراحی منحصر به فرد وینتج. ایده‌آل برای استایل‌های روزمره.",
    price: 850000,
    images: ["/images/products/1-1.jpg", "/images/products/1-2.jpg"],
    category: "تی‌شرت"
  },
  {
    id: 2,
    name: "هودی اورسایز مدل ۲۰۲۴",
    description: "هودی گرم و راحت با پارچه دورس سه نخ. طراحی مدرن و مینیمال برای فصل‌های سرد.",
    price: 1450000,
    images: ["/images/products/2-1.jpg", "/images/products/2-2.jpg", "/images/products/2-3.jpg"],
    category: "هودی"
  },
  {
    id: 3,
    name: "شلوار جین مام استایل",
    description: "جین با کیفیت با تن‌خور عالی. سبک کلاسیک که با هر استایلی ست می‌شود.",
    price: 1200000,
    images: ["/images/products/3-1.jpg", "/images/products/3-2.jpg"],
    category: "شلوار"
  },
  {
    id: 4,
    name: "کت کتان طرح کارگو",
    description: "کت کتان مقاوم با جیب‌های کاربردی. مناسب برای استایل‌های کژوال و خیابانی.",
    price: 1850000,
    images: ["/images/products/4-1.jpg", "/images/products/4-2.jpg"],
    category: "کت"
  },
  {
    id: 5,
    name: "تی‌شرت گرافیکی مدل Retro",
    description: "طراحی نوستالژیک با رنگ‌بندی جذاب. پارچه لطیف و خنک برای تابستان.",
    price: 790000,
    images: ["/images/products/5-1.jpg", "/images/products/5-2.jpg"],
    category: "تی‌شرت"
  },
  {
    id: 6,
    name: "دورس یقه گرد لش",
    description: "دورس با کیفیت بدون پرزدهی. استایل آزاد و راحت برای استفاده روزانه.",
    price: 1150000,
    images: ["/images/products/6-1.jpg", "/images/products/6-2.jpg"],
    category: "دورس"
  },
  {
    id: 7,
    name: "شلوار اسلش ورزشی",
    description: "راحت و منعطف با کمر کشی. مناسب برای فعالیت‌های ورزشی و استراحت.",
    price: 950000,
    images: ["/images/products/7-1.jpg", "/images/products/7-2.jpg"],
    category: "شلوار"
  },
  {
    id: 8,
    name: "کلاه کپ طرح نیویورک",
    description: "کلاه با کیفیت با قابلیت تنظیم سایز. اکسسوری ضروری برای تکمیل استایل شما.",
    price: 450000,
    images: ["/images/products/8-1.jpg", "/images/products/8-2.jpg"],
    category: "اکسسوری"
  },
  {
    id: 9,
    name: "کاپشن پفکی زمستانه",
    description: "بسیار گرم و سبک با لایه داخلی پشم‌شیشه. ضد آب و باد برای هوای سرد.",
    price: 2650000,
    images: ["/images/products/9-1.jpg", "/images/products/9-2.jpg", "/images/products/9-3.jpg", "/images/products/9-4.jpg"],
    category: "کاپشن"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-brand-cream relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16" dir="rtl">
          <div className="space-y-4 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full text-brand-green text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
              Selected Collections
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-brand-dark">
              Featured <span className="text-brand-green">Items</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 border-t border-brand-green/10 pt-6 md:border-0 md:pt-0">
            <span className="text-brand-green/40 text-xs md:text-sm font-persian">دسته محصولات:</span>
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-brand-green text-white rounded-full text-xs md:text-sm font-bold font-persian cursor-pointer shadow-lg shadow-brand-green/20">همه</span>
              <span className="px-4 py-2 bg-brand-green/5 text-brand-green/60 hover:text-brand-green rounded-full text-xs md:text-sm font-medium font-persian cursor-pointer transition-colors border border-brand-green/10">تی‌شرت</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                images={product.images}
                category={product.category}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#products" className="btn-outline px-12 py-4 rounded-xl inline-flex items-center gap-2 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-all font-persian font-bold">
            <span>مشاهده همه محصولات</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;