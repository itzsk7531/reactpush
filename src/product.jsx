import "./App.css";

function Product({image,title,subtitle,price}) {
  return (
    <div className="card">
      <img src={image} alt="Event" className="card-image" />

      <h2 className="event-title">{title}</h2>
      <p className="event-subtitle">{subtitle}</p>
      <p className="event-price">{price}</p>

      <button className="card-button">Register</button>
    </div>
  );
}

export default Product;