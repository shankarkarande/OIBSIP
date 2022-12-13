import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import {useSelector} from 'react-redux'
import axios from 'axios'

import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import Cart from './svg/cart.svg'

// import {DataContext} from '../body/DataProvider'

function Header() {
    const [menu, setMenu] = useState(false)
    // const value = useContext(DataContext)
    // const [cart] = value.cart
    // console.log({cart})

    const auth = useSelector(state => state.auth)
    

    const {user, isLogged} = auth


    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const userLink = () => {
        return <li className="drop-nav">
            <Link to="#" className="avatar">
            <img src={user.avatar} alt="avatar"/> {user.name} <i className="fas fa-angle-down"></i>
            </Link>
            <ul className="dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
    }

    // const transForm = {
    //     transform: isLogged ? "translateY(-5px)" : 0
    // }

    const toggleMenu = () =>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
    return (
        
        <header className='header'>

            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" />
            </div>
            <div className="logo">
                <h1><Link to="/"><img src="https://static.vecteezy.com/system/resources/previews/000/659/864/original/pizza-hot-logo-vector.jpg" style={{height:"100px",width:"100px"}} alt="logo"/></Link></h1>
            </div>

            <ul style={styleMenu}>

                
                
                <li><Link to="/products">Pizzas</Link></li>
                <li><Link to="/customize" style={{cursor:"pointer"}}>CUSTOMIZE PIZZA</Link></li>
                {
                    isLogged
                    ? userLink()
                    :<li><Link to="/login"><i className="fas fa-user"></i>SignIn</Link></li>
                }
                <li>
                
                <Link to="/cart">
                    <img src={Cart} 
                    style={{position:'relative',height:'20px',width:'20px',marginBottom:'22px'}}
                    alt="cart"/>
                    <span 
                    style={{backgroundColor:'red',position:'absolute',padding:'2px',color:"white",borderRadius:'50%'}}>
                    {0}
                    </span>
                </Link>
                </li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
                </ul>

            
        </header>

    )
}

export default Header




