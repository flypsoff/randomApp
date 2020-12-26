import React from 'react'
import ShopSidebar from './ShopSidebar/ShopSidebar'
import ShopMain from './ShopMain/ShopMain'
import styles from './Shop.module.css'

const Shop = (props) => {
    return (
        <div className={styles.shopContainer}>  
            <ShopSidebar brands={props.brands} />
            <ShopMain cars={props.cars} />
        </div>
    )
}

export default Shop