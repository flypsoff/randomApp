import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, withRouter } from 'react-router-dom'
import { getCurrentCarThunk, getCurrentCarError } from '../actions'

import Car from './../components/Shop/Car'

const CarContainer = (props) => {
    const { id } = useParams()

    const getCar = async (id) => {
        try {
            await props.onGetCar(id)
        } catch (err) {
            props.onGetCurrentCarError({
                title: err.message, 
                message: `Car with id ${id} is not found`
            })
        }
    }
    useEffect(() =>  {
        getCar(id)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <Car carInfo={props.car} carError={props.error} loading={props.loading}/>
    )
}

const mapStateToProps = (state) => ({
    car: state.shops.currentCar,
    error: state.shops.currentCarError,
    loading: state.shops.loading
})

const mapDispatchToProps = (dispatch) => ({
    onGetCar: (carID) => dispatch(getCurrentCarThunk(carID)),
    onGetCurrentCarError: (error) => dispatch(getCurrentCarError(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CarContainer))