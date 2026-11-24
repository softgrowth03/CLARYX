import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ScrollReveal from './ScrollReveal.jsx';
import './styles.css';
import './poly.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><ScrollReveal /><App /></React.StrictMode>);
