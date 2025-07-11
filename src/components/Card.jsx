const Card = ({ product }) => (
  <div className="card h-100">
    <img src={product.image} className="card-img-top" alt={product.title} style={{height: "200px", objectFit: "contain"}} />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">${product.price}</p>
      <p className="card-text"><small className="text-muted">{product.category}</small></p>
    </div>
  </div>
);

export default Card;
