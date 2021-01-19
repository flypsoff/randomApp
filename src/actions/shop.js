import {
    GET_CARS,
    GET_BRANDS
} from './../constants'

import {
    getCarsAPI,
    getBrandsAPI
} from '../api/shopAPI'

export const getCars = (payload) => ({type: GET_CARS, payload})
export const getCarsThunk = (brand) => async dispatch => {
    try {
        const res = await getCarsAPI(brand) 
        dispatch(getCars(res.data.cars))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const getBrands = (payload) => ({type: GET_BRANDS, payload})
export const getBrandsThunk = () => async dispatch => {
    try {
        const res = await getBrandsAPI()
        dispatch(getBrands(res.data.brands))
    } catch (e) {
        console.log(e.response.data.message)
    }
}
