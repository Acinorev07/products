// src/app/dashboard/components/ProductItem.tsx

'use client';
import { Product } from '@/types/product.d';
import { useProductStore } from '@/stores/useProductStore';
import { Button } from './Button'; // Importa tu componente Button
import { theme } from '@/styles/theme'; // Importa el tema si es necesario

export default function ProductItem({ product }: { product: Product }) {
  const removeProduct = useProductStore((state) => state.removeProduct);
  
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      padding: '16px',
      borderRadius: '12px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'all 0.2s ease'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '16px' // Añade espacio entre texto y botón
      }}>
        <div style={{ flex: 1 }}> {/* Toma todo el espacio disponible */}
          <h3 style={{ 
            fontWeight: '600', 
            marginBottom: '4px',
            color: theme.colors.text.primary// Usando el tema
          }}>
            {product.nombre}
          </h3>
          <p style={{ 
            fontSize: theme.text.sizes.h4,
            fontFamily: theme.fonts.mono,
            color: '#6b7280',
            marginBottom: '8px'
          }}>
            {product.descripcion}
          </p>
          <div style={{ 
            display: 'flex',
            gap: '16px',
            fontSize: '12px',
            color: '#4b5563'
          }}>
            <span>Código: {product.codigo}</span>
            <span>Cantidad: {product.cantidad}</span>
            <span>Creación: {new Date(product.creacion).toLocaleDateString()}</span>
          </div>
        </div>
        
        {/* Versión con tu Button reutilizable */}
        <Button 
             variant="danger"
             onClick={() => removeProduct(product.codigo)}
             style={{
               padding: '8px 12px',
               fontSize: '14px'
             }}
           >
             Eliminar
           </Button>
      </div>
    </div>
  );
}