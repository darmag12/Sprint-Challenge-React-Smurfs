import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navigation() {
    return (
        <div className='nav'>
            <NavLink  className='add-smurf' to='/smurf-form'>Add Smurf</NavLink>
            <NavLink className='home' to='/'>Home</NavLink>
            <NavLink className='smurf-list' to='/smurf'>Smurf List</NavLink>
        </div>
    )
}
