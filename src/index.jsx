/**
 * React Application Entry Point
 * 
 * Initializes the React application using React 18's createRoot API.
 * Renders the App component into the DOM root element.
 * 
 * @module index
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/main.css';

// Get the root DOM element
const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found. Make sure there is a <div id="root"></div> in your HTML.');
}

// Create a root and render the app
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
