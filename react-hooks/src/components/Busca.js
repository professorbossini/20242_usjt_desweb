// rafce
import React, { useEffect, useState } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

const Busca = () => {
  const [termoDeBusca, setTermoDeBusca] = useState('')
  useEffect(() => {
    console.log('Executando todas as vezes...')
  })

  useEffect(() => {
    console.log('Executando somente uma vez...')
  }, [])

  useEffect(() => {
    console.log('Executando somente quando o termo  é atualizado...')
  }, [termoDeBusca])
  return (
    <div>
      <IconField iconPosition='left'>
        <InputIcon className='pi pi-search'/>
        <InputText
          value={termoDeBusca} 
          onChange={(e) => setTermoDeBusca(e.target.value)}/>
      </IconField>
    </div>
  )
}

export default Busca