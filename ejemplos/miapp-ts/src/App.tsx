import { useState } from "react";
import "./App.css";
import PanelCodigoSecreto from "./PanelCodigoSecreto/PanelCodigoSecreto";
import ClickCounterButton from "./ClickCounterButton/ClickCounterButton";

function App() {
  const [totalClicks, setTotalClicks] = useState(0);
  const handleChildClickCountChange = (totalClicksFromChild: number) => {
    setTotalClicks(totalClicksFromChild);
  };
  return (
    <div>
      <PanelCodigoSecreto />

      <h1> Flujo de datos </h1>
      <p> Total de clicks (padre): {totalClicks}</p>

      <ClickCounterButton onClickCountChange={handleChildClickCountChange} />
    </div>
  );
}

export default App;
