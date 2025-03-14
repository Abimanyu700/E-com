import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Dress from './Navbar/Dress';
import Bike from './Navbar/Bike';
import Footwear from './Navbar/Footwear';
import Car from './Navbar/Car';
import Bag from './Navbar/Bag';
import Phone from './Navbar/Phone';
import Laptop from './Navbar/Laptop';
import Watch from './Navbar/Watch';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';


function App() {
  return (
    <>
      <div>
       <Router basename='E-com'>
         <Routes>
          <Route path = "/home" element = {<Home />}></Route>
           <Route path = "/" element = {<Login />}></Route>
           <Route path = "/signup" element = {<SignUp />}></Route>
           <Route path= "/dress" element = {<Dress />}></Route>
           <Route path= "/footwear" element = {<Footwear />}></Route>
           <Route path= "/watch" element = {<Watch />}></Route>
           <Route path= "/bag" element = {<Bag />}></Route>
           <Route path= "/phone" element = {<Phone />}></Route>
           <Route path= "/laptop" element = {<Laptop />}></Route>
           <Route path= "/bike" element = {<Bike />}></Route>
           <Route path= "/car" element = {<Car />}></Route>
           <Route path = "/:category/:subcategory" element = {<ProductList/>}></Route>
           <Route path="/cart" element={<Cart />} />
         </Routes>
       </Router>
      </div>
    </>
  )
}

export default App
