import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation() {
    return (
        <div>
            <Link  className='add-smurf' to='/smurf-form'>Add Smurf</Link>
            <Link className='home' to='/'>Home</Link>
        </div>
    )
}
