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
    background:"black",
    color:"white",
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
  }}>
    <h1 style={{color:"gold"}}>
      Holidaydope
    </h1>

    <a
    href="/kashmir"
    style={{
      marginTop:"20px",
      background:"gold",
      color:"black",
      padding:"14px 30px",
      borderRadius:"30px",
      textDecoration:"none"
    }}>
    Open Kashmir Package
    </a>
  </div>
);

}
