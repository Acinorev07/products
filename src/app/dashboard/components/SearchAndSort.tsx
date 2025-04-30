'use client';
import { useState } from 'react';
import { useProductStore } from '@/stores/useProductStore';
import { Input } from './Inputs';
import { theme } from '@/styles/theme';

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
    <div  style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '16px'
    }}>
      <div>
      <Input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Buscar productos"
          containerStyle={{
            marginBottom: '16px' // Espacio adicional si lo necesitas
          }}
          // Opcional: sobrescribe estilos específicos
          style={{
            fontSize: theme.text.sizes.base, // Puedes ajustar esto
            padding: '10px 14px' // O mantener el padding del componente (12px 16px)
          }}
        />
      </div>
      <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
        <label style={{ 
          fontSize: theme.text.sizes.h5,
          fontFamily: theme.fonts.mono
          }}>Ordenar por:</label>
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value as any)}
          style={{
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: theme.text.sizes.h5,
            fontFamily: theme.fonts.mono
          }}
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
          style={{
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: theme.text.sizes.h5,
            fontFamily: theme.fonts.mono
          }}
          aria-label="Dirección del orden"
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>
  );
}