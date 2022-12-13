
const pizzas=[
    {
        _id:1,
        name:"Barbeque Chicken",
        variants:["small","medium","large"],
        prices:[{
            small:200,
            medium:350,
            large:400,
        }],
        category:"nonveg",
        image:"https://tse2.mm.bing.net/th?id=OIP.qQ9CCtjHHDqs8o-H3j8XCAHaEo&pid=Api&P=0&w=248&h=155",
        description:"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven. Cheese"
    },
    {
        _id:2,
        name:"NonVeg Supreme",
        variants:["small","medium","large"],
        prices:[{
            small:250,
            medium:390,
            large:450,
        }],
        category:"nonveg",
        image:"https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS.jpg",
        description:"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.eese"
    },
    {
        _id:3,
        name:"NonVeg Farmhouse",
        variants:["small","medium","large"],
        prices:[{
            small:270,
            medium:380,
            large:480,
        }],
        category:"nonveg",
        image:"https://www.tasteofhome.com/wp-content/uploads/2021/01/New-York-Style-Pizza_EXPS_FT20_105578_F_1217_1.jpg",
        description:"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
    },
    {
        _id:4,
        name:"Veg Farmhouse",
        variants:["small","medium","large"],
        prices:[{
            small:230,
            medium:330,
            large:420,
        }],
        category:"veg",
        image:"https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80",
        description:"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.ese"
    },
    {
        _id:5,
        name:"Veg Gardenia",
        variants:["small","medium","large"],
        prices:[{
            small:220,
            medium:320,
            large:410,
        }],
        category:"veg",
        price:270,
        count:1,
        image:"https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        description:"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
    },
    {   _id:6,
        name:"Corn Pizza",
        variants:["small","medium","large"],
        prices:[{
            small:220,
            medium:330,
            large:440,
        }],
        category:"veg",
        image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        description:"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
    },

];

export default pizzas;


// import React, {createContext, useState, useEffect} from 'react'

// export const DataContext = createContext();

// export const DataProvider = (props) => {
//     const [pizzas, setpizzas] = useState([
//         {
//             "_id":"1",
//             "title":"Pepper Barbeque Chicken",
//             "sizes":["small","medium","large"],
//             "price":440,
//             "count":1,
//             "prices":[{
//                 small:200,
//                 medium:350,
//                 large:400,
//             }],
//             "category":"nonveg",
//             "image":"https://tse2.mm.bing.net/th?id=OIP.qQ9CCtjHHDqs8o-H3j8XCAHaEo&pid=Api&P=0&w=248&h=155",
//             "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
//         },
//         {
//             "_id":"2",
//             "title":"NonVeg Supreme",
//             "sizes":["small","medium","large"],
//             "price":390,
//             "count":1,
//             "prices":[{
//                 small:250,
//                 medium:390,
//                 large:450,
//             }],
//             "category":"nonveg",
//             "image":"https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS.jpg",
//             "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
//         },
//         {
//             "_id":"3",
//             "title":"NonVeg Farmhouse",
//             "sizes":["small","medium","large"],
//             "price":320,
//             "count":1,
//             "prices":[{
//                 small:270,
//                 medium:380,
//                 large:480,
//             }],
//             "category":"nonveg",
//             "image":"https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
//             "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
//         },
//         {
//             "_id":"4",
//             "title":"Veg Farmhouse",
//             "sizes":["small","medium","large"],
//             "price":340,
//             "count":1,
//             "prices":[{
//                 small:230,
//                 medium:330,
//                 large:420,
//             }],
//             "category":"veg",
//             "image":"https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80",
//             "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
//         },
//         {
//             "_id":"5",
//             "title":"Veg Gardenia",
//             "sizes":["small","medium","large"],
//             "price":330,
//             "count":1,
//             "prices":[{
//                 small:220,
//                 medium:320,
//                 large:410,
//             }],
//             "category":"veg",
//             "image":"https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
//             "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
//         },
//         {
//             "_id":"6",
//             "title":"Corn Pizza",
//             "sizes":["small","medium","large"],
//             "price":340,
//             "count":1,
//             "prices":[{
//                 small:220,
//                 medium:330,
//                 large:440,
//             }],
//             "category":"veg",
//             "image":"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
//             "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
//         }
//     ])

