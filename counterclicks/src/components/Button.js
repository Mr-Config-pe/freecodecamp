/*---------- Inicio Code Immer ----------*/

import '../assets/css/Button.css'

//import React from 'react'; Ya No es Necesario

function Button({text, isButtonClic, useClic}) {
    return (
        <button 
        className={ isButtonClic ? 'button-clic' : 'button-reset' }
        onClick={useClic}>
          {text}
        </button>
    );
}

export default Button;

/*---------- Fin Code Immer ----------*/