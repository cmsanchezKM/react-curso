import { ChangeEvent, useRef, useState } from "react";
import "./App.css";
import ClickCounterButton from "./ClickCounterButton/ClickCounterButton";
import Autocomplete from "./Autocomplete/Autocomplete";
import Acordeon from "./Acordeon/Acordeon";
import violin from "./assets/violin.mp3";

function App() {
  const [totalClicks, setTotalClicks] = useState(0);
  const [volumen, setVolumen] = useState(100);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleChildClickCountChange = (totalClicksFromChild: number) => {
    setTotalClicks(totalClicksFromChild);
  };

  const handlePlay = () => {
    audioRef.current?.play();
  }

  const handlePause = () => {
    audioRef.current?.pause();
  }

    const handleChangeVolume = (event: ChangeEvent<HTMLInputElement>) => {
    const nuevoVolumen = Number(event.target.value)
    setVolumen(nuevoVolumen)

    if (audioRef.current) {
      audioRef.current.volume = nuevoVolumen / 100
    }
  }

  return (
    <div>
      <h1> Flujo de datos </h1>
      <p> Total de clicks (padre): {totalClicks}</p>

      <Acordeon titulo="Una lista de productos">
        <ul>
          <li>Albahaca</li>
           <li>Queso parmesano</li>
           <li>Pechuga de pollo</li>
           <li>Tomates</li>
        </ul>
      </Acordeon>

      <Acordeon titulo="Librería JS" cerrado={false}>
        <div>
          <h4>¿Que es React?</h4>
           <img src="https://www.svgrepo.com/show/452092/react.svg" alt="Logo de React"/>
           <p>React es una librería de JS que permite pintar interfaces de usuario...</p>
         </div>
      </Acordeon>

      <ClickCounterButton onClickCountChange={handleChildClickCountChange} />
      <Autocomplete />


      <hr></hr>

      <audio ref={audioRef} src={violin} />

      <button type="button" onClick={handlePlay}>
        Play
      </button>

      <button type="button" onClick={handlePause}>
        Pause
      </button>

      <input
        type="range"
        min="0"
        max="100"
        value={volumen}
        onChange={handleChangeVolume}
      />

    </div>
  );
}

export default App;
