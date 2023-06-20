import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-24 py-2 fixed' style={{width: '100%'}}>
        <span>Salimov Sardor</span>
        <ul className='flex gap-12'>
            <li><Link to={'/'}>About</Link></li>
            <li>Projcts</li>
            <li><Link to={'/contact'}>Contacts</Link></li>
        </ul>
    </div>
  )
}

export default Navbar