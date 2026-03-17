import "./App.css";
import Boton from "./Boton/Boton";
import withHover from "./hoc/witchHover";
import InfoUsuario from "./components/InfoUsuario";
import withData from "./hoc/withData";

function App() {
  const InfoUsuarioWithData = withData(
    InfoUsuario,
    "https://randomuser.me/api/",
  );

  const BotonWithHover = withHover(Boton);
  return (
    <div>
      <InfoUsuarioWithData />
      <Boton handleClick={() => alert("Hola mundo!!!")}>Saludar al mundo</Boton>
      <BotonWithHover handleClick={() => alert("Bienvenid@s...")}>
        Dar bienvenida
      </BotonWithHover>
    </div>
  );
}

export default App;
