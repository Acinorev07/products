// src/styles/theme.ts
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1200px'
};
export const theme = {
   
    colors: {
      primary: '#446262',
      secondary: '#A18C34',
      accent: '#ff00ff',
      text: {
        primary: '#333333',       // Texto principal oscuro
        secondary: '#666666',     // Texto secundario
        inverted: '#ffffff',      // Texto claro para fondos oscuros
        disabled: '#999999'       // Texto deshabilitado
      },
      background: {
        primary: '#ffffff',       // Fondo claro
        secondary: '#f5f5f5',     // Fondo secundario
        dark: '#222222'           // Fondo oscuro
      }
    },
    fonts: {
      main: 'sans-serif, Arial, Helvetica', // Fuente principal con fallbacks
      heading: '"Segoe UI", Roboto, sans-serif', // Fuente para títulos
      mono: 'Courier New, monospace' // Fuente para código
    },
    text: {
      sizes: {
        base: '2rem',            // 16px (tamaño base)
        small: '0.875rem',       // 14px
        smaller: '0.75rem',      // 12px
        h1: '2.5rem',           // 40px
        h2: '2rem',             // 32px
        h3: '1.75rem',          // 28px
        h4: '1.5rem',           // 24px
        h5: '1.25rem'           // 20px
      },
      weights: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900
      },
      lineHeights: {
        normal: 1.5,
        heading: 1.2,
        tight: 1.1
      }
    },
    spacing: {
      small: '0.5rem',    // 8px
      medium: '1rem',     // 16px
      large: '1.5rem',    // 24px
      xlarge: '2rem'      // 32px
    },
    breakpoints,
    media: {
      mobile: `(max-width: ${breakpoints.mobile})`,
      tablet: `(min-width: ${breakpoints.tablet})`,
      desktop: `(min-width: ${breakpoints.desktop})`
    },
  }as const; // ¡Esto es importante!

  export type Theme = typeof theme;