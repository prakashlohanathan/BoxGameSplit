import React, { useState } from 'react';
import './SquareBox.css'; 

// Square component which will recursively render smaller squares on click
const Square = ({ size }) => {
  const [isSplit, setIsSplit] = useState(false);

  // Handle the split action
  const handleClick = () => {
    setIsSplit(true);
  };

  if (isSplit) {
    // Calculate size for smaller squares
    const newSize = size / 2;

    return (
      <div className="square-container" style={{ width: size, height: size }}>
        <div className="square" style={{ width: newSize, height: newSize }}>
          <Square size={newSize} />
        </div>
        <div className="square" style={{ width: newSize, height: newSize, left: newSize }}>
          <Square size={newSize} />
        </div>
        <div className="square" style={{ width: newSize, height: newSize, top: newSize }}>
          <Square size={newSize} />
        </div>
        <div className="square" style={{ width: newSize, height: newSize, top: newSize, left: newSize }}>
          <Square size={newSize} />
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className="square"
      style={{ width: size, height: size }}
    />
  );
};

// Main App component
const SquareBox = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Box Split</h1>
        <h2>Instructions</h2>
        <p>
          Initially display a square box below. You have to click within the square box,
          upon clicking, split the square into four smaller squares of equal size. Further,
          clicking any square will continue splitting it into smaller squares.
        </p>
        <h3>Click it!</h3>
      </header>
      <div className='box'>
      <Square size={400} />
      </div>
    </div>
  );
};

export default SquareBox;
