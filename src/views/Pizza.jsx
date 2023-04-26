import React from 'react'
import { Context } from '../Context'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
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
      <div className='desc-img' style={{ backgroundImage: `url(${newPizza.img})` }}>
      </div>
      <div className='desc-body'>
        <div className='desc-title'>
          <h3><b>{capitalizarPrimeraLetra(newPizza.name)}</b></h3>
        </div>
        <div className='desc-pdesc'>
          <p>{newPizza.desc}</p>
        </div>
        <div className='desc-ingredients'>
          <p><b>ingredientes:</b></p>
          {newPizza.ingredients.map(ingredients =>
              <ul className='m-0 p-2 text-center' >🍕{ingredients}</ul>)}
        </div>
        <div className='desc-price'>
            <h3><b>Precio:{'  '}${newPizza.price}</b></h3>
            <Button onClick={() => {añadirProducto(newPizza.id); setPrecioAc( sumaAc(newPizza.id)) }} variant="primary" className="btn-danger">Añadir🛒</Button>
        </div>
      </div>
    </div>
  )
}
export default Pizza
