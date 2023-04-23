import React from 'react'
import { Context } from '../Context'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { capitalizarPrimeraLetra } from './home'


const Pizza = () => {
  const params = useParams()
  const { pizza } = useContext(Context)
  const getPizzaById = (id) => pizza.find((pizza) => pizza.id === id)
  const newPizza = getPizzaById(params.id)



  return (
    <div className='pizzaDesc'>
      <Card style={{ width: '50rem' }}>
        <Card.Img variant="top" src={newPizza.img} />
        <Card.Body>
          <Card.Title>{capitalizarPrimeraLetra(newPizza.name)}</Card.Title>
          <Card.Text className='p-2'>
            <b>{newPizza.desc}</b>
            <b>Ingredientes:</b>
            {newPizza.ingredients.map(ingredientes =>
              <ul className='m-0 p-2' >🍕{ingredientes}</ul>)}
          </Card.Text>
          <Button variant="primary" className="btn-danger">Añadir🛒</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Pizza
