/* import logo from './logo.svg';*/
import './App.css';
import freecodecamplogo from './assets/images/freecodecamp-logo.png'
import Button from './components/Button'
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import SocialMedia from './components/SocialMedia';


function App() {

  // Hook Mostrar Input

  const [input, setInput] = useState(''); //Las Cadenas de caracteres vacias son falsas

  // Funcion Agregar Input

  const addInput = val => {
    setInput(input + val);
  };

  // Funcion para calcular resultado de los operadores con la dependencia de mathjs

  const calcResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Porfavor ingrese un valor para realizar los cambios')
    }
  };
  
  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'> 
        <img 
        src={freecodecamplogo} 
        className='freecodecamp-logo'
        alt='Logo de FreecodeCamp'/>
      </div>
      <div className='container-calculator'>
        <Screen input={input}/>
        <div className='row'>
          <Button clickInput={addInput}>1</Button>
          <Button clickInput={addInput}>2</Button>
          <Button clickInput={addInput}>3</Button>
          <Button clickInput={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickInput={addInput}>4</Button>
          <Button clickInput={addInput}>5</Button>
          <Button clickInput={addInput}>6</Button>
          <Button clickInput={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button clickInput={addInput}>7</Button>
          <Button clickInput={addInput}>8</Button>
          <Button clickInput={addInput}>9</Button>
          <Button clickInput={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button clickInput={calcResult}>=</Button>
          <Button clickInput={addInput}>0</Button>
          <Button clickInput={addInput}>.</Button>
          <Button clickInput={addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear clickClear={() => setInput('')}>Clear</ButtonClear>
        </div>
    </div>
    <SocialMedia />
    </div>
  );
}

export default App;
