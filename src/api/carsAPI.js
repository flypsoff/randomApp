import axios from 'axios'
import getSearchParams from '../utils/getSearchParams'

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