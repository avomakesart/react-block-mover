import { useState } from 'react';
import { Button, Square } from '../../components';
import { distanceLimit } from '../../utils';
import './styles.css';

export const Home = () => {
  const [topDistance, setTopDistance] = useState(0);
  const [leftDistance, setLeftDistance] = useState(0);

  const stepLenght = 35;

  const handleSquareMove = (position: string) => {
    if (position === 'top') setTopDistance(distanceLimit(topDistance - stepLenght));
    if (position === 'bottom') setTopDistance(distanceLimit(topDistance + stepLenght));
    if (position === 'left') setLeftDistance(distanceLimit(leftDistance - stepLenght));
    if (position === 'right') setLeftDistance(distanceLimit(leftDistance + stepLenght));

    return 0;
  };

  return (
    <div className='container'>
      <Button direction='top' onClick={() => handleSquareMove('top')} />
      <Button direction='bottom' onClick={() => handleSquareMove('bottom')} />
      <Button direction='left' onClick={() => handleSquareMove('left')} />
      <Button direction='right' onClick={() => handleSquareMove('right')} />

      <Square top={topDistance} left={leftDistance} />
    </div>
  );
};

export default Home;
