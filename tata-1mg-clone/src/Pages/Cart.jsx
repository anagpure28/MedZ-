import React, { useState, useEffect } from 'react'
import styles from "./Cart.module.css";
import Navbar from "../Component/Navbar";
import Footer from "./Footer";
import {EmptyCart} from "../Component/EmptyCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Cart() {

  const [cart,setCart] = useState([]);
  const navigate = useNavigate();
  const {isAuth} = useSelector((store)=>{
    // console.log(store.authReducer);
    return store.authReducer
  })
  useEffect(()=>{
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData)
  },[])

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function totalMRP(){
    let total = 0;
    for(let i=0;i<=cart.length-1; i++){
      total += cart[i].price*cart[i].quantity;
    }
    return total;
  }

  function totalPrice(){
    let total = 0;
    for(let i=0;i<=cart.length-1; i++){
      total += cart[i].discountprice*cart[i].quantity;
    }
    return total;
  }

  function totalItems(){
    let total = 0;
    for(let i=0;i<=cart.length-1; i++){
      total += cart[i].quantity;
    }
    return total;
  }

  function removeItem(id,title){
    let newArr = cart.filter((el,i)=>{
      return(el.id!==id&&el.title!==title)
    })
    setCart(newArr);
  }

  function decrement(id,title,quantity){
    if(quantity===1){
      return;
    }
    let newArr = cart.map((el,i)=>{
      if(el.id==id&&el.title==title){
        return {...el,quantity:el.quantity-1}
      }else{
        return el;
      }
    })
    setCart(newArr);
  }

  function increment(id,title){
    let newArr = cart.map((el,i)=>{
      if(el.id==id&&el.title==title){
        return {...el,quantity:el.quantity+1}
      }else{
        return el;
      }
    })
    setCart(newArr);
  }

  function onCheckout(){
    if(!isAuth){
      alert("Please login to proceed.")
      navigate("/login");
    }
  }

  if(cart.length===0){
    return <>
    <Navbar/>
    <EmptyCart/>
    <Footer/>
    </>
  }else{
    return (
      <div style={{backgroundColor:"#F5F5F5"}}>
        <Navbar/>
      <div className={styles.main}>
        <div className={styles.itemcontainerMain}>
        <h1>Total Items ({totalItems()})</h1>
        <div className={styles.itemContainer}>
        {cart?.map((el,i)=>{
          return <><div key={i} className={styles.cartitemDiv}>
            <div>
              <span>{el.title}</span><span>₹{el.discountprice}</span>
            </div>
            <div>
              <span>Brand: {el.brand[0].toUpperCase()+el.brand.substr(1).toLowerCase()}</span>
              <span>₹{el.price}</span>
            </div>
            <div className={styles.productimageDiv}>
              <img src={el.images[0]} alt="product image" />
            </div>
            <div>
              <div onClick={()=>removeItem(el.id,el.title)}>
                <img src="https://img.1mg.com/images/delete_icon.svg" alt="remove button" />
                <span>&nbsp;Remove</span>
              </div>
              <div>
                <img onClick={()=>decrement(el.id,el.title,el.quantity)} src="https://www.1mg.com/images/minus-cart.svg" alt="decrement button" />
                <span>&nbsp;{el.quantity}&nbsp;</span>
                <img onClick={()=>increment(el.id,el.title)} src="https://www.1mg.com/images/plus-cart.svg" alt="increment button" />
              </div>
            </div>
          </div>
          <hr />
          </>
        })}
        </div>
        </div>
        <div className={styles.cartsummaryMain}>
        <div className={styles.cartsummary}>
          <div>
            <span>Item Total(MRP)</span>
            <span>₹{totalMRP()}</span>
          </div>
          <div>
            <span>Price Discount</span>
            <span>-₹{totalMRP()-totalPrice()}</span>
          </div>
          <hr />
          <div>
            <span>Shipping Fee</span>
            <span>As per delivery address</span>
          </div>
          <hr />
          <div>
            <span>To be paid</span>
            <span>₹{totalPrice()}</span>
          </div>
          <div>
            <span>Total Savings</span>
            <span>₹{totalMRP()-totalPrice()}</span>
          </div>
        </div>
        <div className={styles.buttonDiv}>
        <button onClick={onCheckout}className={styles.checkoutButton}>CHECKOUT</button>
        </div>
        </div>
      </div>
      <Footer/>
      </div>
    )
  }
  
}

export default Cart