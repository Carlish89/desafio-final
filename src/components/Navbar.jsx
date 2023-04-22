import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive")
    return (
        <div>
            <div className='navbar'>
                <NavLink className={setActiveClass} to="/">🍕Pizzeria Mamma Mia!</NavLink>
                <NavLink className={setActiveClass} to="/carrito">🛒</NavLink>
            </div>          



        </div>

    )
}

export default Navbar
