import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter, useParams } from 'react-router-dom'
import { getCarsThunk, getBrandsThunk } from '../actions'
import Shop from '../components/Shop/Shop'


const ShopContainer = ({ brands, cars, onGetCars, onGetBrands, ...props }) => {

    const { brand } = useParams()

    const [ /* state */ , setState] = useState(brand)

    useEffect(() => {
        setState(brand)
        if(!brands.length) {
            onGetBrands()
        }

        if (!brand) {
            onGetCars()
        } else {
            onGetCars(brand)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [brand])


    return (
        <Shop brands={brands} cars={cars} />
    )
}


const mapStateToProps = (state) => ({
    brands: state.shops.brands,
    cars: state.shops.cars
})

const mapDispatchToProps = (dispatch) => ({
    onGetCars: (brand) => dispatch(getCarsThunk(brand)),
    onGetBrands: () => dispatch(getBrandsThunk()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShopContainer))