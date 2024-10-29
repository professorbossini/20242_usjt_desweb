import React from 'react'
import env from 'react-dotenv'
import Busca from "./Busca"
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'
import pexelsClient from '../utils/pexelsClient'
// import { createClient } from 'pexels'
// useState hook
export default class App extends React.Component {

  state = {
    pics: [],
    contador: 1
  }

  // pexelsClient = null

  // componentDidMount(){
  //   this.pexelsClient = createClient(env.PEXELS_KEY)
  // }

  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos.search({
  //     query: termo,
  //     per_page: 15
  //   }).then(pics => this.setState({pics: pics.photos}))
  // }

  onBuscaRealizada = async (termo) => {
    const result = await pexelsClient.get('/search', {
      params: {
        query: termo,
        locale: 'pt-BR',
        per_page: 15,
        page: this.state.contador
      }
    })
    this.setState({pics: result.data.photos, contador: this.state.contador + 1})  
  }
  
  render(){
    return(
      <div 
        className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
          <div className='col-12'>
            <PexelsLogo/>
          </div>
          <div className='col-12'>
            <h1>Exibir uma lista de...</h1>
          </div>
          <div className='col-12'>
            <Busca onBuscaRealizada={this.onBuscaRealizada}/>
          </div>
          <div className='col-12'>
            <div className='grid'>
              <ListaImagens
                imgStyle="col-12 md:col-6 lg:col-4 xl:col-3" 
                pics={this.state.pics}/>
            </div>
          </div>
      </div>
    )
  }
}