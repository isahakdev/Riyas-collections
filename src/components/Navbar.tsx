
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "#products" },
    { name: "Categories", href: "#categories" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

const whatsapp = "8801853791194";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/95 shadow-sm backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

                {/* Brand Logo */}
                <Link
                    href="/"
                    className="text-lg font-extrabold text-pink-600 sm:text-2xl"
                >
                    Riya&apos;s <span className="text-gray-900">Collection</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-700 transition hover:text-pink-600"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Order Button */}
                <a
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden rounded-full bg-pink-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-pink-700 lg:inline-flex"
                >
                    Order Now
                </a>

                {/* Mobile and Tablet Menu */}
                <details className="group relative lg:hidden">
                    <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl bg-pink-50 text-pink-600 hover:bg-pink-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </summary>

                    <nav className="absolute right-0 top-12 z-50 w-64 rounded-2xl border border-pink-100 bg-white p-4 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-pink-50 hover:text-pink-600"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <a
                            href={`https://wa.me/${whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 block rounded-full bg-pink-600 px-4 py-3 text-center text-sm font-bold text-white hover:bg-pink-700"
                        >
                            Order Now
                        </a>
                    </nav>
                </details>

            </div>
        </header>
    );
}
