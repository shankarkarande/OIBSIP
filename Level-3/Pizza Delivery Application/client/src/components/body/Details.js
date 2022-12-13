import React,{useContext, useState, useRef} from 'react'
import {useParams} from 'react-router-dom'
import {DataContext} from './DataProvider'

import DetailsThumb from './DetailsThumb'
import {Link} from 'react-router-dom'

export default function Details() {
    const {id} = useParams();
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    
    const [index, setIndex] = useState(0)
 


    const details = products.filter((product, index) =>{
        return product._id === id
    })



    return (
        <>
           {
               details.map(product =>(
                   <div className="details" key={product._id}>
                       <div className="img-container" 
                       style={{backgroundImage: `url(${product.image})`}} 
                        />

                       <div className="box-details">
                           <h2 title={product.title}>{product.title}</h2>
                           <h3>${product.price}</h3>
                           
                           <p>{product.description}</p>
                           
                           <DetailsThumb images={product.image} setIndex={setIndex} />
                           <Link to="/cart" className="cart" onClick={() => addCart(product._id)}>
                               Add to cart
                            </Link>
                       </div>

                   </div>
               ))
           }
        </>
    )
}