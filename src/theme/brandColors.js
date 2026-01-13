/**
 * HDCI Brand Colors & Design Tokens
 * Extracted from the new HDCI logo design
 */

export const brandColors = {
  // Primary Brand Colors - Orange-Red Gradient
  primary: {
    main: '#E8491D',
    dark: '#C73E1D',
    light: '#FF6B45',
    lighter: '#FF8A65',
    gradient: 'linear-gradient(135deg, #C73E1D 0%, #E8491D 50%, #FF6B45 100%)',
    gradientVertical: 'linear-gradient(180deg, #C73E1D 0%, #E8491D 50%, #FF6B45 100%)',
    gradientHover: 'linear-gradient(135deg, #B03318 0%, #D63E1A 50%, #FF5A35 100%)',
  },

  // Neutral Colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    dark: '#1A1A1A',
    darkGray: '#333333',
    mediumGray: '#666666',
    lightGray: '#999999',
    paleGray: '#CCCCCC',
    background: '#F5F5F5',
    backgroundLight: '#FAFAFA',
  },

  // Accent Colors
  accent: {
    warmOrange: '#FF9800',
    gold: '#FFB300',
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
    info: '#2196F3',
  },

  // Glassmorphism
  glass: {
    white: 'rgba(255, 255, 255, 0.1)',
    whiteHover: 'rgba(255, 255, 255, 0.2)',
    dark: 'rgba(26, 26, 26, 0.8)',
    darkHover: 'rgba(26, 26, 26, 0.9)',
  },

  // Shadows with warm tints
  shadows: {
    small: '0 2px 8px rgba(232, 73, 29, 0.1)',
    medium: '0 4px 16px rgba(232, 73, 29, 0.15)',
    large: '0 8px 32px rgba(232, 73, 29, 0.2)',
    glow: '0 0 20px rgba(232, 73, 29, 0.3)',
    glowStrong: '0 0 40px rgba(232, 73, 29, 0.5)',
  },
};

export const typography = {
  fontFamily: {
    primary: "'Inter', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Montserrat', 'Inter', sans-serif",
  },
  
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
  },

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
};

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',
};

export const transitions = {
  fast: '150ms ease-in-out',
  normal: '300ms ease-in-out',
  slow: '500ms ease-in-out',
};

export const breakpoints = {
  xs: '320px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
};

export default {
  brandColors,
  typography,
  spacing,
  borderRadius,
  transitions,
  breakpoints,
};
