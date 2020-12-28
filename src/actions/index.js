import * as types from './../constants'
import { getDetailAPI, getCarAPI } from './../api/api'


export const changeCurrentTodoValue = (currentValue) => ({type: types.CHANGE_CURRENT_TODO_VALUE, currentValue})
export const addTodo = (title) => ({type: types.ADD_TODO, title})
export const todoChecked = (idItem) => ({type: types.CHANGE_TODO_CHECKBOX, idItem})
export const deleteTodo = (key) => ({type: types.DELETE_TODO, key})
export const deleteAllTodo = () => ({type: types.DELETE_ALL_TODO})


export const getCars = (cars) => ({type: types.GET_CARS, cars})
export const getCarsThunk = (name = 'cars') => async (dispatch) => {
    dispatch(loadingStart())
    const { data } = await getDetailAPI(name)
    dispatch(getCars(data))
    dispatch(loadingFinish())
}

export const getBrands = (brands) => ({type: types.GET_BRANDS,  brands})
export const getBrandsThunk = () => async (dispatch) => {
    dispatch(loadingStart())
    const { data } = await getDetailAPI('brands')
    dispatch(getBrands(data))
    dispatch(loadingFinish())
}

export const getCurrentCar = (currentCar) => ({type: types.GET_CURRENT_CAR, currentCar})
export const getCurrentCarThunk = (carID) => async (dispatch) => {
    dispatch(loadingStart())
    const { data } = await getCarAPI(carID)
    dispatch(getCurrentCar(...data))
    dispatch(loadingFinish())
}

export const loadingStart = () => ({type: types.SHOP_LOADING_START})
export const loadingFinish = () => ({type: types.SHOP_LOADING_FINISH})

export const addToShoppingCart = (shoppingCart) => ({type: types.ADD_TO_SHOPPING_CART, shoppingCart})