//     const [cart, setCart] = useState([])

//     const addCart = (id) =>{
//         const check = cart.every(item =>{
//             return item._id !== id
//         })
//         if(check){
//             const data = pizzas.filter(product =>{
//                 return product._id === id
//             })
//             setCart([...cart, ...data])
//         }else{
//             alert("The product has been added to cart.")
//         }
//     }

//     useEffect(() =>{
//        const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
//        if(dataCart) setCart(dataCart)
//     },[])

//     useEffect(() =>{
//         localStorage.setItem('dataCart', JSON.stringify(cart))
//     },[cart])


//     const value = {
//         pizzas: [pizzas, setpizzas],
//         cart: [cart, setCart],
//         addCart: addCart
//     }

    
//     return (
//         <DataContext.Provider value={value}>
//             {props.children}
//         </DataContext.Provider>
//     )
// }




// //pizzasdata.js=DataProvder.js
// import React, {createContext, useState, useEffect} from 'react'

// export const DataContext = createContext();

// export const DataProvider = (props) => {
//     const [products, setProducts] = useState([
//         {
//             "_id":"1",
//              "title": "Wacth Product 01",
//              "images": [
//                  "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
//                  ],
//              "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
//              "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//              "colors": ["red", "black", "teal"],
//              "sizes": ["XL", "L", "M", "XM", "LX"],
//              "price": 101,
//              "count": 1
//          },
//          {
//              "_id": "2",
//              "title": "Wacth Product 02",
//              "images": [
//                  "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
//                  ],
//              "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
//              "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//              "colors": ["red", "black", "teal"],
//              "sizes": ["XL", "L", "M", "XM", "LX"],
//              "price": 102,
//              "count": 1

//          },
//          {
//              "_id": "3",
//              "title": "Wacth Product 03",
//              "images": [
//                  "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
//                  ],
//              "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
//              "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//              "colors": ["red", "black", "teal"],
//              "sizes": ["XL", "L", "M", "XM", "LX"],
//              "price": 103,
//              "count": 1

//          },
//          {
//              "_id": "4",
//              "title": "Wacth Product 04",
//              "images": [
//                  "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img1.jpg"
//                  ],
//              "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
//              "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//              "colors": ["red", "black", "teal"],
//              "sizes": ["XL", "L", "M", "XM", "LX"],
//              "price": 104,
//              "count": 1

//          },
//          {
//              "_id": "5",
//              "title": "Wacth Product 05",
//              "images": [
//                  "https://www.upsieutoc.com/images/2020/07/18/img5.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
//                  ],
//              "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
//              "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//              "colors": ["red", "black", "teal"],
//              "sizes": ["XL", "L", "M", "XM", "LX"],
//              "price": 105,
//              "count": 1

//          },
//          {
//              "_id": "6",
//              "title": "Wacth Product 06",
//              "images": [
//                  "https://www.upsieutoc.com/images/2020/07/18/img6.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
//                  "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
//                  ],
//              "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
//              "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//              "colors": ["red", "black", "teal"],
//              "sizes": ["XL", "L", "M", "XM", "LX"],
//              "price": 106,
//              "count": 1

//          }
//     ])

//     const [cart, setCart] = useState([])

//     const addCart = (id) =>{
//         const check = cart.every(item =>{
//             return item._id !== id
//         })
//         if(check){
//             const data = products.filter(product =>{
//                 return product._id === id
//             })
//             setCart([...cart, ...data])
//         }else{
//             alert("The product has been added to cart.")
//         }
//     }

//     useEffect(() =>{
//        const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
//        if(dataCart) setCart(dataCart)
//     },[])

//     useEffect(() =>{
//         localStorage.setItem('dataCart', JSON.stringify(cart))
//     },[cart])


//     const value = {
//         products: [products, setProducts],
//         cart: [cart, setCart],
//         addCart: addCart
//     }

    
//     return (
//         <DataContext.Provider value={value}>
//             {props.children}
//         </DataContext.Provider>
//     )
// }

// //pizzas.js/Home.js=Products.js
// import React, {useContext} from 'react'
// import {DataContext} from './DataProvider'
// import {Link} from 'react-router-dom'

