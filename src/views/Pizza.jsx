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
  const value = useContext(Context)
  const añadirProducto = value.añadirProducto
  const sumaAc = value.sumaAc
  const setPrecioAc = value.setPrecioAc

  return (
    <div className='pizzaDesc'>
      <Card style={{ width: '50rem' }}>
        <Card.Img variant="top" src={newPizza.img} />
        <Card.Body>
          <Card.Title><h1 className='p-2'>{capitalizarPrimeraLetra(newPizza.name)}</h1></Card.Title>
          <Card.Text className='p-2'>
            <h4 className='p-2'>Precio{"  "}:{"  "}${newPizza.price}</h4>
            <b>{newPizza.desc}</b>
            <b><p className='p-2'>Ingredientes:</p></b>
            {newPizza.ingredients.map(ingredientes =>
              <ul className='m-0 p-2 text-center' >🍕{ingredientes}</ul>)}
          </Card.Text>
          <Button onClick={() => {añadirProducto(newPizza.id); setPrecioAc( sumaAc(newPizza.id)) }} variant="primary" className="btn-danger">Añadir🛒</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
export default Pizza
