import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarsThunk, resetFilter } from '../actions/cars'
import Cars from '../components/Cars/Cars'

const CarsContainer = (props) => {
    const dispatch = useDispatch()
    const onFilterChanged = (filter) => {
        dispatch(getCarsThunk(filter))
    }

    const filterRef = useRef(useSelector(state => state.cars.filter))
    const defaultFilter = filterRef.current

    const handleReset = () => {
        dispatch(resetFilter(defaultFilter))
    }

    return (
        <Cars onFilterChanged={onFilterChanged} handleReset={handleReset} />
    )
}

export default CarsContainer