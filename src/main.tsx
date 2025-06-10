import { StrictMode } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <ThemeProvider>
  <App />
  </ThemeProvider>
);
