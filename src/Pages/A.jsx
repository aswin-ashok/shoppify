import React from 'react'
import { Link } from 'react-router-dom'

const A = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='text-center'>
            <h2>Component A</h2>
            <Link to={"/second"}>To B</Link>
        </div>
    </div>
  )
}

export default A
