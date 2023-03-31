import React from 'react'
import styled from "./ImageCard.module.css"

export const ImageCard = ({ imgs }) => {
  return (
    <div className={styled.container}>
       <div>
         {
          imgs?.map((el, ind) => {
            return (
              <div className={styled.box} style={{border: "1px solid black"}} key={ind}>
                <img 
                  src={el} 
                  className='box-image--style'
                  />
              </div>
            )
          })
         }
       </div>
       <div className={styled.main}>
         <img src={imgs[0]} />
       </div>
    </div>
  )
}

