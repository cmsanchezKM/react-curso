import { useState } from "react";
import "./App.css";
import ClickCounterButton from "./ClickCounterButton/ClickCounterButton";
import Autocomplete from "./Autocomplete/Autocomplete";
import Acordeon from "./Acordeon/Acordeon";

function App() {
  const [totalClicks, setTotalClicks] = useState(0);
  const handleChildClickCountChange = (totalClicksFromChild: number) => {
    setTotalClicks(totalClicksFromChild);
  };

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
    </div>
  );
}

export default App;
