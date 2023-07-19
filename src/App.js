import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Login from './components/login';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Register from './components/register';
import Item from './components/item';
import { createContext, useState } from 'react';
import Cart from './components/cart';

export const context = createContext()
function App() {
  const [val,setval] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar></Navbar>}>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <context.Provider value={{val,setval}}>
        <Cart></Cart>
    </context.Provider>
    </div>
  );
}

export default App;
