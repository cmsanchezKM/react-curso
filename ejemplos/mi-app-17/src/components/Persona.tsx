import React, { useMemo, useState } from "react";

const Persona = () => {
  const [nombre, setNombre] = useState("Charly");
  const [apellido, setApellido] = useState("Falco");
  const [email, setEmail] = useState("cfalco@gmail.com");

  const nombreCompleto = useMemo(() => {
    console.log("nombreCompleto se ejecuta");
    return (
      <p>
        {nombre} {apellido}
      </p>
    );
  }, [nombre, apellido]);

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <hr />
      <p>{nombreCompleto}</p>
      <p>{email}</p>
    </div>
  );
};

export default Persona;
