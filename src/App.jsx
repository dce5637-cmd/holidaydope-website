export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/hero-maldives.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        padding: "60px",
        color: "white",
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      <div style={{ maxWidth: "760px" }}>
        <img src="/logo.png" alt="Holidaydope" style={{ width: "180px", marginBottom: "30px" }} />

        <p style={{ letterSpacing: "6px", color: "#d4af37", fontSize: "14px" }}>
          EXPLORE. DREAM. DISCOVER.
        </p>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "72px", lineHeight: "1.05", margin: "20px 0" }}>
          Luxury Travel Experiences
        </h1>

        <p style={{ fontSize: "22px", color: "#eee" }}>
          Crafted Just For You
        </p>

        <div style={{ marginTop: "35px", display: "flex", gap: "18px", flexWrap: "wrap" }}>
          <a href="https://wa.me/918595789670" style={{ background: "#d4af37", color: "#000", padding: "15px 30px", borderRadius: "50px", textDecoration: "none", fontWeight: "700" }}>
            WhatsApp Inquiry
          </a>

          <a href="#packages" style={{ border: "1px solid white", color: "white", padding: "15px 30px", borderRadius: "50px", textDecoration: "none", fontWeight: "600" }}>
            Explore Packages
          </a>
        </div>
      </div>
    </div>
  );
}
