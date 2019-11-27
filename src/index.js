import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'

//import Multi from './componentes/Multiplos'
//import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
  <div>
      <Pai nome="Paulo" sobrenome="Silva">
        <Filho nome="Gabriel" /> 
        <Filho nome="Sam"  /> 
        <Filho nome="Hannah"  /> 
      </Pai>
  </div>
, document.getElementById('root'))


//<Saudacao tipo="Bom dia" nome="Ana" />
