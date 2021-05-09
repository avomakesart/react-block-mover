import React from 'react';

import './styles.css';

interface SquareProps {
  top: number;
  left: number;
}

export const Square: React.FC<SquareProps> = ({ top, left }) => {
  const squarePosition = {
    top: top < 0 ? top * 10 : 0,
    bottom: top > 0 ? top * -10 : 0,
    left: left < 0 ? left * 10 : 0,
    right: left > 0 ? left * -10 : 0,
  };

//   console.log(squarePosition);

  return <div className='square' style={squarePosition} />;
};
