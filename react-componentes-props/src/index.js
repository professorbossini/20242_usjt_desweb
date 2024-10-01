import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'


const App = () => {
  return (
    <div
      className='container border mt-2'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='text-center'>Seus pedidos..</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-xl-3 col-md-6'>
            <Pedido />
          </div>
          <div className='col-12 col-xl-3 col-md-6'>
            <Pedido />
          </div>
          <div className='col-12 col-xl-3 col-md-6'>
            <Pedido />
          </div>
          <div className='col-12 col-xl-3 col-md-6'>
            <Pedido />
          </div> 
        </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)