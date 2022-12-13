import React ,{useState,useEffect}from 'react';
import {Switch,Route} from 'react-router-dom';

import Login from './auth/Login';
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import NotFound from '../utils/NotFound/NotFound'
import ForgotPass from '../body/auth/ForgotPassword'
import ResetPass from '../body/auth/ResetPassword'

import Profile from '../body/profile/Profile'
import EditUser from '../body/profile/EditUser'

import {useSelector} from 'react-redux'

import Home from './home/Home'
import Cart from './Cart/Cart'
import {DataProvider} from './DataProvider'
import LandingPage from '../LandingPage';
import Products from './Products';
import Customize from './CustomPizza/Customize';



const Body=()=>{
  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);
  const auth = useSelector(state => state.auth)
  const {isLogged, isAdmin} = auth
  return (
    <DataProvider>
    <section>
          
          <Switch>
          
          <Route path="/" exact component={ LandingPage } />
          <Route path="/cart" exact component={Cart} />
          <Route path="/pizza" exact component={ Home } />
          <Route path="/products" exact component={ Products } />
          <Route path="/customize" exact><Customize
              ingredients={ingredients}
              setIngredients={setIngredients}
            /></Route>
          
          <Route path="/login" component={isLogged ? NotFound : Login} exact />
          <Route path="/register" component={isLogged ? NotFound : Register} exact />
          
          <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
          <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />

               
          <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
          <Route path="/edit_user/:id" component={isAdmin ? EditUser : NotFound} exact />

          <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

          <Route path="/cart" component={Cart}></Route>
        </Switch>
    </section>
    </DataProvider>

  )
}

export default Body

