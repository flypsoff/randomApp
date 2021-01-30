import axios from 'axios'
import getSearchParams from '../utils/getSearchParams'

import { nanoid } from 'nanoid'


const carsAPI = axios.create({
    baseURL: 'http://localhost:3333/cars'
})

export const getCarsAPI = (filter) => {
    return carsAPI.get(`?${getSearchParams(filter)}`)
}

export const getBrandsAPI = () => {
    return carsAPI.get('/brands')
}

export const getOneCarAPI = (carID) => {
    return carsAPI.get(carID)
}

export const addCarAPI = (car) => {
    let carID = nanoid(5)
    return carsAPI.post('/addcar', {car, carID}, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    })
}