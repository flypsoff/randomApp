import React from 'react'
import { useDispatch } from 'react-redux'
import { getCarsThunk } from '../actions/cars'
import Cars from '../components/Cars/Cars'

const CarsContainer = (props) => {
    const dispatch = useDispatch()
    const onFilterChanged = (filter) => {
        dispatch(getCarsThunk(filter))
    }

    return (
        <Cars onFilterChanged={onFilterChanged}/>
    )
}

export default CarsContainer