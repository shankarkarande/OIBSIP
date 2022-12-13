import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id":"1",
            "title":"Pepper Barbeque Chicken",
            "sizes":["small","medium","large"],
            "price":440,
            "count":1,
            "prices":[{
                small:200,
                medium:350,
                large:400,
            }],
            "category":"nonveg",
            "image":"https://tse2.mm.bing.net/th?id=OIP.qQ9CCtjHHDqs8o-H3j8XCAHaEo&pid=Api&P=0&w=248&h=155",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"2",
            "title":"NonVeg Supreme",
            "sizes":["small","medium","large"],
            "price":390,
            "count":1,
            "prices":[{
                small:250,
                medium:390,
                large:450,
            }],
            "category":"nonveg",
            "image":"https://tse3.mm.bing.net/th?id=OIP.XqaIsHKC9F5O_m-DPGYU4wHaHg&pid=Api&P=0&w=176&h=178",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"3",
            "title":"NonVeg Farmhouse",
            "sizes":["small","medium","large"],
            "price":320,
            "count":1,
            "prices":[{
                small:270,
                medium:380,
                large:480,
            }],
            "category":"nonveg",
            "image":"https://www.tasteofhome.com/wp-content/uploads/2021/01/New-York-Style-Pizza_EXPS_FT20_105578_F_1217_1.jpg",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"4",
            "title":"Veg Farmhouse",
            "sizes":["small","medium","large"],
            "price":340,
            "count":1,
            "prices":[{
                small:230,
                medium:330,
                large:420,
            }],
            "category":"veg",
            "image":"https://thumbs.dreamstime.com/b/sliced-pepperoni-pizza-28522250.jpg",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"5",
            "title":"Veg Gardenia",
            "sizes":["small","medium","large"],
            "price":330,
            "count":1,
            "prices":[{
                small:220,
                medium:320,
                large:410,
            }],
            "category":"veg",
            "image":"https://tse3.mm.bing.net/th?id=OIP.XqaIsHKC9F5O_m-DPGYU4wHaHg&pid=Api&P=0&w=176&h=178",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            "_id":"6",
            "title":"Corn Pizza",
            "sizes":["small","medium","large"],
            "price":340,
            "count":1,
            "prices":[{
                small:220,
                medium:330,
                large:440,
            }],
            "category":"veg",
            "image":"http://foodelhi.in/wp-content/uploads/2017/08/IMG_20170819_162616_187.jpg",
            "description":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
        }
    ])

    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
                
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has already been added to cart.")
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
