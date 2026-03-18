import { useState } from "react";
import SelectLang from "./SelectLang";
import React from "react";
import Header from "./Header";

export const LangCtx = React.createContext(null);

const traducciones = {
  es: {
    bienvenida: "Bienvenido a mi Startup",
  },
  en: {
    bienvenida: "Welcome to my Startup",
  },
  fr: {
    bienvenida: "Bienvenue dans ma Startup",
  },
};

const Context = () => {
  const [lang, setLang] = useState("es");

  return (
    <div>
      <SelectLang
        langs={Object.keys(traducciones)}
        onChangeLang={setLang}
        selectedLang={lang}
      />
      <LangCtx.Provider value={traducciones[lang]}>
        <Header />
      </LangCtx.Provider>
    </div>
  );
};

export default Context;
