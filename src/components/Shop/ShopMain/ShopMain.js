import React from 'react'
import styles from './ShopMain.module.css'

const ShopMain = (props) => {
    return (
        <div className={styles.shopMain}>
           {props.cars.map((item) => (
               <div className={styles.item} key={item.carID}>
                   <h3>{item.brand}</h3>
                   <p>Model: {item.model}</p>
                   <p>Class: {item.class}</p>
                   <p>Price: {item.price}$</p>
                </div>
           ))}
        </div>
    )
}

export default ShopMain