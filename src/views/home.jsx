import React from 'react'
import Pizza from '../components/pizza-2589577.jpg'
import { Context } from '../Context'
import { useContext } from 'react'
import Cardb from '../components/Cardb'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const Home = () => {   
    
    const { pizza } = useContext(Context)
    const value = useContext(Context)
    const añadirProducto = value.añadirProducto
    const sumaAc = value.sumaAc
    const setPrecioAc = value.setPrecioAc
    const precioAc = value.precioAc
    console.log(precioAc)

    return (
        <div>
            <div className='image' style={{ backgroundImage: `url('${Pizza}')` }}>
                <h1 className='titulo'>Pizzeria Mamma Mia!</h1>
                <p className='border-bottom '>¡Tenemos las mejores Pizzas que podras encontrar!</p> 
            </div>
            <div className='galeria  p-3'>
                {pizza.map(pizza =>
                    <div key={pizza.id} className="card" style={{ width: '18rem' }}>
                        <Cardb
                            image={pizza.img}
                            name={capitalizarPrimeraLetra(pizza.name)}
                            fill={pizza.ingredients.map(ingredientes =>
                                <ul className='m-0'>🍕{ingredientes}</ul>)}
                            price={pizza.price}
                            boton1 ={<Link to={`pizza/${pizza.id}`}>
                            <Button  variant="primary" className='mx-2 bg-info border border-0'>Ver más 👀</Button>
                            </Link>}
                            boton2={<Button onClick={() => {añadirProducto(pizza.id); setPrecioAc( sumaAc(pizza.id)) }} variant="primary" className='mx-2 bg-danger border border-0'>Añadir 🛒</Button>}
                        /></div>
                )}
            </div>
        </div>
    )
}
export default Home
