import React from 'react'
import ShopMainContainer from '../../container/ShopMainContainer'
import ShopSidebar from './ShopSidebar/ShopSidebar'
import styles from './Shop.module.css'

const Shop = () => {
    return (
        <div className={styles.shopContainer}>  
            <ShopSidebar />
            <ShopMainContainer />
        </div>
    )
}

export default Shop