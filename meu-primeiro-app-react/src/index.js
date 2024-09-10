import React from 'react'
import ReactDOM from 'react-dom'

//1. definir um componente React que se chama PrimeiroNome e produz um elemento html p com o seu nome
const PrimeiroNome = () => {
  return <p>Rodrigo</p>
}
//2. definir um componente React que se chama Sobrenome e produz um elemento html p com o seu sobrenome
const Sobrenome = () => <p>Bossini</p>

//3. Exibir ambos como filhos do componente App

const App = () => {
  //jsx: javascript extension
  return <div>
    <PrimeiroNome />
    <Sobrenome />
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)