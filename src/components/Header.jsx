const Header = ({ onNavigate }) => (
  <nav className="navbar navbar-dark bg-dark">
    <div className="container">
      <span className="navbar-brand">🛒 Tienda</span>
      <div>
        <button className="btn btn-outline-light me-2" onClick={() => onNavigate('productos')}>
          Productos
        </button>
        <button className="btn btn-outline-light" onClick={() => onNavigate('solo-productos')}>
          Solo Productos
        </button>
      </div>
    </div>
  </nav>
);

export default Header;