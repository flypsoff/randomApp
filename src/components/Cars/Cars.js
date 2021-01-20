import React from 'react'
import CarsCollection from './CarsCollection/CarsCollection'
import Filter from './Filter/Filter'
import styles from './Cars.module.css'

const Cars = (props) => {
    return (
        <div className={styles.carsContainer}>
            <div className={styles.filterContainer}>
                <Filter onFilterChanged={props.onFilterChanged}/>
            </div>
            <div className={styles.carsCollectionContainer}>
                <CarsCollection />
            </div>
        </div>
    )
}

export default Cars