import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getCarByIdThunk } from '../actions/cars'
import OneCar from '../components/Cars/OneCar/OneCar'

const OneCarContainer = (props) => {
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const car = useSelector(state => state.cars.currentCar)

    useEffect(() => {
        dispatch(getCarByIdThunk(pathname))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return(
        <OneCar car={car}/>
    )
}

export default OneCarContainer