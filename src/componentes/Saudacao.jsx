import React, {Component} from 'react'

export default class Saudacao extends Component {

   state = {
     tipo: this.props.tipo,
     nome: this.props.nome
   }   

   constructor (props) {
     super(props)
     
     this.setTipo = this.setTipo.bind(this)
     this.setNome = this.setNome.bind(this)

   }

   setTipo(evento) {
     //console.log(evento.target.value)
     /*let i = 1
     setInterval(() => {
       this.setState({tipo: ++i})
     }, 1000) */
     this.setState({tipo: evento.target.value})
   }

   setNome(evento) {
     this.setState({nome: evento.target.value})
   }

   render() {
     const {tipo, nome} = this.state
     return (
       <div>
         <h1>{tipo} {nome}</h1>
         <hr/>
         <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
         <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome}/>
       </div>

     )
   }


}



