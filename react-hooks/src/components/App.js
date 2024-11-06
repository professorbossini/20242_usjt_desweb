// rafce
import React from 'react'
import Accordion from './Accordion'
import Busca from './Busca'

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
  const expressaoJSX = <Busca />
  return (
    <div>
      {expressaoJSX}
    </div>
  )
}
export default App