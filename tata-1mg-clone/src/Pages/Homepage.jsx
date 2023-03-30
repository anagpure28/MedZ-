import Navbar from '../Component/Navbar'
import Footer from './Footer'
import FrontCarousel from "../Carousels/FrontPages/FrontCarousel"
import AyurvedaBrandsCards from "../Component/AyurvedaBrandsCards"
import BrandCards from "../Component/BrandCards"
import CardCarousel from '../Carousels/FrontPages/CardCarousel'
import LabTestCarousel from "../Carousels/FrontPages/LabTestCarousel"

function Homepage() {
  return (
    <div>     
      <Navbar />
      <FrontCarousel />
      <BrandCards />
      <LabTestCarousel label="Full body health checkups"/>
      <AyurvedaBrandsCards />
      <CardCarousel url="https://good-pear-cheetah-tutu.cyclic.app/vitamin" label="Top Vitamin Supplements"/>
      <CardCarousel url="https://good-pear-cheetah-tutu.cyclic.app/ayurveda" label="Ayurvedic products"/>
      <AyurvedaBrandsCards />
      <CardCarousel url="https://good-pear-cheetah-tutu.cyclic.app/teststrip" label="Test strips & lancets"/>
      <CardCarousel url="https://good-pear-cheetah-tutu.cyclic.app/supplements" label="Antioxidants | supplement of the week"/>
      <BrandCards />
      <LabTestCarousel label="Full body health checkups"/>
      <AyurvedaBrandsCards />
      <CardCarousel url="https://good-pear-cheetah-tutu.cyclic.app/vitamin" label="Top Vitamin Supplements"/>
      <CardCarousel url="https://good-pear-cheetah-tutu.cyclic.app/ayurveda" label="Ayurvedic products"/>
      <LabTestCarousel label="Full body health checkups"/>
      <AyurvedaBrandsCards />
      <CardCarousel url="https://good-pear-cheetah-tutu.cyclic.app/teststrip" label="Test strips & lancets"/>
      <Footer />
    </div>
  )
}

export default Homepage