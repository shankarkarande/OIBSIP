import React,{useContext, useState, useEffect} from 'react'
import {DataContext} from '../DataProvider'

import {Link} from 'react-router-dom'


//Razorpay :
function loadScript(src){
    return new Promise(resolve=>{
        const script=document.createElement('script')
        script.src=src
        document.body.appendChild(script)
        script.onload=()=>{
            resolve(true)
        }
        script.onerror=()=>{
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

const __DEV__ = document.domain ==="localhost"
if (document.domain ==="localhost"){
    //development mode
}else{
    //production mode
}

export default function Cart() {

    //Razorpay Integration:
    async function displayRazorpay(){

        const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if(!res){
            alert('Razorpay SDK failed to Load')
            return
        }

        const data=fetch('http://localhost:5000/razorpay',{method:'POST'}).then((t)=>t.json())
        console.log(data)
        const options={
        "key": __DEV__ ? "rzp_test_XA7sGOGfg6hDYR" : 'PRODUCTION',
        "amount": `${total * 100}`, 
        "currency": "INR",
        "name": "Pizza",
        "description": "ThankYou for Shopping !!",
        "image": "https://tse4.mm.bing.net/th?id=OIP.VeXcIGuuf6G0ilIsMpCi7gAAAA&pid=Api&P=0&w=158&h=158",
        "order_id":data.id, 
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {
            "name": "Roshni",
            
        },
    }
    
    const paymentObject=new window.Razorpay(options)
    paymentObject.open()

}





    //Cart Functionalities
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0)


    useEffect(() =>{
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            },0)
            setTotal(res)
        }
        getTotal()
    },[cart])

    const reduction = id => {
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = id => {
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1 ;
            }
        })
        setCart([...cart])
    }

    const removeProduct = id => {
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }
    

    if(cart.length === 0)
        return (<>
          <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart is Empty</h2>
          <div style={{textAlign: "center", fontSize: "3rem"}}>
            <img className='myhover'
            src="https://png.pngtree.com/svg/20170524/4b2d185a9e.png"
            alt="back"
            style={{
              marginTop:"10rem",
              height:"60px",
              width:"100px",
              
            }} />
            <Link to="/products" className='myhover'
            style={{textDecoration:"none",color:"red",textTransform:"inherit"}}
            ><h2>Continue Shopping</h2></Link>
          </div>
          
        </>)
    return (
        <>
           {
               cart.map(product =>(
                   <div className="details cart" style={{height:"410px"}} key={product._id}>
                       <div className="img-container" 
                       style={{backgroundImage: `url(${product.image})`,borderRadius:"50%",height:"320px"}} />

                       <div className="box-details">
                           <h2 title={product.title} style={{color:"black"}}>{product.title}</h2>
                           <h3>{product.price}/-</h3>
                           
                           <p>{product.description}</p>
                           
                           
                           <div className="amount">
                               <button className="count" onClick={() => reduction(product._id)}> - </button>
                               <span>{product.count}</span>
                               <button className="count" onClick={() => increase(product._id)}> + </button>
                           </div>

                           <div className="delete" onClick={() => removeProduct(product._id)}>X</div>
                       </div>

                   </div>
               ))
           }

           <div className="total">
                <h3>Total:{total} /-</h3>
                <button onClick={displayRazorpay} className='paybtn'>Proceed to Checkout</button>
           </div>
        </>
    )
}












