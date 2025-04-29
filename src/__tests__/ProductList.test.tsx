import { render, screen } from '@testing-library/react';
import ProductList from '@/app/(dashboard)/components/ProductList.tsx';
import { useProductStore } from '@/stores/useProductStore.ts';

// Mock del store
jest.mock('@/stores/useProductStore');

describe('ProductList', () => {
  it('muestra mensaje cuando no hay productos', () => {
    (useProductStore as unknown as jest.Mock).mockReturnValue({
      products: [],
    });
    
    render(<ProductList />);
    expect(screen.getByText('No hay productos registrados')).toBeInTheDocument();
  });

  it('muestra lista de productos', () => {
    const mockProducts = [
      {
        codigo: 1,
        nombre: 'Producto 1',
        descripcion: 'Descripción 1',
        cantidad: 10,
        creacion: '2023-01-01',
      },
    ];
    
    (useProductStore as unknown as jest.Mock).mockReturnValue({
      products: mockProducts,
    });
    
    render(<ProductList />);
    expect(screen.getByText('Producto 1')).toBeInTheDocument();
  });
});