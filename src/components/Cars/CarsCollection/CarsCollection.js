import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getCarsThunk } from '../../../actions/cars'
import styles from './CarsCollection.module.css'
import queryString from 'query-string'
import getSearchParams from '../../../utils/getSearchParams'

const CarsCollection = (props) => {
    const dispatch = useDispatch()
    const cars = useSelector(state => state.cars.cars)
    const filter = useSelector(state => state.cars.filter)
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search)
        const actualFilter = { ...filter, ...parsed }
        dispatch(getCarsThunk(actualFilter))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history.location.search])

    useEffect(() => {
        history.push({
            pathname: '/cars',
            search: getSearchParams(filter)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])

    return (
        <div className={styles.carsCollectionContainer}>
            {cars && cars.map(car => (
                <div key={car.carID} className={styles.carsItem}>
                    <Link to={`/car/${car.carID}`}>
                        <img src={car.img} alt={car.brand} width='300px' height='200px' />
                    </Link>
                    <div className={styles.carsInfo}>
                        <h3>Brand: {car.brand} {car.model} ({car.carState})</h3>
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