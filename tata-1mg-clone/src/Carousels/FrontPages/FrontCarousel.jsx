import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../FrontCarousel/1.jpg";
import pic2 from "../FrontCarousel/2.png";
import pic3 from "../FrontCarousel/3.png";
import pic4 from "../FrontCarousel/4.png";
import pic5 from "../FrontCarousel/5.png";
import pic6 from "../FrontCarousel/6.png";
import pic7 from "../FrontCarousel/7.png";
import pic8 from "../FrontCarousel/8.webp";
import pic9 from "../FrontCarousel/9.webp";
import pic10 from "../FrontCarousel/10.webp";
import pic11 from "../FrontCarousel/11.webp";
import { Image } from "@chakra-ui/react";

export default class Autoplay extends Component {
  render() {
    const settings = {
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div
          style={{
            border: "1px solid gray",
            boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: "66.4%" }}>
              <Slider {...settings}>
                <div>
                  <img width="100%" src={pic1} alt="" />
                </div>
                <div>
                  <img width="100%" src={pic2} alt="" />
                </div>
                <div>
                  <img width="100%" src={pic3} alt="" />
                </div>
                <div>
                  <img width="100%" src={pic4} alt="" />
                </div>
                <div>
                  <img width="100%" src={pic5} alt="" />
                </div>
                <div>
                  <img width="100%" src={pic6} alt="" />
                </div>
                <div>
                  <img width="100%" src={pic7} alt="" />
                </div>
                <div>
                  <img width="100%" src={pic8} alt="" />
                </div>
                <div>
                  <img width="100%" src={pic9} alt="" />
                </div>
                <div>
                  <img width="100%" src={pic10} alt="" />
                </div>
                <div>
                  <img width="100%" src={pic11} alt="" />
                </div>
              </Slider>
            </div>
            <div style={{ width: "34%" }}>
              <img
                width="100%"
                src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/421855e3-ec1c-42c9-a5b4-d5153c8f2f54.png"
                alt=""
              />
            </div>
          </div>
          <div style={{ padding: "15px", fontSize: "25px", color: "gray" }}>
            <h3>
              Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
            </h3>
          </div>
        </div>
        <div style={{width: "85%", margin: "auto", paddingTop:"30px"}}>
          <Image p={4} style={{padding: "30px 0 -10px"}} src="https://onemg.gumlet.io/marketing/29087450-0f25-4856-96fc-62f4ea81bbd3.png"/>
        </div>
      </div>
    );
  }
}
