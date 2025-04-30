// src/app/dashboard/page.tsx
'use client';

import styled from 'styled-components';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

// Componente estilizado con media queries
const DashboardContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background.primary};

  @media ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export default function DashboardPage() {
  return (
    <DashboardContainer>
      <h1>Gestión de Productos</h1>
      
      <GridContainer>
        <div>
          <h2>Agregar Producto</h2>
          <ProductForm />
        </div>
        
        <div>
          <h2>Lista de Productos</h2>
          <ProductList />
        </div>
      </GridContainer>
    </DashboardContainer>
  );
}