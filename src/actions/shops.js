import {
    GET_CARS,
    GET_BRANDS,
    GET_CURRENT_CAR,
    SHOP_LOADING_START,
    SHOP_LOADING_FINISH
} from './../constants'

import {
    getDetailAPI,
    getCarAPI
} from './../api/api'

export const getCars = (cars) => ({type: GET_CARS, cars})
export const getCarsThunk = (name = 'cars') => async (dispatch) => {
    dispatch(loadingStart())
    const { data } = await getDetailAPI(name)
    dispatch(getCars(data))
    dispatch(loadingFinish())
}

export const getBrands = (brands) => ({type: GET_BRANDS,  brands})
export const getBrandsThunk = () => async (dispatch) => {
    dispatch(loadingStart())
    const { data } = await getDetailAPI('brands')
    dispatch(getBrands(data))
    dispatch(loadingFinish())
}

export const getCurrentCar = (currentCar) => ({type: GET_CURRENT_CAR, currentCar})
export const getCurrentCarThunk = (carID) => async (dispatch) => {
    dispatch(loadingStart())
    const { data } = await getCarAPI(carID)
    dispatch(getCurrentCar(...data))
    dispatch(loadingFinish())
}

export const loadingStart = () => ({type: SHOP_LOADING_START})
export const loadingFinish = () => ({type: SHOP_LOADING_FINISH})