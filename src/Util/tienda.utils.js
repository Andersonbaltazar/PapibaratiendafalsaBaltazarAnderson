// Adaptar producto de FakeStore API al formato interno
export const adaptFakeStoreProduct = (product) => {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.image,
    rating: {
      rate: product.rating?.rate || 0,
      count: product.rating?.count || 0
    }
  };
};

// Formatear precio
export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
};

// Truncar descripción
export const truncateDescription = (description, maxLength = 100) => {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength) + '...';
};

// Capitalizar categoría
export const capitalizeCategory = (category) => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

// Generar estrellas para rating
export const generateStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return {
    full: fullStars,
    half: hasHalfStar ? 1 : 0,
    empty: emptyStars
  };
};

// Filtrar productos por precio
export const filterProductsByPrice = (products, minPrice = 0, maxPrice = Infinity) => {
  return products.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
};

// Ordenar productos
export const sortProducts = (products, sortBy = 'title', order = 'asc') => {
  return [...products].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];
    
    if (sortBy === 'rating') {
      aValue = a.rating.rate;
      bValue = b.rating.rate;
    }
    
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    
    if (order === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
};