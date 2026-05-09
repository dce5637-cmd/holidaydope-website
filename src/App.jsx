export default function App() {

const path = window.location.pathname;

if (path === "/kashmir") {
  return (
    <div style={{
      background:"#050505",
      color:"white",
      minHeight:"100vh",
      textAlign:"center",
      padding:"60px"
    }}>
      <h1 style={{
        color:"gold",
        fontSize:"60px"
      }}>
        Kashmir Tour Package ❄️
      </h1>

      <p style={{fontSize:"24px"}}>
        Srinagar • Gulmarg • Pahalgam
      </p>

      <h2 style={{
        color:"gold",
        marginTop:"20px"
      }}>
        Starting ₹14,999
      </h2>

      <img
      src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1600&auto=format&fit=crop"
      style={{
        width:"90%",
        maxWidth:"900px",
        borderRadius:"20px",
        marginTop:"30px"
      }}
      />

      <br /><br />

      <a
      href="https://wa.me/918595789670"
      style={{
        background:"gold",
        color:"black",
        padding:"15px 35px",
        borderRadius:"40px",
        textDecoration:"none",
        fontWeight:"bold"
      }}>
      Book Now
      </a>
    </div>
  );
}

return (
  <div style={{
    position:"relative",
    height:"100vh",
    overflow:"hidden"
  }}>

    <video
      src="/beach.mp4"
      autoPlay
      muted
      loop
      controls
      style={{
        width:"100%",
        height:"100%",
        objectFit:"cover"
      }}
    />

    <div style={{
      position:"absolute",
      top:"0",
      left:"0",
      width:"100%",
      height:"100%",
      background:"rgba(0,0,0,0.4)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      color:"white"
    }}>

      <h1 style={{
  fontSize:"70px",
  color:"gold"
}}>
  Holidaydope TEST
</h1>

      <p style={{
        fontSize:"30px"
      }}>
        Chalo Duniya Ghume ✈️
      </p>

    </div>

  </div>
);
}
