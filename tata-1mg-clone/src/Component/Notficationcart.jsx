// import React, { useState} from 'react';
// import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import AddToCartBtn from "../components/addToCartBtn";
// import FavoriteBtn from "../components/favoriteBtn";
// import config from "../utils/config";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import styles from "../public/assets/css/productSliderCard.module.css"

// function ProductSliderCard({id, title, slug, price, stock, image, productInfoHandler, redirectToLogin}) {
//     const [isHovering, setIsHovering] = useState(false);
    
//     const addToCartAnimation = () => {
        
//     }

//     return (
//         <LazyLoadComponent>           
//             <div
//                 className={styles.sliderItem}
//                 onMouseEnter={() => setIsHovering(true)}
//                 onMouseLeave={() => setIsHovering(false)}
//             >
//                 {
//                     stock === '0' &&
//                     <span className={styles.outOfStock}>
//                         RUPTURE DE STOCK!
//                     </span>
//                 }
//                 <div className={styles.imageContainer}>                   
//                     <LazyLoadImage
//                         {/* the part of the component I want to animate */}                        
//                         width="100%"
//                         alt={image}
//                         effect="blur"
//                         src={config.BASE_URL + 'images/products/' + image}
//                     />                  
//                     {
//                         isHovering &&
//                         <div className={styles.productHoverDetails}>
//                             <div className={styles.productDetails}>
//                                 <label className={styles.productTitle}>{title.toUpperCase()}</label>
//                                 <br/>
//                                 <label className={styles.price}>CHF {price}</label>
//                             </div>
//                             <div className={styles.buttonsContainer}>
//                                 <div className={styles.row}>
//                                     <div className={styles.col}>
//                                         <FavoriteBtn
//                                             productId={id}
//                                             redirectToLogin={redirectToLogin}
//                                         />
//                                     </div>
//                                     <div className={styles.col}>
//                                         {
//                                             stock !== '0' &&
//                                             <AddToCartBtn
//                                                 addToCartAnimation={addToCartAnimation}
//                                                 productId={id}
//                                                 redirectToLogin={redirectToLogin}
//                                             />
//                                         }
//                                     </div>
//                                     <div className={styles.col}>
//                                         <span
//                                             className={styles.infoBtn}
//                                             onClick={() => productInfoHandler(slug)}
//                                         ></span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     }
//                 </div>
//             </div>
//         </LazyLoadComponent>
//     )
// }

// export default ProductSliderCard;