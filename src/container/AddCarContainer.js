import React from 'react'
import AddCar from '../components/Cars/AddCar/AddCar'

const AddCarContainer = (props) => {

    const handleSubmit = (values) => {
        console.log(values)
    }
    
    return (
        <AddCar handleSubmit={handleSubmit}/>
    )
}

export default AddCarContainer