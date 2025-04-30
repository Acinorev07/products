// src/app/dashboard/components/ProductList.tsx

'use client';
import { useProductStore } from '@/stores/useProductStore';
import ProductItem from './ProductItem';

export default function ProductList() {
  const products = useProductStore((state) => state.products);
  
  if (products.length === 0) {
    return <p style={{ 
      color: '#6b7280',
      textAlign: 'center',
      padding: '16px'
    }}>No hay productos registrados</p>;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      {products.map((product) => (
        <ProductItem key={product.codigo} product={product} />
      ))}
    </div>
  );
}