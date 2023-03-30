import React,{useEffect, useState} from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../Data/AyurvedaData"
import LabTestCard from '../../Component/LabTestCard';

// let url = "https://good-pear-cheetah-tutu.cyclic.app/ayurveda"

// Settings for the slider
const settings = {
  infinite: true,
  speed: 1500,
  slidesToShow: 5,
  slidesToScroll: 3
};

export default function LabTestCarousel() {
  const [slider, setSlider] = React.useState(null);
  const [product, setProducts] = useState([...data])
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  console.log(product)

  return (
    <div style={{width: "95%", margin: "auto"}}>
        <Box
        position={'relative'}
        m={"auto"}
        overflow={'hidden'}>
        {/* Left Icon */}
        <IconButton
            // aria-label="left-arrow"
            colorScheme={"linear(to-r, pink.400, orange.400)"}
            bgGradient="linear(to-r, pink.400, orange.400)"
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()}>
            <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
            aria-label="right-arrow"
            colorScheme={"white"}
            bgGradient="linear(to-r, pink.400, orange.400)"
            borderRadius="full"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickNext()}>
            <BiRightArrowAlt />
        </IconButton>

        {/* Slider */}
        <div style={{margin: "10px 0"}}>
            <div style={{display: "flex", width: "97%", justifyContent: "space-between", margin: "auto"}}>
                {/* <p style={{fontSize: "20px", fontWeight: "600" }}>{label}</p> */}
                <button style={{color: "white", backgroundColor: "#ff6f61", padding: "7px", fontSize: "14px", borderRadius: "5px", }}>SEE ALL</button>
            </div>
            <div>
                <Slider style={{ margin:'auto', padding:"12px"}} {...settings} ref={(slider) => setSlider(slider)}>
                    {product?.map((el, index) => (
                        <LabTestCard key={index} {...el}/>
                    ))}
                </Slider>
                </div>
            </div>
        </Box>
    </div>
  );
}