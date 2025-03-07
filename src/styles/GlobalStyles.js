import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Main Theme Colors */
    --primary: #2563EB;
    --primary-dark: #1D4ED8;
    --primary-light: #60A5FA;
    --secondary: #10B981;
    --secondary-dark: #059669;
    --secondary-light: #34D399;
    --accent: #8B5CF6;
    --accent-dark: #7C3AED;
    --accent-light: #A78BFA;
    
    /* Neutral Colors */
    --text-dark: #111827;
    --text-medium: #374151;
    --text-light: #6B7280;
    --background: #F9FAFB;
    --background-alt: #F3F4F6;
    --white: #FFFFFF;
    
    /* Font Sizes */
    --fs-xs: 0.75rem;
    --fs-sm: 0.875rem;
    --fs-base: 1rem;
    --fs-lg: 1.125rem;
    --fs-xl: 1.25rem;
    --fs-2xl: 1.5rem;
    --fs-3xl: 1.875rem;
    --fs-4xl: 2.25rem;
    --fs-5xl: 3rem;
    
    /* Spacing */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-24: 6rem;
    
    /* Border Radius */
    --radius-sm: 0.125rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-full: 9999px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    /* Transitions */
    --transition-default: all 0.3s ease;
    --transition-fast: all 0.2s ease;
    --transition-slow: all 0.5s ease;
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background);
    color: var(--text-dark);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  a {
    color: var(--primary);
    text-decoration: none;
    transition: var(--transition-fast);
  }
  
  a:hover {
    color: var(--primary-dark);
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    padding: 0;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  ul, ol {
    list-style-position: inside;
    margin-bottom: 1rem;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  .section {
    padding: var(--space-16) 0;
  }
  
  .section-title {
    font-size: var(--fs-4xl);
    margin-bottom: var(--space-8);
  }
  
  .section-title-center {
    font-size: var(--fs-4xl);
    margin-bottom: var(--space-8);
    text-align: center;
  }
  
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-3) var(--space-6);
    border-radius: var(--radius-md);
    font-weight: 600;
    transition: var(--transition-fast);
    cursor: pointer;
  }
  
  .btn-primary {
    background-color: var(--primary);
    color: var(--white);
  }
  
  .btn-primary:hover {
    background-color: var(--primary-dark);
  }
  
  .btn-secondary {
    background-color: var(--secondary);
    color: var(--white);
  }
  
  .btn-secondary:hover {
    background-color: var(--secondary-dark);
  }
  
  .btn-outline {
    border: 2px solid var(--primary);
    color: var(--primary);
  }
  
  .btn-outline:hover {
    background-color: var(--primary);
    color: var(--white);
  }
  
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
    
    .section {
      padding: var(--space-12) 0;
    }
    
    .section-title,
    .section-title-center {
      font-size: var(--fs-3xl);
      margin-bottom: var(--space-6);
    }
  }
`;

export default GlobalStyles;
