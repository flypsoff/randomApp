import React from 'react'
import styles from './Cars.module.css'

const Cars = ({ cars }) => {

    return (
        <div className={styles.carsContainer}>
            {cars && cars.map(car => (
                <div key={car.carID} className={styles.car}>
                    <img src={car.img} alt={car.brand} width='150px' />
                    <div className={styles.carInfo}>
                        <h3>{car.brand}</h3>
                        <h4>{car.model}</h4>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Cars