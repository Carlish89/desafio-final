import React from 'react'
import { Context } from '../Context'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'


const Pizza = () => {
  const params = useParams() 
  const { pizza  } = useContext(Context)
  const getPizzaById = (id) => pizza.find((pizza) => pizza.id === id)
  const newPizza = getPizzaById(params.id)
 
  

  return (
    <div>
     hola soy {newPizza.name}
    </div>
  )
}

export default Pizza
