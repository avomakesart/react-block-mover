import React, { MouseEventHandler } from 'react';
import './styles.css';

interface ButtonProps {
  direction: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export const Button: React.FC<ButtonProps> = ({ direction, onClick }) => {
  return <div className={`button button-${direction}`} onClick={onClick} />;
};
