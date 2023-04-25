import { createContext, useState, useEffect } from "react";
export const Context = createContext()
export function Provider({ children }) {

    const [pizza, setPizza] = useState([])
    const [carrito, setCarrito] = useState([])
    const [arrayPrecios, setArrayPrecios] = useState([])
    const [precioAc, setPrecioAc] = useState(0)
    const getPizza = async () => {
        const res = await fetch('/pizzas.json')
        const data = await res.json()
        setPizza(data)
    }
    useEffect(() => {

        getPizza()

    }, [])
    const añadirProducto = (id) => {
        const pizzaFilt = pizza.filter(pizza => pizza.id === id)
        carrito.push(pizzaFilt)
        const newCarrito = [...carrito]
        const bestCarrito = newCarrito.flat()
        setCarrito(bestCarrito)
        console.log(carrito)     
    }
    const sumaAc = (id) =>{
        const pizzaFilt = pizza.filter(pizza => pizza.id === id)
        const newPizza = pizzaFilt.flat()
        const price = newPizza[0].price
        arrayPrecios.push(price)
        const arrayAc = [...arrayPrecios]
        setArrayPrecios(arrayAc)
        const result = arrayPrecios.reduce((a, b) => a + b)       
        return result
    }
    const globalState = {
        pizza,
        setPizza,
        añadirProducto: añadirProducto,
        carrito,
        setCarrito,
        sumaAc:sumaAc,
       precioAc:precioAc,
       setPrecioAc:setPrecioAc
    }
    return <Context.Provider value={globalState}> {children} </Context.Provider>
}