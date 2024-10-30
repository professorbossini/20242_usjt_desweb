// rafce
import React from 'react'

const Imagem = ({src, alt, imgStyle}) => {
  // const src = props.src
  // const alt = props.alt
  // const { src, alt } = props
  return (
    <div className={imgStyle}>
      <img src={src} alt={alt}/>
    </div>
  )
}

export default Imagem