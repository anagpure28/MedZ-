
import './App.css';
import AllRoutes from './Pages/AllRoutes';
import Navbar from './Component/Navbar';
import Privateroute from './Privateroute/Privateroute';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
