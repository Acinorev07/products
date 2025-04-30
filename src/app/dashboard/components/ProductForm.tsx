// src/app/dashboard/components/ProductForm.tsx

'use client';
import { useProductStore } from '@/stores/useProductStore';
import { Button } from './Button';
import { Input } from './Inputs';
import { useState } from 'react';
import { theme } from '@/styles/theme';

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
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px', // Espacio entre elementos del formulario
      padding: '16px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <Input
             label="Nombre"
             value={nombre}
             onChange={(e) => setNombre(e.target.value)}
             required
             aria-label="Nombre del producto"
           />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          aria-label="Descripción del producto"
        />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <label>Cantidad</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          min="0"
          required
          aria-label="Cantidad del producto"
        />
      </div>
      <Button type="submit">
        Guardar Producto
      </Button>
    </form>
  );
}