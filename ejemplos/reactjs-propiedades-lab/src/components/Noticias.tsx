interface NoticiaProps {
  titulo: string;
  contenido: string;
}

const Noticia = ({ titulo, contenido }: NoticiaProps) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
};

export default Noticia;
