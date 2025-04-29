'use client';
import { useProductStore } from '@/stores/useProductStore.ts';
import { useState } from 'react';

export default function ProductForm() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const addProduct = useProductStore((state) => state.addProduct);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct({ nombre, descripcion, cantidad });
    setNombre('');
    setDescripcion('');
    setCantidad(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-2 border rounded"
          required
          aria-label="Nombre del producto"
        />
      </div>
      <div>
        <label className="block mb-1">Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full p-2 border rounded"
          aria-label="Descripción del producto"
        />
      </div>
      <div>
        <label className="block mb-1">Cantidad</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          className="w-full p-2 border rounded"
          min="0"
          required
          aria-label="Cantidad del producto"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Agregar Producto
      </button>
    </form>
  );
}