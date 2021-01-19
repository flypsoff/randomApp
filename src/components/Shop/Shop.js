import React from 'react'
import Filter from './Filter/Filter'
import Cars from './Cars/Cars'

import styles from './Shop.module.css'

const Shop = ({ isAuth, cars, brands, brandParam }) => {

    return (
        <>
            { isAuth && 
                <div className={styles.pannel}>
                    Cart
                </div>
            }


            <div className={styles.shopContainer}>


                <div className={styles.brandsContainer} >
                    <Filter brands={brands} brandParam={brandParam}/>
                </div>
                <div className={styles.carsContainer} >
                    <Cars cars={cars} />
                </div>
            </div>
        </>
    )
}

export default Shop