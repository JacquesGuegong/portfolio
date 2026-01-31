import React from 'react';
import Home from './pages/Home';
import './styles/main.css';

/**
 * App Component
 * 
 * Main application component that serves as the root of the React application.
 * Renders the Home page which contains all portfolio sections.
 * 
 * @returns {JSX.Element} The main app structure
 */
function App() {
  return (
    <div className="app" role="application">
      <Home />
    </div>
  );
}

export default App;
