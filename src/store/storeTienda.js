import { create } from 'zustand';
import { getAllProducts } from '../Service/Tienda.service';

export const useTiendaStore = create((set) => ({
  products: [],
  loading: false,
  
  getProducts: async () => {
    set({ loading: true });
    try {
      const products = await getAllProducts();
      set({ products, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  }
}));