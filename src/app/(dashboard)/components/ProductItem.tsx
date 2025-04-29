'use client';
import { Product } from '@/types/product.d.ts';
import { useProductStore } from '@/stores/useProductStore.ts';

export default function ProductItem({ product }: { product: Product }) {
  const removeProduct = useProductStore((state) => state.removeProduct);
  
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold">{product.nombre}</h3>
          <p className="text-sm text-gray-600">{product.descripcion}</p>
          <div className="flex gap-4 mt-2 text-sm">
            <span>Código: {product.codigo}</span>
            <span>Cantidad: {product.cantidad}</span>
            <span>Creación: {new Date(product.creacion).toLocaleDateString()}</span>
          </div>
        </div>
        <button
          onClick={() => removeProduct(product.codigo)}
          className="text-red-500 hover:text-red-700"
          aria-label={`Eliminar producto ${product.nombre}`}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}