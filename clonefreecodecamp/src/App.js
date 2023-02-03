/*---------- Inicio Code Immer ----------*/

import './App.css';
import Testimony from './componentes/Testimony.js';

function App() {


  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony 
        image='shawn'
        name='Shawn Wang'
        country='Singapore'
        ability='Software Engineer'
        company='Amazon'
        testimony={<>It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer.<strong> freeCodeCamp changed my life.</strong> </>}
        />
        <Testimony
        image='sarah'
        name='Sarah Chima'
        country='Nigeria'
        ability='Software Engineer'
        company='ChatDesk'
        testimony={<><strong>freeCodeCamp was the gateway to my career</strong> as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company. </>}
        />
        <Testimony
        image='emma'
        name='Emma Bostian'
        country='Sweden'
        ability='Software Engineer'
        company='Spotify'
        testimony={<>I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <strong>freeCodeCamp gave me the skills</strong> and confidence I needed to land my dream job as a software engineer at Spotify. </>}
        />
      </div>
    </div>
  );
}

export default App;

/*---------- Fin Code Immer ----------*/