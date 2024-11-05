import React, { Component } from 'react'

export default class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      user: null, 
      title: "Diplomatura FrontEnd @ UNTreF", 
      count: 0 
    }
    this.intervalo = null
    console.log('Constructor: Inicializando estado');
  }

  // Metodo que se ejecuta en el montaje/creación del componente
  componentDidMount() {
    console.log('componentDidMount: Se montó el componente');
    // Simulamos una petición asincrona a una API
    setTimeout(() => {
      this.setState({ user: { name: 'Fabio', age: 35 } })
    }, 3000)

    this.intervalo = setInterval(() => {
      this.setState(prevState => {
        document.title = `${prevState.title} - ${prevState.count + 1}`
        console.log('se ejecuto el intervalo');
        return { ...prevState, count: prevState.count + 1 }
      })
    }, 2000)
  }

  // Metodo que se ejecuta cuando se actualiza el componente 
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Se actualizó el componente');
    if (prevState.user !== this.state.user) {
      console.log('El perfil del usuario cambió');
    }
    if (prevState.count !== this.state.count) {
      console.log('El contador cambió');
    }
  }

  // Método que se ejecuta cuando se desmonta/destruye el componente
  componentWillUnmount() {
    console.log('componentWillUnmount: Se Desmontó el componente');
    clearInterval(this.intervalo)
  }
  
  render() {
    const { user } = this.state
    return (
      <div>
        {user ?
          (<h1>Perfil de usuario de {user.name} - tiene {user.age} año</h1>) :
          (<h1>Cargando Perfil..</h1>)
        }
      </div>
    )
  }
}
