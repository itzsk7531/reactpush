import Product from "./product";
import logo from "./assets/attendify-logo.png";
import lo from "./assets/wa.jpg";
import "./App.css";

function App() {

  const events = [
    {
      id: 1,
      title: "Tech Conference 2026",
      subtitle: "AI & Web Development",
      price: 499,
      image: lo
    },
    {
      id: 2,
      title: "Music Fest",
      subtitle: "Live Band Performance",
      price: 299,
      image: logo
    },
    {
      id: 3,
      title: "Startup Meetup",
      subtitle: "Entrepreneur Networking",
      price: 199,
      image: lo
    },
    {
      id: 4,
      title: "Design Workshop",
      subtitle: "UI/UX Masterclass",
      price: 399,
      image: logo
    }
  ];

  return (
    <div className="product-container">
      {events.map((event) => (
        <Product
          key={event.id}
          image={event.image}
          title={event.title}
          subtitle={event.subtitle}
          price={event.price}
        />
      ))}
    </div>
  );
}

export default App;