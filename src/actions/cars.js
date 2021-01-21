import {
    GET_CARS,
    GET_BRANDS,
    SET_FILTER,
    RESET_FILTER
} from './../constants'

import {
    getCarsAPI,
    getBrandsAPI
} from './../api/carsAPI'

export const setFilter = (payload) => ({ type: SET_FILTER, payload})

export const getCars = (payload) => ({ type: GET_CARS, payload })
export const getCarsThunk = (filter) => async (dispatch) => {
    try {
        dispatch(setFilter(filter))
        const res = await getCarsAPI(filter)
        dispatch(getCars(res.data.cars))
    } catch (e) {
        console.log(e.response.data.message)
    }

}

export const getBrands = (payload) => ({ type: GET_BRANDS, payload })
export const getBrandsThunk = () => async (dispatch) => {
    try {
        const res = await getBrandsAPI()
        dispatch(getBrands(res.data.brands))
    } catch (e) {
        console.log(e.response.data.message)
    }

}

export const resetFilter = (payload) => ({ type: RESET_FILTER, payload})
