import React,{useState} from 'react'
import './home.css'
import {Modal} from 'react-bootstrap'


function Pizza({pizza}) {
    const [quantity,setquantity]=useState(1)
    const [variant,setvariant]=useState('small')
    

    const [show,setshow]=useState(false)

    const handleClose=()=>{
        setshow(false)
    }
    const handleShow=()=>{
        setshow(true)
    }
    // const addToCart=(product)=>{
    //     setcart([...cart,product])
    // }
  return (
      
    <div className='shadow-lg p-3 mb-5 bg-white rounded' style={{display:'flex',flexDirection:'column',justifyContent:'center',margin:'35px',alignItems:'center'}} key={pizza._id}>
        <img src={pizza.image} onClick={handleShow} className="img-fluid" style={{cursor:"pointer", height:'200px',width:'200px',borderRadius:"50%"}} alt="pizza" />
        <h1 onClick={handleShow} style={{cursor:"pointer"}}>{pizza.name}</h1>
        
        <div className='flex-container'>
            <div className='w-100 m-1'>
                <select value={variant} onChange={(e)=>{setvariant(e.target.value)}}>
                    {pizza.variants.map(variant=>{
                        return <option value={variant}>{variant}</option>
                    })}
                </select>
            </div>
            <div className='w-100 m-1'>
                <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                    {[...Array(10).keys()].map((x,i)=>{
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>

        </div>
        <div className='flex-container'>
            <div className='m-1 w-100'>
                <div className='btn'>Price:{pizza.prices[0][variant]*quantity}/-</div>
            </div>
        
            <div className='m-1 w-100'>
                <button className='btn'>AddtoCart</button>
            </div>
        </div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{pizza.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <img src={pizza.image} className="img-fluid" style={{height:'300px',width:'350px',display:'block',marginLeft:'auto',marginRight:'auto',borderRadius:"50%"}} alt='product'/>
                <p style={{textAlign:'center',marginTop:"17px"}}>{pizza.description}</p>
            </Modal.Body>

            <Modal.Footer>
                <button className='btn' onClick={handleClose}>Close</button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Pizza