import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import Thali from './Components/Thali'
import CheckOut from './Components/CheckOut'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Thali/>} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default App;
