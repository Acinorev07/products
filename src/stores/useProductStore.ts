import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '../types/product.d';

interface ProductState {
  products: Product[];
  addProduct: (product: Omit<Product, 'codigo' | 'creacion'>) => void;
  removeProduct: (codigo: number) => void;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: [],
      addProduct: (product) => 
        set((state) => ({
          products: [
            ...state.products,
            {
              ...product,
              codigo: Date.now(),
              creacion: new Date().toISOString(),
            },
          ],
        })),
      removeProduct: (codigo) =>
        set((state) => ({
          products: state.products.filter((p) => p.codigo !== codigo),
        })),
    }),
    {
      name: 'product-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);