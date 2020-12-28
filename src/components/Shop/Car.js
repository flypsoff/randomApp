import React from 'react'
import NotFound from '../commons/NotFound'
import Preloader from '../commons/Preloader'

const Car = ({ carInfo, carError, loading, addToCart, inCart }) => {
    
    if (carError.message) {
        return (
            <NotFound>
                <h3 style={{ color: 'red' }}>{carError.title}</h3>
                <h2>{carError.message}</h2>
            </NotFound>
        )
    }

    if (loading) {
        return <Preloader />
    }

    const handleClick = () => {
        addToCart(carInfo)
    }

    return (
        <div>
            <div>
                <h2>Brand: {carInfo.brand}</h2>
                <h3>Class : {carInfo.class}</h3>
                <h3>Model : {carInfo.model}</h3>
                <h3>Year : {carInfo.year}</h3>
                <h3>Price : {carInfo.price}$</h3>
            </div>
            <button onClick={handleClick}>Add to cart</button>
            <div style={{color: 'red'}}>
                <span>{inCart}</span>
            </div>
        </div>
    )
}

export default Car