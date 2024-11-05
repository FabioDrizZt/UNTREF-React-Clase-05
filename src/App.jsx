import { useState } from 'react'
import './App.css'
import UserProfileFuncional from './components/UserProfileFuncional'

function App() {
  const [mostrarPerfil, setMostrarPerfil] = useState(false)
  return (
    <>
      {mostrarPerfil && <UserProfileFuncional />}
      <button onClick={() => setMostrarPerfil(!mostrarPerfil)}>Mostrar/Ocultar Perfil</button>
    </>
  )
}

export default App
