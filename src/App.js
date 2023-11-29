import blahajLogo from './images/logoblahaj.png';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';


function App() {

  const [quantClicks, setQuantClicks] = useState(0);

  const addClick = () => {
    setQuantClicks(quantClicks + 1);
  }

  const resetClicks = () => {
    setQuantClicks(0);
  }

  return (
    <div className="App">
      <div className='blahaj-logo-container'>
        <img 
          className='blahaj-logo'
          src={blahajLogo}
          alt='Logo de Blahaj'
        />
      </div>
      <div className='main-container'>
        <Counter quantClicks={quantClicks}/>
        <Button 
          text="Click"
          isAClickButton={true}
          handleClick={addClick}
        />
        <Button
          text="Reset"
          isAClickButton={false}
          handleClick={resetClicks}
        />
      </div>
    </div>
  );
}

export default App;
