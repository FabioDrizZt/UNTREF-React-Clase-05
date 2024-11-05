import { useState, useEffect } from 'react'

export default function UserProfileFuncional() {
  const [user, setUser] = useState(null)
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("Diplomatura FrontEnd @ UNTreF")
  console.log('Constructor: Inicializando estados');

  useEffect(() => {
    // Simulamos una petición asincrona a una API
    setTimeout(() => {
      setUser({ name: 'Fabio', age: 35 })
    }, 3000)
  }, [])

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
      document.title = `${title} ~ ${count + 1}`
      console.log('se ejecuto el intervalo');
    }, 2000)
    console.log('Se actualizó el componente');

    return () => {
      console.log('Se Limpió o desmontó el componente');
      clearInterval(intervalo)
    }
  }, [title, count])

  return (
    <div>
      {user ?
        (<h1>Perfil de usuario de {user.name} - tiene {user.age} año</h1>) :
        (<h1>Cargando Perfil..</h1>)
      }
      <button onClick={() => setTitle('Nuevo Titulo')}>Cambiar Titulo</button>
    </div>)
}
