import { Context } from '../Context'
import { useContext } from 'react'
import  {Button}  from 'react-bootstrap'
import { capitalizarPrimeraLetra } from './home'


const Carrito = () => {

  const { carrito } = useContext(Context)
  const { setCarrito } = useContext(Context)
  const value = useContext(Context)
  const precioAc = value.precioAc
  const newCarrito = carrito.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  })
  let pizzaList = []
  let contador = 1
  const newLista = () => {

    for (let i = 0; i < newCarrito.length; i++) {
      if (newCarrito[i] === newCarrito[i + 1]) {
        contador++
      }
      else {
        const newPizzaList = {
          id: newCarrito[i].id,
          name: newCarrito[i].name,
          price: newCarrito[i].price,
          img: newCarrito[i].img,
          count: contador,
          result: contador * newCarrito[i].price
        }
        pizzaList = [...pizzaList, newPizzaList]
        contador = 1
      }
    }
  }
  newLista()
  console.log(pizzaList)
  setCarrito(newCarrito)
  return (
    <div className='carrito-cont' style={{ height: "100vh" }}>
      <div className='cont'>
        <h3><b>Detalle del pedido:</b></h3>
        {pizzaList.map((pizza) =>
          <div className='carrito-card border-bottom'>
            <div className='carrito-b1'>
              <img className='carrito-img' src={pizza.img} alt="" />{"  "}<b>{capitalizarPrimeraLetra(pizza.name)}</b>
            </div>
            <div className='carrito-b2'>
              <b className='text-success'>${pizza.result}</b> {"   "}<Button  variant="primary" className='mx-2 bg-info border border-0'>+</Button><b>{pizza.count}</b><Button  variant="primary" className='mx-2 bg-danger border border-0'>-</Button>
            </div>
          </div>
        )}
        <h3 className='m-3'><b>Total:{"   "}${precioAc}{"   "}<Button  variant="primary" className='mx-2 bg-success border border-0'><b>Finalizar Compra</b></Button></b></h3>
      </div>
    </div>
  )
}

export default Carrito