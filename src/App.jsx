export default function App() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/hero-maldives.png')",
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 px-8 md:px-20 text-white max-w-3xl">
        <img
          src="/logo.png"
          alt="Holidaydope"
          className="w-40 mb-6"
        />

        <p className="tracking-[6px] text-sm text-yellow-400 mb-3">
          EXPLORE. DREAM. DISCOVER.
        </p>

        <h1
          className="text-5xl md:text-7xl font-bold leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif"
          }}
        >
          Luxury Travel Experiences
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          Crafted Just For You
        </p>

        <div className="flex gap-4 mt-8 flex-wrap">
          <a
            href="https://wa.me/918595789670"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition"
          >
            WhatsApp Inquiry
          </a>

          <a
            href="#packages"
            className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
          >
            Explore Packages
          </a>
        </div>
      </div>
    </section>
  );
}
