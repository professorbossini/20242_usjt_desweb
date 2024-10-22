import React from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
export default class Busca extends React.Component {

  state = {
    termoDeBusca: ''
  }

  onTermoAlterado = (event) => {
    console.log(event.target.value)
    //errado, não faça isso!
    // this.state.termoDeBusca = event.target.value
    this.setState({termoDeBusca: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault()

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='flex flex-column'>
          <IconField iconPosition='left'>
            <InputIcon
              className='pi pi-search' />
            <InputText
              className='w-full'
              value={this.state.termoDeBusca}
              onChange={this.onTermoAlterado}
              placeholder={this.props.dica} />
          </IconField>
          <Button
            className='mt-2 p-button-outlined'
            label='OK' />
        </div>
      </form>
    )
  }
}

Busca.defaultProps = {
  dica: "Digite algo que deseja ver..."
}