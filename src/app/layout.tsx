//src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import AppThemeProvider from '@/providers/ThemeProvider';

export const metadata: Metadata = {
  title: 'Gestión de Productos',
  description: 'Aplicación para gestión de productos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <AppThemeProvider>
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}