import * as types from './../constants'
import { getCarsAPI } from './../api/api'


export const changeCurrentTodoValue = (currentValue) => ({type: types.CHANGE_CURRENT_TODO_VALUE, currentValue})
export const addTodo = (title) => ({type: types.ADD_TODO, title})
export const todoChecked = (idItem) => ({type: types.CHANGE_TODO_CHECKBOX, idItem})
export const deleteTodo = (key) => ({type: types.DELETE_TODO, key})
export const deleteAllTodo = () => ({type: types.DELETE_ALL_TODO})


export const getCarsThunk = () => async (dispatch) => {
    const { data } = await getCarsAPI()
    const { brands, cars } = data
    dispatch(getCarsAndBrands(cars, brands))
}

export const getCarsAndBrands = (cars, brands) => ({type: types.GET_CARS_BRANDS, cars, brands})

export const getCurrentBrandThunk = (brand) => async (dispatch) => {
    dispatch(getCarsThunk())
    let {data} = await getCarsAPI(`/${brand}`)
    console.log(data);
    dispatch(getCurrentBrand(data))
}

export const getCurrentBrand = (cars) => ({type: types.GET_CURRENT_BRAND, cars})

