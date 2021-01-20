import axios from 'axios'

const carsAPI = axios.create({
    baseURL: 'http://localhost:3333/cars'
})

export const getCarsAPI = ({brand, bodyType, carClass, fromYear, toYear, fromPrice, toPrice}) => {
    return carsAPI.get(
        `?brand=${brand}&bodyType=${bodyType}&carClass=${carClass}&fromYear=${fromYear}
        &toYear=${toYear}&fromPrice=${fromPrice}&toPrice=${toPrice}`
        )
}

export const getBrandsAPI = () => {
    return carsAPI.get('/brands')
}

//brand, bodyType, carClass, fromYear, toYear, fromPrice, toPrice