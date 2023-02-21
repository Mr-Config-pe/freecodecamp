/*---------- Inicio Code Immer ----------*/

import './App.css';
import freeCodeCampLogo from '../src/assets/images/freecodecamp-logo.png'
import Button from './components/Button';
import Counter from './components/Counter';
import SocialMedia from './components/SocialMedia';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0); //Hook

  const useClic = () => {
    setNumClics(numClics + 1)
  }

  const counterReset = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
        className='freecodecamp-logo' 
        src={freeCodeCampLogo}
        alt='Logo Freecodecamp'/>
      </div>
      <div className='counter-container'>
        <Counter 
        numClics={numClics} 
        />
        <Button 
         text='Clic'
         isButtonClic={true}
         useClic={useClic}
         />
        <Button 
          text='Reset'
          isButtonClic={false}
          useClic={counterReset}
          />
        <SocialMedia />
      </div>
    </div>
  );
}

export default App;


/*---------- Fin Code Immer ----------*/