import { createContext, useState, useEffect } from "react";


export const Context = createContext()
export function Provider({ children }) {
    const [pizza, setPizza] = useState([])
    const getPizza = async () => {
        const res = await fetch('/pizzas.json')
        const data = await res.json()
        setPizza(data)
    }
    useEffect(() => {

        getPizza()

    }, [])
    const globalState = {
        pizza,
        setPizza
    }
    return <Context.Provider value={globalState}> {children} </Context.Provider>
}