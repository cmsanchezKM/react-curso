import './App.css'
import Boton from './Boton/Boton'
import withHover from './hoc/witchHover';

function App() {

  const BotonWithHover = withHover(Boton);
  return (
    <div>
      <Boton handleClick={() => alert('Hola mundo!!!')}>Saludar al mundo</Boton>
      <BotonWithHover handleClick={() => alert('Bienvenid@s...')}>Dar bienvenida</BotonWithHover>
    </div>
  )
}

export default App
