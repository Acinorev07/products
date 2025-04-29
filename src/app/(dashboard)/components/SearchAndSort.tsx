'use client';
import { useState } from 'react';
import { useProductStore } from '@/stores/useProductStore.ts';

export default function SearchAndSort() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<'nombre' | 'cantidad' | 'codigo' | 'creacion'>('nombre');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  const products = useProductStore((state) => {
    let filtered = state.products.filter((p) =>
      p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    filtered.sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    
    return filtered;
  });

  return (
    <div className="space-y-4 mb-4">
      <div>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
          aria-label="Buscar productos"
        />
      </div>
      <div className="flex gap-4 items-center">
        <label>Ordenar por:</label>
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value as any)}
          className="p-2 border rounded"
          aria-label="Campo para ordenar"
        >
          <option value="nombre">Nombre</option>
          <option value="cantidad">Cantidad</option>
          <option value="codigo">Código</option>
          <option value="creacion">Fecha Creación</option>
        </select>
        <select
          value={sortDirection}
          onChange={(e) => setSortDirection(e.target.value as any)}
          className="p-2 border rounded"
          aria-label="Dirección del orden"
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>
  );
}