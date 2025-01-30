import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='container5'>
      <ul>
        <li><Link to={"/"}>HOME</Link></li>
        <li><Link to={"/PostApi"}>REGISTRATION</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
