import React from 'react';
import './Button.scss';

const Button = ({ color, bgColor, children, onClick }) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    borderColor: bgColor,
    color: color,
  };

  return (
    <button className='button' style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
