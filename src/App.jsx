export default function App() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          background: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px"
        }}
      >
        HOLIDAYDOPE WEBSITE
      </div>

      <a
        href="https://wa.me/918595789670"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "22px",
          right: "22px",
          background: "#25D366",
          color: "white",
          padding: "14px 18px",
          borderRadius: "50px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          zIndex: 9999
        }}
      >
        WhatsApp Now
      </a>
    </>
  );
}
