import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* COLORS - Vibrant Theme */
    --background: #fafafa;
    --background-alt: #ffffff;
    --background-dark: #f0f2f5;
    
    --text-dark: #1a1a2e;
    --text-medium: #4a4a6a;
    --text-light: #7a7a9a;
    
    /* Vibrant primary colors */
    --primary: #ff6b6b;
    --primary-rgb: 255, 107, 107;
    --primary-dark: #ff5252;
    --primary-light: #ff7f7f;
    --primary-transparent: rgba(255, 107, 107, 0.1);
    
    /* Complementary secondary colors */
    --secondary: #6c5ce7;
    --secondary-rgb: 108, 92, 231;
    --secondary-dark: #5541e0;
    --secondary-light: #8173ef;
    --secondary-transparent: rgba(108, 92, 231, 0.1);
    
    --accent: #00d2d3;
    --accent-rgb: 0, 210, 211;
    
    --success: #10b981;
    --error: #f43f5e;
    --warning: #f59e0b;
    
    --white: #ffffff;
    --black: #16213e;
    
    --glass-bg: rgba(255, 255, 255, 0.8);
    --glass-border: rgba(255, 255, 255, 0.3);
    
    /* GRADIENTS */
    --gradient-1: linear-gradient(135deg, #ff6b6b, #6c5ce7);
    --gradient-2: linear-gradient(135deg, #00d2d3, #ff6b6b);
    --gradient-3: linear-gradient(135deg, #6c5ce7, #00d2d3);
    --gradient-text: linear-gradient(135deg, #ff6b6b, #ff9e9e);
    
    /* SHADOWS */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.07);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 15px 35px rgba(0, 0, 0, 0.12);
    --shadow-glass: 0 10px 20px rgba(0, 0, 0, 0.08);
    
    /* SPACING */
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
    --space-32: 8rem;
    
    /* TYPOGRAPHY */
    --fs-xs: 0.75rem;
    --fs-sm: 0.875rem;
    --fs-base: 1rem;
    --fs-lg: 1.125rem;
    --fs-xl: 1.25rem;
    --fs-2xl: 1.5rem;
    --fs-3xl: 1.875rem;
    --fs-4xl: 2.25rem;
    --fs-5xl: 3rem;
    --fs-6xl: 3.75rem;
    
    /* BORDERS */
    --radius-sm: 0.125rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 1rem;
    --radius-full: 9999px;
    
    /* TRANSITIONS */
    --transition-fast: 0.2s ease;
    --transition-default: 0.3s ease;
    --transition-slow: 0.5s ease;
    --transition-bounce: 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    color: var(--text-dark);
    background-color: var(--background);
    overflow-x: hidden;
  }
  
  a {
    color: var(--primary);
    text-decoration: none;
    transition: var(--transition-fast);
    position: relative;
  }
  
  a:hover {
    color: var(--primary-dark);
  }
  
  a.underline-link::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  a.underline-link:hover::after {
    transform: scaleX(1);
    transform-origin: left;
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
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--space-6);
  }
  
  .section {
    padding: var(--space-20) 0;
    position: relative;
    overflow: hidden;
  }
  
  .section-title {
    font-size: var(--fs-4xl);
    margin-bottom: var(--space-12);
    position: relative;
    display: inline-block;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 60px;
    height: 4px;
    background: var(--gradient-1);
    border-radius: var(--radius-full);
  }
  
  .section-title-center {
    font-size: var(--fs-4xl);
    margin-bottom: var(--space-12);
    text-align: center;
    position: relative;
    display: inline-block;
  }
  
  .section-title-center::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--gradient-1);
    border-radius: var(--radius-full);
  }
  
  .glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    box-shadow: var(--shadow-glass);
  }
  
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-3) var(--space-6);
    border-radius: var(--radius-md);
    font-weight: 600;
    transition: var(--transition-bounce);
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  
  .btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-100%) rotate(45deg);
    transition: var(--transition-fast);
    z-index: -1;
  }
  
  .btn:hover::before {
    transform: translateX(100%) rotate(45deg);
  }
  
  .btn-primary {
    background: var(--gradient-1);
    color: var(--white);
    box-shadow: var(--shadow-md);
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .btn-secondary {
    background: var(--gradient-2);
    color: var(--white);
    box-shadow: var(--shadow-md);
  }
  
  .btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .btn-outline {
    border: 2px solid var(--primary);
    color: var(--primary);
    box-shadow: var(--shadow-sm);
  }
  
  .btn-outline:hover {
    background: var(--primary);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  .text-gradient {
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  
  .bg-gradient {
    background: var(--gradient-1);
  }
  
  .bg-glass {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
  }
  
  @media (max-width: 1200px) {
    .container {
      max-width: 960px;
    }
  }
  
  @media (max-width: 992px) {
    .container {
      max-width: 720px;
    }
  }
  
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
    
    .section {
      padding: var(--space-16) 0;
    }
    
    .container {
      max-width: 540px;
    }
    
    .section-title,
    .section-title-center {
      font-size: var(--fs-3xl);
      margin-bottom: var(--space-8);
    }
  }
  
  @media (max-width: 576px) {
    .container {
      max-width: 100%;
      padding: 0 var(--space-4);
    }
  }
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-pulse {
    animation: pulse 3s ease-in-out infinite;
  }
`;

export default GlobalStyles;
