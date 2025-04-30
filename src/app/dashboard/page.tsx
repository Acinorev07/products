import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchAndSort from './components/SearchAndSort';
import { theme } from '@/styles/theme';


export default function DashboardPage() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f9fafb',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column', // Añade esto
      alignItems: 'center', // Añade esto
      gap:'2rem',
      border: '1px solid #000000'
    }}>
      {/* Título principal */}
      <h1 style={{
        fontSize: '1.875rem',
        fontWeight: '700',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Gestión de Productos
      </h1>

      {/* Contenedor de dos columnas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '2rem',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        border: '1px solid #000000'
      }}>
        {/* Columna izquierda - Formulario */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
       
        }}>
          <h2 style={{
            fontSize: theme.text.sizes.base,
            fontFamily: theme.fonts.mono,
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Agregar Producto
          </h2>
          <div style={{
               border: '1px solid ' + theme.colors.secondary,
               width: '50%',
               fontFamily: theme.fonts.mono,
               fontSize: theme.text.sizes.base,
               borderRadius: '20px',
               padding: '20px',
               display: 'flex',
               flexDirection: 'column',
               gap: '16px',
               backgroundColor: 'white', // Fondo sólido para mejor contraste
               boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', // Sombra estándar
               transform: 'translateY(-5px)', // Elevación visual
               transition: 'all 0.3s ease' // Para animación al hacer hover
             }}>
            <ProductForm />
          </div>
          
        </div>

        {/* Columna derecha - Lista */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h2 style={{
            fontSize: theme.text.sizes.base,
            fontFamily: theme.fonts.mono,
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Lista de Productos
          </h2>
          <div style={{
                border: '1px solid ' + theme.colors.secondary,
                fontFamily: theme.fonts.main,
                borderRadius: '20px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                backgroundColor: 'white',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                transform: 'translateY(-5px)',
                transition: 'all 0.3s ease',
                width: '50%' // Asegura que ocupe todo el ancho disponible
              }}>
              <SearchAndSort />
              <ProductList />
          </div>
          
        </div>
      </div>
    </div>
  );
}