import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Nav_style py-3'>
    <ul className="nav justify-content-center">

    <Link className='links m-2' to="/">Home</Link>

    <Link className='links m-2 ' to="/checkout">checkout</Link>

  </ul>
  </div>
  )
}

export default Navbar