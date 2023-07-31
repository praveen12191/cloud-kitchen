import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Login from './components/login';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Register from './components/register';
import Item from './components/item';
import { createContext, useState } from 'react';
import Cart from './components/cart';
import DisplayItems from './components/displayItem';
import DisplayCart from './components/displayCart';

function App() {
  const [items,setitems] = useState([])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar></Navbar>}>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/items" element={<DisplayItems></DisplayItems>}></Route>
            <Route path="/cart" element={<DisplayCart></DisplayCart>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
