import React from 'react'
import ShopSidebar from './ShopSidebar/ShopSidebar'
import ShopMain from './ShopMain/ShopMain'
import styles from './Shop.module.css'

const Shop = () => {
    return (
        <div className={styles.shopContainer}>  
            <ShopSidebar />
            <ShopMain />
        </div>
    )
}

export default Shop