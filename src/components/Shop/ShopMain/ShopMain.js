import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ShopMain.module.css'

const ShopMain = (props) => {
    return (
        <div className={styles.shopMain}>
            {props.cars.map((item) => (
                <div className={styles.item} key={item.carID}>
                    <Link to={`/car/${item.carID}`}>
                        <h3>{item.brand}</h3>
                    </Link>
                    <p>Model: {item.model}</p>
                    <p>Class: {item.class}</p>
                    <p>Price: {item.price}$</p>
                </div>
            ))}
        </div>
    )
}

export default ShopMain