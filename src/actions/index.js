import * as types from './../constants'
import { getDetailAPI } from './../api/api'


export const changeCurrentTodoValue = (currentValue) => ({type: types.CHANGE_CURRENT_TODO_VALUE, currentValue})
export const addTodo = (title) => ({type: types.ADD_TODO, title})
export const todoChecked = (idItem) => ({type: types.CHANGE_TODO_CHECKBOX, idItem})
export const deleteTodo = (key) => ({type: types.DELETE_TODO, key})
export const deleteAllTodo = () => ({type: types.DELETE_ALL_TODO})


export const getCars = (cars) => ({type: types.GET_CARS, cars})
export const getCarsThunk = (name = 'cars') => async (dispatch) => {
    const {data} = await getDetailAPI(name)
    dispatch(getCars(data))

}

export const getBrands = (brands) => ({type: types.GET_BRANDS,  brands})
export const getBrandsThunk = () => async (dispatch) => {
    const { data } = await getDetailAPI('brands')
    dispatch(getBrands(data))
}


