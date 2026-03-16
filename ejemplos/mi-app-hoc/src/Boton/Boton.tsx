const styles = {
  padding: '8px 12px',
  border: '1px solid black',
  borderRadius: '5px',
  backgroundColor: 'black'
}

const Boton: React.FC<{children: React.ReactNode, handleClick: () => void}> = ({children, handleClick}) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      style={styles}
    >
      {children}
    </button>
  )
}

export default Boton;