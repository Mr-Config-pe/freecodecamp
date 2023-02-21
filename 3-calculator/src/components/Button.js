import React from "react";
import '../assets/css/Button.css'

function Button(props) {

  const isOperator = valor => {
    return  isNaN(valor) && (valor !== '.') && (valor !== '=');
  }

  return (
    <div 
    className={`button-container ${isOperator(props.children) ? 'operator' : null}`}
    onClick={() => props.clickInput(props.children)} >
      {props.children}
    </div>
  );
}

export default Button;