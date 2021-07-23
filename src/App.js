import React ,{ useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth } from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_51JD9u8SFPjLptyD3pgIhkGN0uGu6yjxhJvgC2yB4itHfjXEsoA5a6GnZXeiDIqr4RPh6nQpqjwWjPNfITXrmTyrP00ktoABBgW");
function App () {

  const [{},dispatch] = useStateValue();
  useEffect (() => {
    //only run once app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>',authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      
      }
    })
  }, [])
  return (
    //BEM
    <BrowserRouter>
      <div className="app">
    <Switch>
    
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path= "/checkout" exact>
        <Header/>
        <Checkout/>
        </Route>
        <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
          </Route>
          <Route path="/">
            <Header/>
          <Home/>
        </Route>
     </Switch>
   </div>
   </BrowserRouter>
  );
}


export default App;
