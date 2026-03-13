import { useEffect, useState } from "react";

type Cocktail = {
  idDrink: string;
  strDrink: string;
};

const Autocomplete: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    if (nombre.length > 3) {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`,
      )
        .then((response) => response.json())
        .then(({ drinks }) => {
          setCocktails(drinks || []);
        });
    }
  }, [nombre]);

  const selectCocktail = (cocktailSeleccionado: Cocktail) => {
    setNombre(cocktailSeleccionado.strDrink);
  };

  const listaCocktails = cocktails.map((cocktail) => (
    <li onClick={() => selectCocktail(cocktail)} key={cocktail.idDrink}>
      {cocktail.strDrink}
    </li>
  ));

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <ul>{listaCocktails}</ul>
    </div>
  );
};

export default Autocomplete;
