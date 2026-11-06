
import Link from "next/link";

const whatsapp = "8801853791194";

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-950 text-white">

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

                {/* Brand Information */}
                <div>
                    <h2 className="text-2xl font-extrabold text-pink-400">
                        Riya&apos;s Collection
                    </h2>

                    <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
                        Discover your beauty with our amazing collection
                        of cosmetics, makeup, skincare and beauty essentials.
                    </p>

                    <a
                        href="https://www.facebook.com/riyaakter345"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-block rounded-full bg-pink-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-pink-700"
                    >
                        Visit Facebook Page
                    </a>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-5 text-lg font-bold">
                        Quick Links
                    </h3>

                    <div className="flex flex-col gap-3 text-sm text-gray-400">
                        <Link href="/" className="hover:text-pink-400">
                            Home
                        </Link>

                        <Link href="#products" className="hover:text-pink-400">
                            Products
                        </Link>

                        <Link href="#categories" className="hover:text-pink-400">
                            Categories
                        </Link>

                        <Link href="#about" className="hover:text-pink-400">
                            About Us
                        </Link>

                        <Link href="#contact" className="hover:text-pink-400">
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="mb-5 text-lg font-bold">
                        Customer Support
                    </h3>

                    <div className="flex flex-col gap-3 text-sm text-gray-400">
                        <p>🚚 Delivery: All over Bangladesh</p>
                        <p>💵 Cash on Delivery</p>
                        <p>📱 bKash Payment</p>
                        <p>📱 Nagad Payment</p>
                        <p>💗 Customer Support</p>
                    </div>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="mb-5 text-lg font-bold">
                        Contact Us
                    </h3>

                    <div className="flex flex-col gap-4 wrap-break-word text-sm text-gray-400">

                        <p>📍 Dinajpur, Bangladesh</p>

                        <a
                            href={`https://wa.me/${whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-pink-400"
                        >
                            💬 WhatsApp: 01853-791194
                        </a>

                        <a
                            href="mailto:rm0987659@gmail.com"
                            className="transition hover:text-pink-400"
                        >
                            ✉ rm0987659@gmail.com
                        </a>

                        <a
                            href="https://www.facebook.com/riyaakter345"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-pink-400"
                        >
                            Facebook Page
                        </a>

                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 px-5 py-6 text-center text-xs leading-6 text-gray-500 sm:text-sm">
                <p>
                    &copy; 2026 Riya&apos;s Collection. All rights reserved.
                </p>

                <p className="mt-1">
                    Made with 💗 for beauty lovers.
                </p>
            </div>

        </footer>
    );
}
