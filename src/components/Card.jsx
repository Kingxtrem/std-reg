import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({ Name, Mobile, ID }) => {
  return (
    <div className='container1'>
      <h3>{Name}</h3>
      <h4>MOBILE:{Mobile}</h4>
      <Link to={`/StdDetails/${ID}`}>
        <button>
          Get Student's Details
        </button></Link>
    </div>
  )
}

export default Card
