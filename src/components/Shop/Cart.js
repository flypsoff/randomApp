import React from 'react'
import styles from './Cart.module.css'

const Cart = ({ shoppingCart }) => {
    if (!shoppingCart.length) {
        return <h2>Your cart is empty:(</h2>
    }

    return (
        <div className={styles.cartContainer}>
            {shoppingCart.map(item => (
                <div key={item.carID} className={styles.cart}>
                    <h2>Brand: {item.brand}</h2>
                    <h3>Class : {item.class}</h3>
                    <h3>Model : {item.model}</h3>
                    <h3>Year : {item.year}</h3>
                    <h3>Price : {item.price}$</h3>
                </div>
            ))}
        </div>
    )
}

export default Cart