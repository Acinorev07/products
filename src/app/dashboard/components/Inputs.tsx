// src/app/dashboard/components/Inputs.tsx
import { CSSProperties } from 'react';
import { theme } from '@/styles/theme'; // Asegúrate de importar el tema

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerStyle?: CSSProperties;
}

export function Input({ label, containerStyle, ...props }: InputProps) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...containerStyle }}>
        {label && (
          <label style={{
            fontSize: theme.text.sizes.h5,     // Tamaño h5 del tema
            fontFamily: theme.fonts.mono,      // Fuente mono del tema
            color: theme.colors.text.primary   // Color consistente
          }}>
            {label}
          </label>
        )}
        <input
          {...props}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxSizing: 'border-box',
            fontFamily: theme.fonts.main, // Fuente principal para el input
            ...props.style
          }}
        />
      </div>
    );
  }