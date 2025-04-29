'use client';
import { useProductStore } from '@/stores/useProductStore.ts';
import ProductItem from './ProductItem.tsx';

export default function ProductList() {
  const products = useProductStore((state) => state.products);
  
  if (products.length === 0) {
    return <p className="text-gray-500">No hay productos registrados</p>;
  }

  return (
    <div className="mt-4 space-y-3">
      {products.map((product) => (
        <ProductItem key={product.codigo} product={product} />
      ))}
    </div>
  );
}