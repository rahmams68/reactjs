// import {useState} from 'react'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/loginform"
import Navbar from "./components/navbar"
import CartList from "./components/cartList"

function App() {
  return (
    <div>
      {/* <header> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      {/* </header> */}
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}

const LoginPage = () => {
  return (
    <div>
        <LoginForm />
    </div>
  )
}

const Cart = () => {
  return (
    <div>        
        <Navbar />
        <CartList />
        <CartList />
        <CartList />
    </div>
  )
}

export default App;
