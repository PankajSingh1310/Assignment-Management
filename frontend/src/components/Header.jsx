import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav>
        <ul className='flex gap-5'>
            <li><NavLink  to='/admin/register' className={({isActive}) => isActive? "text-blue-600" : "text-slate-100"}>Admin</NavLink></li>
            <li><NavLink  to='/user/register' className={({isActive}) => isActive? "text-blue-600" : "text-slate-100"}>User</NavLink></li>
        </ul>
    </nav>
  )
}

export default Header
