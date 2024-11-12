// rafce
import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import axios from 'axios'
import striptags from 'striptags'

const Busca = () => {
  const [termoDeBusca, setTermoDeBusca] = useState('React')
  const [resultados, setResultados] = useState([])
  
  useEffect(() => {
    const fazBusca = async () => {
      const { data } = await axios.get(
        'https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            format: 'json',
            origin: '*',
            srsearch: termoDeBusca
          }
        }
      )
      setResultados(data.query.search)
    }
    if(termoDeBusca)
      fazBusca()
  }, [termoDeBusca])
  return (
    <div>
      <IconField iconPosition='left'>
        <InputIcon className='pi pi-search'/>
        <InputText
          value={termoDeBusca} 
          onChange={(e) => setTermoDeBusca(e.target.value)}/>
      </IconField>
      {
        resultados.map(resultado => (
          <div
            key={resultado.pageid}
            className='my-2 border border-1 border-400'>
              <h4
                className='p-1 text-center border-bottom border-bottom-1 border-400'>
                  {resultado.title}
                  <span>
                    <Button 
                      icon="pi pi-send"
                      className='ml-2 p-button-rounded'
                      onClick={() => window.open(
                        `https://en.wikipedia.org?curid=${resultado.pageid}`,
                      )}
                    />
                  </span>
              </h4>
              <div className='p-2'>
                <span>{striptags(resultado.snippet)}</span>
                <span>...</span>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default Busca