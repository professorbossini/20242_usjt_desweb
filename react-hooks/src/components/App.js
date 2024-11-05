// rafce
import React from 'react'
import Accordion from './Accordion'

const times = [
  {
    titulo: 'São Paulo',
    conteudo: 'Campeão de tudo'
  },
  {
    titulo: 'Palmeiras',
    conteudo: 'Palmeiras não tem mundial'
  },  
  {
    titulo: 'Corinthians',
    conteudo: "Vai cair...:)"
  }
]
const App = () => {
  return (
    <div>
      <Accordion itens={times}/>
    </div>
  )
}
export default App