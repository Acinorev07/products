import ProductForm from './components/ProductForm.tsx';
import ProductList from './components/ProductList.tsx';
import SearchAndSort from './components/SearchAndSort.tsx';

export default function ProductDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Gestión de Productos</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Agregar Producto</h2>
          <ProductForm />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Lista de Productos</h2>
          <SearchAndSort />
          <ProductList />
        </div>
      </div>
    </div>
  );
}