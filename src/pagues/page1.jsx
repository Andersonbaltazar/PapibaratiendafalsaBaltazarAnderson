import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { useTiendaStore } from '../store/storeTienda';

const Inicio = () => {
  const [currentPage, setCurrentPage] = useState('productos');
  const { products, loading, getProducts } = useTiendaStore();

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <div className="text-center p-5">Cargando...</div>;

  if (currentPage === 'solo-productos') {
    // Segunda página: Solo las tarjetas
    return (
      <div className="container py-4">
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-3 mb-4">
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Primera página: Header + tarjetas + Footer
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onNavigate={setCurrentPage} />
      <main className="flex-grow-1">
        <div className="container py-4">
          <div className="row">
            {products.map(product => (
              <div key={product.id} className="col-md-3 mb-4">
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Inicio;