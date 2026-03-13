import { useState } from "react";
import "./App.css";
import ClickCounterButton from "./ClickCounterButton/ClickCounterButton";
import Autocomplete from "./Autocomplete/Autocomplete";

function App() {
  const [totalClicks, setTotalClicks] = useState(0);
  const handleChildClickCountChange = (totalClicksFromChild: number) => {
    setTotalClicks(totalClicksFromChild);
  };

  return (
    <div>
      <h1> Flujo de datos </h1>
      <p> Total de clicks (padre): {totalClicks}</p>

      <ClickCounterButton onClickCountChange={handleChildClickCountChange} />
      <Autocomplete />
    </div>
  );
}

export default App;
