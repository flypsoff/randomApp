import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams, withRouter } from 'react-router-dom'
import { getCurrentCarThunk } from '../actions/shops'
import { addToShoppingCart } from '../actions/cart'

import Car from './../components/Shop/Car'

const CarContainer = ({ car, loading, shoppingCart, onGetCar, onGetToShoppingCart, shoppingCartId }) => {
    const { id } = useParams()

    const [error, setError] = useState({title: '', message: ''})

    const [inCart, setInCart] = useState('')

    const getCar = async (id) => {
        try {
            await onGetCar(id)
        } catch (error) { // need delete error
            console.log(error);
            setError({
                title: error.message,
                message: `Car with id ${id} is not found`
            })
        }
    }

    useEffect(() => {
        getCar(id)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const addToCart = (car) => {
        if(!shoppingCartId.includes(car.carID)) {
            onGetToShoppingCart(car)
        } else {
            setInCart('This car is already in your cart')
        }
    }

    return (
        <Car carInfo={car} carError={error} loading={loading} addToCart={addToCart} inCart={inCart}/>
    )
}

const mapStateToProps = (state) => ({
    car: state.shops.currentCar,
    loading: state.shops.loading,
    shoppingCart: state.shops.shoppingCart,
    shoppingCartId: state.shops.shoppingCartId
})

const mapDispatchToProps = (dispatch) => ({
    onGetCar: (carID) => dispatch(getCurrentCarThunk(carID)),
    onGetToShoppingCart: (shoppingCart) => dispatch(addToShoppingCart(shoppingCart))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CarContainer))