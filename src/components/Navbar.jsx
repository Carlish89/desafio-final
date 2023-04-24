import React from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../Context'
import { useContext } from 'react'

const Navbar = () => {
    const value = useContext(Context)
    const precioAc = value.precioAc   
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive")
    return (
        <div>
            <div className='navbar'>
                <NavLink className={setActiveClass} to="/">🍕Pizzeria Mamma Mia!</NavLink>
                 <NavLink className={setActiveClass} to="/carrito"><span className='text-white'>${precioAc}</span>🛒</NavLink>
            </div>         
        </div>
    )
}
export default Navbar
