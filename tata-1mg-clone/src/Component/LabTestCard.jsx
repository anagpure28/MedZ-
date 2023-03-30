import React from 'react'
import styles from "./LabTestCard.module.css"

function LabTestCard({title,desc,img,discountprice,discountdiscountprice,name,rating,id}) {
  return (
    <div className={styles.mainDiv}>
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className={styles.ratingDiv}>
            <img src={img} alt="TataLabsIcon" />
            <span className={styles.ratingBox}>{rating} ★</span>
            <span className={styles.iso}>{name}</span>
        </div>
        <div className={styles.discountpriceDiv}>
            <span className={styles.discountdiscountprice}>{discountdiscountprice}</span>
            <span className={styles.discountprice}>{discountprice}</span>
            <span className={styles.discount}>{Math.floor(((discountprice-discountdiscountprice)/discountprice)*100)}% Off</span>
        </div>
    </div>
  )
}

export default LabTestCard