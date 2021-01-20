import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarsThunk } from '../../../actions/cars'
import styles from './CarsCollection.module.css'

const CarsCollection = (props) => {
    const dispatch = useDispatch()
    const cars = useSelector(state => state.cars.cars)
    const filter = useSelector(state => state.cars.filter)

    useEffect(() => {
        dispatch(getCarsThunk(filter))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <div className={styles.carsCollectionContainer}>
            {cars && cars.map(car => (
                <div key={car.carID} className={styles.carsItem}>
                    <img src={car.img} alt={car.brand} width='200px' height='150px'/>
                    <div className={styles.carsInfo}>
                        <h3>Brand: {car.brand} {car.model}</h3>
                        <h4>Class: {car.class}</h4>
                        <h4>Year: {car.year}</h4>
                        <h4>Body type: {car.bodyType}</h4>
                        <h4>Price: {car.price}$</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CarsCollection