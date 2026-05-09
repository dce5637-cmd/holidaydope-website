import React from 'react'

const packages = [
  {title:'Thailand Escape',place:'Bangkok • Pattaya • Phuket',price:'₹24,999',days:'5N / 6D',image:'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80'},
  {title:'Bali Luxury Trip',place:'Ubud • Kuta • Nusa Penida',price:'₹29,999',days:'6N / 7D',image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'},
  {title:'Maldives Dream',place:'Beach Villa • Water Sports',price:'₹49,999',days:'4N / 5D',image:'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80'}
]

const features = [
  {icon:'🛡️',title:'Trusted Service',text:'Professional planning and transparent package details.'},
  {icon:'📅',title:'Custom Itinerary',text:'Day-wise trip plan according to your budget.'},
  {icon:'📞',title:'Easy Booking',text:'Quick support and booking through WhatsApp.'}
]

const reviews = [
  'Best travel experience with smooth booking and support.',
  'Holidaydope made our honeymoon trip memorable.',
  'Professional service, good hotel and perfect itinerary.'
]

export default function App(){
  return <div className="page">
    <header className="header">
      <div className="container nav">
        <a className="brand" href="#home">
          <img className="logo" src="/logo.png" alt="Holidaydope logo" />
          <div><h1>holidaydope</h1><p>Chalo Duniya Ghume</p></div>
        </a>
        <nav className="links">
          <a href="#packages">Packages</a><a href="#why">Why Us</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a>
        </nav>
        <a className="btn gold" href="https://wa.me/918595789670">WhatsApp</a>
      </div>
    </header>

    <main id="home" className="container hero">
      <div>
        <span className="badge">✈ Luxury Travel Agency</span>
        <h2>Travel the world with <span className="goldtext">Holidaydope</span></h2>
        <p>Premium international holiday packages for Thailand, Bali, Maldives, Dubai and more. Trusted planning, luxury stays and easy WhatsApp booking.</p>
        <div className="hero-actions">
          <a className="btn gold" href="https://wa.me/918595789670?text=Hello%20Holidaydope,%20I%20want%20to%20book%20a%20holiday%20package">Book on WhatsApp 💬</a>
          <a className="btn outline" href="#packages">View Packages →</a>
        </div>
        <div className="stats">
          <div className="stat"><b>50+</b><span>Destinations</span></div>
          <div className="stat"><b>24/7</b><span>Support</span></div>
          <div className="stat"><b>100%</b><span>Trusted</span></div>
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-img">
          <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=80" alt="Luxury travel" />
          <div className="price-box"><small>Starting from</small><div className="price-row"><strong>₹24,999</strong><span className="pill">Flights not included</span></div></div>
        </div>
      </div>
    </main>

    <section id="packages" className="container section">
      <div className="section-title"><div><p>Premium Packages</p><h2>Top Holiday Deals</h2></div><div style={{fontSize:48}}>🌴</div></div>
      <div className="grid3">
        {packages.map(pkg=><div className="card" key={pkg.title}><img src={pkg.image} alt={pkg.title}/><div className="card-body"><div className="meta"><span>📍 {pkg.place}</span><span>{pkg.days}</span></div><h3>{pkg.title}</h3><div className="package-bottom"><span>From <b>{pkg.price}</b></span><a className="enquire" href="https://wa.me/918595789670">Enquire</a></div></div></div>)}
      </div>
    </section>

    <section id="why" className="container section">
      <div className="grid3">{features.map(f=><div className="feature" key={f.title}><div className="icon">{f.icon}</div><h3>{f.title}</h3><p>{f.text}</p></div>)}</div>
    </section>

    <section id="reviews" className="container section">
      <h2 className="center-title">Happy Travellers</h2>
      <div className="grid3">{reviews.map((r,i)=><div className="review" key={r}><div className="stars">★★★★★</div><p>“{r}”</p><b>Customer {i+1}</b></div>)}</div>
    </section>

    <section id="contact" className="container section">
      <div className="cta"><h2>Ready for your dream vacation?</h2><p>Send your destination, travel date and number of passengers. Holidaydope team will share the best package details.</p><div className="cta-actions"><a className="btn gold" href="https://wa.me/918595789670">WhatsApp: 8595789670</a><a className="btn outline" href="tel:+918595789670">Call Now</a></div></div>
    </section>

    <footer className="footer">© 2026 Holidaydope. Chalo Duniya Ghume. | Flight price not included unless mentioned.</footer>
  </div>
}
