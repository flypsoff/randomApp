import React from 'react'
import CarsCollection from './CarsCollection/CarsCollection'
import Filter from './Filter/Filter'
import styles from './Cars.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cars = (props) => {
    const isAuth = useSelector(state => state.user.isAuth)
    const currentPosts = useSelector(state => state.user.currentUser.posts)

    return (
        <div>
            {(isAuth && currentPosts.length < 3)
                ?
                <div className={styles.addCarContainer}>
                    <Link to='/car/addcar'>
                        <b>You can add you own car and other people will see it. But no more than <span>THREE</span></b>
                    </Link>
                </div>
                :
                <div className={styles.addCarContainer}>
                    <b>You can post only <span>THREE</span> car</b>
                </div>
            }            

            <div className={styles.carsContainer}>
                <div className={styles.filterContainer}>
                    <Filter onFilterChanged={props.onFilterChanged} handleReset={props.handleReset} />
                </div>
                <div className={styles.carsCollectionContainer}>
                    <CarsCollection />
                </div>
            </div>
        </div>
    )
}

export default Cars