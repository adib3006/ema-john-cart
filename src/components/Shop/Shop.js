import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { grandTotal, shipping, tax, totalPrice } from '../utilities/Calculations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const clearCart = () => {
        const emptyCart = [];
        setCart(emptyCart);
    }

    const reviewCart = () => {
        alert('Thanks for shopping with us.');
    }

    const total = totalPrice(cart);
    const taxTotal = tax(total);
    const shippingTotal = shipping(cart);
    const grandTotalPrice = grandTotal(total,taxTotal,shippingTotal);

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summery</h3>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total shipping Charges: ${shippingTotal}</p>
                <p>Tax: ${taxTotal}</p>
                <h6>Grand Total: ${grandTotalPrice}</h6>
                <button onClick={clearCart} className='btn-clear'>
                    <p>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
                <button onClick={reviewCart} className='btn-review'>
                    <p>Review Order</p>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Shop;