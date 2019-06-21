import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation() {
    return (
        <div className='nav'>
            <Link  className='add-smurf' to='/smurf-form'>Add Smurf</Link>
            <Link className='home' to='/'>Home</Link>
            <Link className='smurf-list' to='/smurf'>Smurf List</Link>
        </div>
    )
}
