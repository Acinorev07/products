// src/app/dashboard/components/Button.tsx
import { useState, CSSProperties  } from 'react';
import { theme } from '@/styles/theme';


interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'danger' | 'neutral';
    onClick?: () => void;
    style?: React.CSSProperties;
  }
  
  export function Button({ 
    children, 
    type = 'button', 
    variant = 'primary',
    onClick,
    style 
  }: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
  
    // Estilo base + variante combinados
    const buttonStyle: CSSProperties = {
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      fontFamily: theme.fonts.main,
      fontWeight: 600, // Como número
      fontSize: '16px',
      // Estilos según variante
      ...(variant === 'primary' && {
        backgroundColor: isHovered ? theme.colors.secondary : theme.colors.primary,
        color: 'white'
      }),
      ...(variant === 'danger' && {
        backgroundColor: isHovered ? '#dc2626' : '#ef4444',
        color: 'white'
      }),
      ...(variant === 'neutral' && {
        backgroundColor: isHovered ? '#e5e7eb' : '#f3f4f6',
        color: theme.colors.text?.primary || '#333' // Fallback seguro
      }),
      // Estilos personalizados (sobrescriben los anteriores)
      ...style
    };
  
    return (
      <button
        type={type}
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }