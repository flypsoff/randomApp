import React from 'react'
import { useSelector } from 'react-redux'
import { addCarAPI } from '../api/carsAPI'
import AddCar from '../components/Cars/AddCar/AddCar'
import LogginWarn from '../components/commons/LoginWarn/LoginWarn'

const AddCarContainer = (props) => {
    const isAuth = useSelector(state => state.user.isAuth)

    const handleSubmit = async (values) => {
        try {
            const res = await addCarAPI(values)
            alert(res.data.message)
        } catch (e) {
            console.log(e.response.data.message)
        }  
    }

    if (!isAuth) {
        return (
            <LogginWarn>
                Sorry, but if you want post your car you need to login!
            </LogginWarn>
        )
    }
    
    return (
        <AddCar handleSubmit={handleSubmit}/>
    )
}

export default AddCarContainer