// export default function Products() {
//     const value = useContext(DataContext)
//     const [products] = value.products
//     const addCart = value.addCart

//     return (
//         <div className="products">
//             {
//                 products.map(product =>(
//                     <div className="card" key={product._id}>
//                         <Link to={`/products/${product._id}`}>
//                             <img src={product.images[0]} alt=""/>
//                         </Link>
//                         <div className="box">
//                         <h3 title={product.title}>
//                             <Link to={`/products/${product._id}`}>{product.title}</Link>
//                         </h3>
//                         <p>{product.description}</p>
//                         <h4>${product.price}</h4>
//                         <button onClick={() => addCart(product._id)}>
//                             Add to cart
//                         </button>
//                         </div>
//                     </div>
//                 ))
//             }
          
          
//         </div>
//     )
// }

// //header.js
// import React, {useContext} from 'react'
// import {DataContext} from './DataProvider'
// import {Link} from 'react-router-dom'

// export default function Products() {
//     const value = useContext(DataContext)
//     const [products] = value.products
//     const addCart = value.addCart

//     return (
//         <div className="products">
//             {
//                 products.map(product =>(
//                     <div className="card" key={product._id}>
//                         <Link to={`/products/${product._id}`}>
//                             <img src={product.images[0]} alt=""/>
//                         </Link>
//                         <div className="box">
//                         <h3 title={product.title}>
//                             <Link to={`/products/${product._id}`}>{product.title}</Link>
//                         </h3>
//                         <p>{product.description}</p>
//                         <h4>${product.price}</h4>
//                         <button onClick={() => addCart(product._id)}>
//                             Add to cart
//                         </button>
//                         </div>
//                     </div>
//                 ))
//             }
          
          
//         </div>
//     )
// }

// //cart.js
// import React,{useContext, useState, useEffect} from 'react'
// import {DataContext} from './DataProvider'
// import Colors from './Colors'
// import Sizes from './Sizes'
// import {Link} from 'react-router-dom'

// export default function Cart() {
//     const value = useContext(DataContext)
//     const [cart, setCart] = value.cart;
//     const [total, setTotal] = useState(0)


//     useEffect(() =>{
//         const getTotal = () => {
//             const res = cart.reduce((prev, item) => {
//                 return prev + (item.price * item.count)
//             },0)
//             setTotal(res)
//         }
//         getTotal()
//     },[cart])

//     const reduction = id => {
//         cart.forEach(item =>{
//             if(item._id === id){
//                 item.count === 1 ? item.count = 1 : item.count -= 1;
//             }
//         })
//         setCart([...cart])
//     }
//     const increase = id => {
//         cart.forEach(item =>{
//             if(item._id === id){
//                 item.count += 1 ;
//             }
//         })
//         setCart([...cart])
//     }

//     const removeProduct = id => {
//         if(window.confirm("Do you want to delete this product?")){
//             cart.forEach((item, index) => {
//                 if(item._id === id){
//                     cart.splice(index, 1)
//                 }
//             })
//             setCart([...cart])
//         }
//     }
    

//     if(cart.length === 0)
//         return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>

//     return (
//         <>
//            {
//                cart.map(product =>(
//                    <div className="details cart" key={product._id}>
//                        <div className="img-container" 
//                        style={{backgroundImage: `url(${product.images[0]})`}} />

//                        <div className="box-details">
//                            <h2 title={product.title}>{product.title}</h2>
//                            <h3>${product.price}</h3>
//                            <Colors colors={product.colors} />
//                            <Sizes sizes={product.sizes} />
//                            <p>{product.description}</p>
//                            <p>{product.content}</p>
                           
//                            <div className="amount">
//                                <button className="count" onClick={() => reduction(product._id)}> - </button>
//                                <span>{product.count}</span>
//                                <button className="count" onClick={() => increase(product._id)}> + </button>
//                            </div>

//                            <div className="delete" onClick={() => removeProduct(product._id)}>X</div>
//                        </div>

//                    </div>
//                ))
//            }

//            <div className="total">
//                <Link to="/payment">Payment</Link>
//                <h3>Total: $ {total}</h3>
//            </div>
//         </>
//     )
// }