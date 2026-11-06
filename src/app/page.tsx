
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const categories = [
  { name: "Lip Gloss", emoji: "💄" },
  { name: "Lipstick", emoji: "💋" },
  { name: "Makeup", emoji: "💅" },
  { name: "Skincare", emoji: "🧴" },
  { name: "Beauty Tools", emoji: "🪞" },
  { name: "Perfume", emoji: "🌸" },
];

const products = [
  {
    id: 1,
    name: "Beauty Lip Gloss",
    category: "Lip Gloss",
    price: 250,
    oldPrice: 350,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600",
    tag: "Popular",
  },
  {
    id: 2,
    name: "Professional Makeup Kit",
    category: "Makeup",
    price: 650,
    oldPrice: 850,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
    tag: "New Arrival",
  },
  {
    id: 3,
    name: "Beauty Essentials",
    category: "Beauty Tools",
    price: 450,
    oldPrice: 550,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
    tag: "Best Seller",
  },
  {
    id: 4,
    name: "Premium Lipstick",
    category: "Lipstick",
    price: 350,
    oldPrice: 450,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600",
    tag: "Trending",
  },
  {
    id: 5,
    name: "Daily Skincare Set",
    category: "Skincare",
    price: 850,
    oldPrice: 1050,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
    tag: "Popular",
  },
  {
    id: 6,
    name: "Luxury Perfume",
    category: "Perfume",
    price: 950,
    oldPrice: 1200,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600",
    tag: "New Arrival",
  },
];

const whatsapp = "8801853791194";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Categories Section */}
        <section
          id="categories"
          className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mb-9 text-center">
              <p className="text-sm font-bold tracking-widest text-pink-600">
                EXPLORE COLLECTIONS
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Shop By Category
              </h2>

              <p className="mt-3 text-sm text-gray-500 sm:text-base">
                Find your favorite beauty products.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">

              {categories.map((category) => (
                <a
                  key={category.name}
                  href="#products"
                  className="group rounded-2xl border border-pink-100 bg-pink-50 p-5 text-center transition hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-100 sm:p-7"
                >
                  <span className="text-3xl sm:text-4xl">
                    {category.emoji}
                  </span>

                  <h3 className="mt-3 text-sm font-bold text-gray-800 transition group-hover:text-pink-600 sm:text-base">
                    {category.name}
                  </h3>
                </a>
              ))}

            </div>
          </div>
        </section>

        {/* Products Section */}
        <section
          id="products"
          className="bg-rose-50/70 px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mb-10 text-center">
              <p className="text-sm font-bold tracking-widest text-pink-600">
                OUR COLLECTION
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Featured Products
              </h2>

              <p className="mt-3 text-sm text-gray-500 sm:text-base">
                Discover our beautiful collection of products.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:gap-7">

              {products.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl"
                >

                  {/* Product Image */}
                  <div className="relative aspect-4/3 overflow-hidden">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-2 top-2 z-10 rounded-full bg-pink-600 px-2 py-1 text-[10px] font-bold text-white sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
                      {product.tag}
                    </span>

                  </div>

                  {/* Product Details */}
                  <div className="p-3 sm:p-5">

                    <p className="text-[10px] font-semibold text-pink-500 sm:text-xs">
                      {product.category}
                    </p>

                    <h3 className="mt-1 min-h-10 text-sm font-bold text-gray-800 sm:min-h-0 sm:text-lg">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2">

                      <span className="text-base font-extrabold text-pink-600 sm:text-xl">
                        ৳{product.price}
                      </span>

                      <span className="text-xs text-gray-400 line-through sm:text-sm">
                        ৳{product.oldPrice}
                      </span>

                    </div>

                    {/* WhatsApp Order */}
                    <a
                      href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                        `Hello Riya's Collection! I want to order ${product.name}. Price: Tk ${product.price}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 block rounded-full bg-pink-600 px-2 py-2.5 text-center text-xs font-bold text-white transition hover:bg-pink-700 sm:py-3 sm:text-sm"
                    >
                      Order Now
                    </a>

                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* Delivery and Payment Section */}
        <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl bg-pink-50 p-6 text-center">
              <div className="text-3xl">🚚</div>

              <h3 className="mt-3 font-bold text-gray-900">
                Nationwide Delivery
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Delivery available across Bangladesh.
              </p>
            </div>

            <div className="rounded-2xl bg-pink-50 p-6 text-center">
              <div className="text-3xl">💵</div>

              <h3 className="mt-3 font-bold text-gray-900">
                Easy Payment
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Cash on Delivery, bKash and Nagad.
              </p>
            </div>

            <div className="rounded-2xl bg-pink-50 p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="text-3xl">💗</div>

              <h3 className="mt-3 font-bold text-gray-900">
                Customer Support
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Contact us for product information and orders.
              </p>
            </div>

          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-linear-to-r from-pink-50 to-rose-50 px-5 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold tracking-widest text-pink-600">
              ABOUT OUR BRAND
            </p>

            <h2 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-4xl">
              Welcome to Riya&apos;s Collection
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
              We bring you a beautiful collection of cosmetics,
              makeup, skincare and beauty essentials. Our goal
              is to make every customer feel confident and beautiful.
              Thank you for choosing Riya&apos;s Collection.
            </p>

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-block rounded-full bg-pink-600 px-7 py-3 font-bold text-white transition hover:bg-pink-700"
            >
              Contact Us &rarr;
            </a>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
