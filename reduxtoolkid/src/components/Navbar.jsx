import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const items=useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
       <span>Redux Tutorial</span>
      <div>
        <Link className='navLink' style={{fontWeight:"bolder"}} to={'/'}>home</Link>
        <Link className='navLink' style={{marginRight:"7px",fontWeight:"bolder"}} to={'/cart'}>cart</Link>
      </div>
      <span style={{fontWeight:"bolder"}}>items:{items.length}</span>
    </div>
  )
}

export default Navbar
