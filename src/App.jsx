export default function App() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      position: "relative"
    }}>

      <video
        src="/beach.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />

      <h1 style={{
        position: "absolute",
        top: "40%",
        width: "100%",
        textAlign: "center",
        color: "white",
        fontSize: "70px"
      }}>
        HOLIDAYDOPE
      </h1>

    </div>
  );
}
