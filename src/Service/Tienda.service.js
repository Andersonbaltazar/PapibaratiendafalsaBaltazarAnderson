const API_BASE_URL = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  return await response.json();
};