// rafce
import React from 'react'
import Imagem from './Imagem'
const ListaImagens = ({pics, imgStyle}) => {
  return (
    pics.map((pic) => (
      <Imagem
        imgStyle={imgStyle}
        src={pic.src.small}
        alt={pic.alt}
        key={pic.id}/>
    ))
  )
}

export default ListaImagens