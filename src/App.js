//import logo from './logo.svg';
import './index.css';
import './App.css';
import imagenRickMorty from "./img/rick-morty.png";
import imagen from "./img/BRYAN.jpg";
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters]=useState(null);
  const reqApi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>
        {characters? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ):(
          <>
           <img src={imagenRickMorty} alt="Rick & Morty" className="img-home"/>
           <button onClick={reqApi} className="btn-search">
           Buscar personajes
           </button>
           <div class="character-container1">
            <div>
           <img src={imagen} alt="Bryan" className="img-home1"/>
           </div>
         
           <div >
           <center className>
            <h3>Bryan Valerio Reyes</h3>
           <p>zs20006768</p>
           <p>fsocietybvr@gmail.com</p>
           </center>
           </div>
           </div>
          </>
          
          
          
        )
        }
      </header>
    </div>

    
  );
}

export default App;