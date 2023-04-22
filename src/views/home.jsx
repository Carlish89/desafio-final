import React from 'react'
import Pizza from '../components/pizza-2589577.jpg'
import { Context } from '../Context'
import { useContext } from 'react'
import Cardb from '../components/Cardb'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    function capitalizarPrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const { pizza } = useContext(Context)
    const navigate = useNavigate()
    const [id,setID] = useState("")
    const irAPizza = () => {
        navigate(`/Pizza/${id}`)
    }
    console.log(pizza)
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
                        /></div>
                )}
            </div>
        </div>
    )
}

export default Home
