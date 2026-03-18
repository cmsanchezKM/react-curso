import React, { useContext } from 'react'
import { LangCtx } from './Context'

const Header = () => {
  const {bienvenida} = useContext(LangCtx)

    return (
      <h1>{bienvenida}</h1>
    )
}

export default Header