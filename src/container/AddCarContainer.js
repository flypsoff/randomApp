import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../actions/account'
import { addCarAPI } from '../api/carsAPI'
import AddCar from '../components/Cars/AddCar/AddCar'
import LogginWarn from '../components/commons/LoginWarn/LoginWarn'

const AddCarContainer = (props) => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    const handleSubmit = async (values) => {
        try {
            const res = await addCarAPI(values)
            dispatch(addPost(res.data.post))
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