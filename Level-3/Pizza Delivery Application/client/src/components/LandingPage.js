import React from 'react'
import {Link} from 'react-router-dom'


export default function LandingPage() {
     
  return (
    <>
        <img src="https://t4.ftcdn.net/jpg/01/39/82/89/240_F_139828910_8yYI45TFrF4oEJ2ZgfOfP3f2daYyqn1p.jpg" 
        className="main-img"
        alt="pizza"
        />
        <div className='maindiv'>
        <Link to="/products"
        className='mylink' >
        Shop From Available Pizzas
        </Link>
        <Link 
        to="/customize" 
        className='mylink'>Or Lets make a Customized Pizza 🍕</Link>
        <p>Your Love for Pizza Should never die......</p>
        </div>
    </>
  )
}
