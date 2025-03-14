import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../Data/product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './ProductList.css';
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';

const ProductList =() =>{

    const{category, subcategory} = useParams();
    const dispatch = useDispatch();

    const fliteredProducts = products.filter(
        (product) => 
        product.category.toLowerCase() === category.toLowerCase() && 
        product.subcategory.toLowerCase() === subcategory.toLowerCase()
    );
    return(
        <>
            <div className='product-list'>
            <Header />
            <NavBar />
            <h2>{subcategory} {category}</h2>
                 <div className='products'>
                    {fliteredProducts.length > 0 ? (
                        fliteredProducts.map((product) =>(
                            <div key = {product.id} className='product-card'>
                                <img src={product.image} alt={product.name} className="product-image"/>
                                <h3>{product.name}</h3>
                                <p className="rating">⭐ {product.rating} / 5</p>
                                <p className='price'>₹{product.price}<span className='offer'>({product.offer}% off)</span></p>
                                <button onClick={()=>{
                                    dispatch(addToCart(product)); 
                                    alert(`${product.name} added to cart!`);
                                }} className='add-to-cart'>Add to Cart</button>
                            </div>
                        ))
                     ) : (
                            <p>No products found.</p>
                        )
                    }
                 </div>
                 <Footer />
            </div>
        </>
    );
}

export default ProductList;