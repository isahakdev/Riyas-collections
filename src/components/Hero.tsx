
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="overflow-hidden bg-linear-to-br from-pink-50 via-rose-50 to-white">
            <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-10 lg:px-8 lg:py-24">

                {/* Hero Content */}
                <div className="text-center md:text-left">

                    <span className="inline-block rounded-full border border-pink-200 bg-white px-4 py-2 text-xs font-bold text-pink-600 shadow-sm sm:text-sm">
                        ✨ Welcome to Riya&apos;s Collection
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Discover Your
                        <br />
                        <span className="text-pink-600">
                            Natural Beauty.
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-600 sm:text-base md:mx-0">
                        Explore our beautiful collection of cosmetics,
                        makeup, skincare and beauty essentials.
                        Find your favorite products at Riya&apos;s Collection.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">

                        <Link
                            href="#products"
                            className="rounded-full bg-pink-600 px-7 py-3 font-bold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-1 hover:bg-pink-700"
                        >
                            Shop Now &rarr;
                        </Link>

                        <Link
                            href="#categories"
                            className="rounded-full border border-pink-300 bg-white px-7 py-3 font-bold text-pink-700 transition hover:bg-pink-50"
                        >
                            Explore Categories
                        </Link>

                    </div>

                    {/* Store Statistics */}
                    <div className="mt-10 flex justify-center gap-5 sm:gap-8 md:justify-start">

                        <div>
                            <h3 className="text-2xl font-extrabold text-gray-900">
                                6+
                            </h3>
                            <p className="text-xs text-gray-500 sm:text-sm">
                                Categories
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold text-gray-900">
                                1.5K+
                            </h3>
                            <p className="text-xs text-gray-500 sm:text-sm">
                                Facebook Followers
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold text-gray-900">
                                64
                            </h3>
                            <p className="text-xs text-gray-500 sm:text-sm">
                                Districts
                            </p>
                        </div>

                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative mx-auto w-full max-w-xl">

                    <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-pink-200/50 blur-2xl" />

                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-2xl shadow-pink-200 md:aspect-5/4">

                        <Image
                            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1000"
                            alt="Riya's Collection Beauty Products"
                            fill
                            priority
                            unoptimized
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />

                    </div>

                    <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 shadow-lg sm:bottom-6 sm:left-6">
                        <p className="text-xs font-semibold text-gray-500">
                            Your Beauty Partner
                        </p>

                        <p className="font-bold text-pink-600">
                            Riya&apos;s Collection 💗
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
