import React, {useState,useContext} from 'react'
import {DataContext} from './DataProvider'
import './home/home.css'
import {Modal} from 'react-bootstrap'


export default function Products() {
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart

    

    const [show,setshow]=useState(false)

    const [data,setData]=useState("empty")

    const handleClose=()=>{
        setshow(false)
    }
    // const handleShow=()=>{
    //     setshow(true)
    // }
  

    

    return (
        <div className="col-md-4 m-3 products" style={{display:'flex' , flexDirection:'row', justifyContent:'space-around' }}>
        {
        products.map(product =>(
            <div className='shadow-lg p-3 mb-5 bg-white rounded' style={{display:'flex',flexDirection:'column',justifyContent:'center',height:'400px',width:'350px',margin:'10px',alignItems:'center'}} key={product._id}>
        <img src={product.image} onClick={()=>{
            setshow(true);
            setData(product)
        }} className="img-fluid" style={{ height:'200px',width:'200px',borderRadius:"50%",cursor:"pointer"}} alt="product" />
        <h1 onClick={()=>{
            setshow(true);
            setData(product)
        }} style={{marginTop:"auto",cursor:"pointer"}}>{product.title}</h1>
        
        <div className='flex-container'>
            <div className='w-100 m-1'>
                <p>Size:{product.sizes[0]}</p>
            </div>
            <div className='w-100 m-1'>
                <p>Price:{product.price}/-</p>
            </div>

        </div>
        <div className='flex-container'>
            <div className='m-1 w-100'>
                <button className='btn' onClick={() => addCart(product._id)}>Add to Cart</button>
            </div>
        </div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{data.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <img src={data.image} className="img-fluid" style={{height:'300px',width:'350px',display:'block',marginLeft:'auto',marginRight:'auto',borderRadius:"50%"}} alt='product'/>
                <p style={{textAlign:'center',marginTop:"17px"}}>{data.description}</p>
            </Modal.Body>

            <Modal.Footer>
                <button className='btn' onClick={handleClose}>Close</button>
            </Modal.Footer>
        </Modal>
        </div>
        ))
        }
        </div>
    )
}
