import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from '../Model';
import Cart from '../Screens/Cart'
import { useCart } from './ContextReducer';

export default function Navbar() {

  const [cartView,setCartView]=useState(false)
  const navigate=useNavigate();
  let data=useCart();

  const handlLogOut=()=>{
         localStorage.removeItem("authToken");
         navigate("/login");
  }

  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{background:"green"}}>
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">FoodExpress</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li> 
        {console.log(localStorage.getItem("authToken"))}
       
        {(localStorage.getItem("authToken"))?
        <li className="nav-item">
           <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
         </li>:""
         }
      </ul>
    </div>
    {(!localStorage.getItem("authToken"))?
       <div className='d-flex'>
        <Link style={{background:"red"}} className="btn bg-red text-success mx-1" to="/login">Login</Link>
        <Link style={{background:"red"}} className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>     
        </div>
        :
        <div className='d-flex'>  
        <div style={{background:"red"}} className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>
          My Cart {" "}
          <Badge pill bg="danger">{data.length}</Badge>
         </div>
         {cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
        <div style={{background:"red"}} className='btn bg-white text-success mx-2' onClick={handlLogOut}>
          Log Out
         </div>
         </div>
    }
    
  </div>
</nav>
    </>
  )
}
