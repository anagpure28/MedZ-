


import React from 'react'
import { MineralSupplementProductList } from '../components/MineralSupplementProductList'
import styled from 'styled-components'
import { MineralSupplementSidebar } from '../components/MineralSupplementSidebar'
export const MineralSupplementPage = () => {
  return (
    <DIV>
      <div className='sidebar'><MineralSupplementSidebar></MineralSupplementSidebar></div>
      
      <div className='productlist'><MineralSupplementProductList></MineralSupplementProductList></div>
      
    </DIV>
  )
}

const DIV = styled.div`
display:flex;

.sidebar{
  width:15%;
  border-right:1px solid black;
  padding:30px;
}

.productlist{
  width:85%;
}


`;
