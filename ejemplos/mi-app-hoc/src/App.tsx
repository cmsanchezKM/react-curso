import "./App.css";
import Boton from "./Boton/Boton";
import withHover from "./hoc/witchHover";
import InfoUsuario from "./components/InfoUsuario";
import withData from "./hoc/withData";
import Inicio from "./components/Inicio";
import React, { Suspense } from "react";

function App() {
  const InfoUsuarioWithData = withData(
    InfoUsuario,
    "https://randomuser.me/api/",
  );

  const Admin = React.lazy(() => import("./components/Admin"));

  const BotonWithHover = withHover(Boton);

  const [esAdmin, setEsAdmin] = React.useState(false);

  return (
    <div>
      <InfoUsuarioWithData />
      <Boton handleClick={() => alert("Hola mundo!!!")}>Saludar al mundo</Boton>
      <BotonWithHover handleClick={() => alert("Bienvenid@s...")}>
        Dar bienvenida
      </BotonWithHover>

      <button type="button" onClick={() => setEsAdmin(!esAdmin)}>
        Toggle admin
      </button>

      {esAdmin ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Admin />
        </Suspense>
      ) : (
        <Inicio />
      )}
    </div>
  );
}

export default App;
