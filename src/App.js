import React, { useState } from 'react';
import mustang from './mustang.jpg';
import './App.css';
import './filter.css';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mustang</h1>
      <img 
        src={mustang} 
        alt="My Image"
        className={isHovered ? 'normal-image' : 'grey-image'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: '800px'}}
      />
      </header>
    </div>
  );
}

export default App;
