const InfoUsuario = ({ data }: any) => {
  const { name, email, picture } = data.results[0];
  return (
    <div>
      <h2>
        {name.first} {name.last}
      </h2>
      <img src={picture.medium} alt={`Foto de ${name.first}`} />
      <p>✉️: {email}</p>
    </div>
  );
};

export default InfoUsuario;
