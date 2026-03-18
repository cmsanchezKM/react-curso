import { useInputForm } from "../hooks";

const Form = () => {
  const hexadecimal = useInputForm("#ffffff");

  return (
    <div>
      <input
        type="text"
        value={hexadecimal.value}
        onChange={hexadecimal.onChange}
      />
      <p>Válido o inválido</p>
    </div>
  );
};

export default Form;
