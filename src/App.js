import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Inicio from './pages/Inicio';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <div>
        <Inicio/>
      </div>
      
    </div>
  );
}

export default App;
