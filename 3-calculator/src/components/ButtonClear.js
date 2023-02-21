import React from "react";
import '../assets/css/ButtonClear.css'

const ButtonClear = (props) => (
    <div className='btn-clear' onClick={props.clickClear}>
      {props.children}  {/* Muestra el Nombre dentro de  <ButtonClear></ButtonClear> */}
    </div>
);

export default ButtonClear;