import "./App.css";
import Sugus from "./components/Sugus";

import noticias from "./data/noticias.json";
import Noticia from "./components/Noticias";

function App() {
  const handleClick = (event: Event) => {
    console.log(event);
    const textoIntro = new Array(16).join("wat") + "Batman!";
    const configSpeech = new SpeechSynthesisUtterance(textoIntro);
    configSpeech.rate = 0.8;
    window.speechSynthesis.speak(configSpeech);
  };

  return (
    <>
      <h1> Los Sugus</h1>
      <Sugus sabor="limón" color="#FDE23A" />
      <Sugus sabor="naranja" color="#F28E40" />
      <Sugus sabor="piña" color="#227BBE" />
      <Sugus sabor="cereza" color="#AD3B52" />
      <Sugus sabor="fresa" color="#EA464C" />

      <h2> Las Noticias </h2>
      {noticias.map((noticia) => (
        <Noticia
          key={noticia.id}
          titulo={noticia.titulo}
          contenido={noticia.contenido}
        />
      ))}

      <h2> Los Eventos </h2>
      <button type="button" onClick={handleClick}>
        Que suene la intro
      </button>
    </>
  );
}

export default App;
