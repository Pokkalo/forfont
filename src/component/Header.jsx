import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsPersonCircle, BsBell, BsGear } from 'react-icons/bs'


const Header = ({children}) => {
    
  return (
    <div className='container-header'>
        <div className='header'>
            <NavLink className="barLink" activeClassName='active' to='/account'><BsPersonCircle/></NavLink>
            <NavLink className="barLink" activeClassName='active' to='/profile'><BsBell/></NavLink>
            <NavLink className="barLink" activeClassName='active' to='/user'><BsGear/></NavLink>
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Header