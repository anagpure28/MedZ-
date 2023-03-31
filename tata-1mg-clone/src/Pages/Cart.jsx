import React, { useState, useEffect } from 'react'
import styles from "./Cart.module.css";
import Navbar from "../Component/Navbar";
import Footer from "./Footer";

// const cartData = [
//   {
//     "title": "Kapiva Himalayan Shilajit",
//     "desc": "Kapiva Himalayan Shilajit is a dietary supplement formulated with shilajit resin that helps to boost immunity and reduce stress and anxiety. Shilajit is a health rejuvenator that helps detoxify the body and contributes to overall vitality and helps slow down the ageing process. It may help increase strength and stamina. Shilajit has antioxidant and antimicrobial properties that help boost immunity",
//     "price": 1499,
//     "discountprice": 949,
//     "quantity" : 2,
//     "category": "ayurveda",
//     "brand": "himalayan",
//     "rating": 4.1,
//     "images": [
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/d05dc77d933b4a949768795a5a02cd79.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/fb158776004341d1bc4195fd05b080a4.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/6a757cc8-58f7-48c6-9725-f1d055a57ebe.jpeg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/c006445f61b14e7bbcc49347657e187c.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/f16d4bb37fd34c19b6e375742861055c.jpg"
//     ],
//     "id": 1
//     },
//     {
//     "title": "Zandu Kesari Jivan Chyawanprash",
//     "desc": "Zandu Kesari Jivan Chyawanprash is an Ayurvedic formulation with exotic herbs, spices and trace minerals that helps revitalise and energise the body. It helps boost immunity and enhance overall health.",
//     "price": 785,
//     "discountprice": 644,
//     "quantity" : 1,
//     "category": "ayurveda",
//     "brand": "zandu",
//     "rating": 4.4,
//     "images": [
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/roq4nzjspyh7uxgeamp0.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/s2jipe3u1pmmrjrqfjfx.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/yg1ysmlgy1yufoqngcu7.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/n3qcarzhxqmplte5r4n7.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/rhhat7smdyjeqnvkpuek.jpg"
//     ],
//     "id": 2
//     },
//     {
//     "title": "Dabur Chyawanprash Awaleha (Gur)",
//     "desc": "Dabur Chyawanprash Awaleha (Gur) is a combination of ayurvedic raw herbs which promote general wellness. It provides strength and energy and improves your body’s immunity system. It aids in blood purification and helps in proper digestion, thus eliminating toxins from your body. It is packed with vitamin C because of the presence of amla and has a high antioxidant value. It benefits all age groups, especially children, helps in supporting your overall health, and keeps you active throughout the year.",
//     "price": 395,
//     "discountprice": 299,
//     "quantity" : 1,
//     "category": "ayurveda",
//     "brand": "dabur",
//     "rating": 4.1,
//     "images": [
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/0ace14be19344260ae34d1980eca101f.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/2f832aa1936049149ce6ed8baf9b948b.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/3536df77d3b64851a27b1e63f6217102.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/41fc72aca7e743fa9f1a0695f9a56764.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/718ada6316184198b922328d9a11234b.jpg"
//     ],
//     "id": 3
//     },
//     {
//     "title": "Delight Nuts California Almond Natural",
//     "desc": "Delight Nuts California Almonds are deliciously seasoned premium natural almonds that treat your taste buds to a truly delightful experience. These nuts make a perfect snack for all your cravings, while their healthy dose of essential nutrients, protein, and dietary fibre maintains your immunity and increases your energy levels. The California Almonds' rich taste and superior quality will elevate your mood and enrich your overall health.",
//     "price": 349,
//     "discountprice": 270,
//     "quantity" : 1,
//     "category": "ayurveda",
//     "brand": "delight",
//     "rating": 4.2,
//     "images": [
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/c0lilanwygtqc9xu5d46.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/vyj19friqgy1wwvpl1tw.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/c0lilanwygtqc9xu5d46.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/vyj19friqgy1wwvpl1tw.jpg",
//     "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/c0lilanwygtqc9xu5d46.jpg"
//     ],
//     "id": 4
//     },
//     {
//       "title": "Tata 1mg Biotin + Tablet",
//       "desc": "Prevents hair loss caused by biotin deficiency that can cause thin, brittle and splitting of hair",
//       "price": 595,
//       "discountprice": 326,
//       "quantity" : 1,
//       "rating": 3.8,
//       "images": [
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/ol2kbjitmuh8e4rs865z.jpg",
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/dshyr1f7nwspheani1qt.jpg",
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/pmjkgcld6karql0edzqt.jpg",
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/e1jeqyda1jctq5az3q9g.jpg",
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/laccdlngtko5ymliyxpy.jpg"
//       ],
//       "id": 1,
//       "brand": "Tata",
//       "category": "Hair care"
//       },
//       {
//       "title": "Tata 1mg Glucosamine HCL 1500 mg Tablet",
//       "desc": "Helps in the treatment of Osteoarthritis and Rheumatoid Arthritis",
//       "price": 995,
//       "discountprice": 448,
//       "quantity" : 1,
//       "rating": 4.2,
//       "images": [
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/c2da7f19ab63463c8d3a99dd29365795.jpg",
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/ed75d2133db246338951e169dcfd04f9.jpg",
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/a3142e47f186439e9265c3311ae8ed48.jpg",
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/ccd898dade974cb3a630b60d7a594b19.jpgg"
//       ],
//       "id": 2,
//       "brand": "Tata",
//       "category": "Hair care"
//       },
//       {
//       "title": "Fast&Up Reload Lime ",
//       "desc": "Helps treat osteoporosis, osteomalacia, osteoarthritis, and rickets",
//       "price": 265,
//       "discountprice": 229,
//       "quantity" : 1,
//       "rating": 4.5,
//       "images": [
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/16385ab9ac6d4d74bb553ff5554b3690.jpg",
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/173e69eff0ce4635bdcec7e5bb49a338.jpg",
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/96181030488e4d60b37b78c53520dc9a.jpg",
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/786c9565f4654b4ca9d7c092fc43fa7f.jpg",
//       "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/a2087236ddc24cb0ab0b1668ddf6097b.jpg"
//       ],
//       "id": 3,
//       "brand": "Medicure",
//       "category": "Cardiac care"
//       }
// ]


function Cart() {

  const [cart,setCart] = useState([]);

  useEffect(()=>{
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData)

    let cleanupFn=()=>{
      localStorage.setItem("cart",JSON.stringify(cart));
    }

    return cleanupFn
   },[])

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

  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
      <Navbar/>
    <div className={styles.main}>
      <div className={styles.itemcontainerMain}>
      <h1>Total Items ({totalItems()})</h1>
      <div className={styles.itemContainer}>
      {cart.length>0&&cart.map((el,i)=>{
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
      <button className={styles.checkoutButton}>CHECKOUT</button>
      </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Cart