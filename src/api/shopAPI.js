import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333/shop'
})

export const getCarsAPI = (brand = 'cars') => {
    return api.get(`/${brand}`)
}

export const getBrandsAPI = () => {
    return api.get('/brands')
}