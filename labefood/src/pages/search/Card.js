import React, { useEffect } from 'react'
import { CardContainer, CardImage, CardTitle, CardText, CardPrice } from './styled'
import axios from 'axios'

export const Card = () => {

  useEffect(() => {
   axios.get('https://us-central1-missao-newton.cloudfunctions.net/rappi4B/restaurants')
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <CardContainer>
        <CardImage src="https://picsum.photos/200/300" alt="imagem"/>
        <CardTitle>Nome do Restaurante</CardTitle>
        <div>
        <CardText>50 - 60 min</CardText>
        <CardPrice>Frete R$ 6,00</CardPrice>
        </div>
    </CardContainer>
  )
}


