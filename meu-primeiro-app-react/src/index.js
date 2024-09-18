import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

//1. definir um componente React que se chama PrimeiroNome e produz um elemento html p com o seu nome
const PrimeiroNome = () => {
  return <p>Rodrigo</p>
}
//2. definir um componente React que se chama Sobrenome e produz um elemento html p com o seu sobrenome
const Sobrenome = () => <p>Bossini</p>

//3. Exibir ambos como filhos do componente App

const App = () => {
  const estilosBotao = { marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8, boxSizing: 'border-box' }

  const textoDoRotulo = 'Nome:'

  const textoDoBotao = () => 'Enviar'

  const aoClicar = () => alert('clicou!')
  return(
    <div
      style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
        <label
          className='rotulo' 
          htmlFor='nome'
          style={{display: 'block', marginBottom: 4}}>
            {textoDoRotulo}
        </label>
        <input 
          id='nome'
          type='text'
          style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none', boxSizing: 'border-box'}}/>
        <button
          onClick={() => aoClicar()}
          style={estilosBotao}>
          {textoDoBotao()}
        </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)