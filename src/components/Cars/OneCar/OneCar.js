import React from 'react'
import styles from './OneCar.module.css'
import OneCarInfo from './OneCarInfo/OneCarInfo';

const OneCar = ({ car }) => {
    return (
        <>
            {car &&
                <div className={styles.carContainer}>
                    <div>
                        <span className={styles.shortInfo}>{car.brand} {car.model} {car.year} {car.carState}</span>
                    </div>

                    <div className={styles.carMain}>
                        <img src={car.img} alt={car.brand} />
                        <div className={styles.carOwner}>
                            <div>
                                <h3>Seller name:</h3> {car.info.owner}
                            </div>
                            <div>
                                <h3>Phone number:</h3> {car.info.phoneNumber}
                            </div>
                            <div>
                                <h3>Car location:</h3> {car.info.location}
                            </div>
                            <div>
                                <h3>Price:</h3>
                                {car.price} <b>$</b> ({Math.round(car.price * 0.82)} <b>{'\u20AC'}</b>)
                            </div>
                        </div>
                    </div>
                   <OneCarInfo car={car}/>
                </div>}
        </>
    )
}

export default OneCar