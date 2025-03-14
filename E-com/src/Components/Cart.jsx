import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/cartSlice"; 
import "./Cart.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  return (
  <>
  <Header/>
  <NavBar/>
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-detail-button">
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p className="product-total-price">Total:₹{item.price * item.quantity}</p>                
                </div>
                <div className="cart-buttons">
                    <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                    <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                  </div>
              </div> 
            </div>
          ))}
        </div>
      )}
      <h3>Total Price: ₹{totalPrice}</h3>
      <button className="continue-shopping" onClick={() => navigate("/home")}>
        Continue Shopping
      </button>
    </div>
    <Footer/>
  </>
  );
};

export default Cart;
