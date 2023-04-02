import React from 'react';
import styles from "./EmptyCart.module.css"
import {Link} from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div className={styles.main}>
        <img className={styles.img}src="https://www.1mg.com/images/online_consultation/empty-cart-icon.svg" alt="Empty Cart Image" />
        <h3>Oops!</h3>
        <h3>Looks like there is no item in your cart yet.</h3>
        <br />
        <Link to="/vitamin-nutritiion">
        <button className={styles.button}>ADD MEDICINES</button>
        </Link>
        
    </div>
  )
}
