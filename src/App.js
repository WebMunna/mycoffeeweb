import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogIn from './pages/LogIn'
import Registration from './pages/Registration'
import AdminPanel from './pages/AdminPanel'
import UserPanel from './pages/UserPanel'

import MyCart2 from "./components/MyCart2";

import Home from "./pages/Home";
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import  { CartProvider } from 'react-use-cart'


function App() {
  return (
    <>
    <CartProvider>
         <Router>
            <Header/>
            <ToastContainer/>
            
            
             <Routes>
               
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/registration" element={<Registration/>} />
                <Route path="/adminpanel" element={<AdminPanel/>} />
                <Route path="/userpanel" element={<UserPanel/>} />
                <Route path="/cart" element={<MyCart2/>} />
                
             </Routes>
         </Router>
      </CartProvider>
    </>
  );
}

export default App;
