
import './App.css';
import AllRoutes from './Pages/AllRoutes';
import Navbar from './Component/Navbar';
import BrandCards from './Component/BrandCards';
import AyurvedaBrandCards from './Component/AyurvedaBrandsCards';
import Pagination from './Component/Pagination';
import AyurvedaProducts from './Component/AyurvedaProducts';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
      <AyurvedaProducts/>
    </div>
  );
}

export default App;
