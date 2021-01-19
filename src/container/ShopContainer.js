import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getCarsThunk, getBrandsThunk } from '../actions/shop'
import Shop from '../components/Shop/Shop'

const ShopContainer = ({ onGetCars, onGetBrands, onGetCurrentBrand, ...props }) => {
    const brandParam = useParams()
    
    
    useEffect(() => {
        onGetBrands()
        onGetCars(brandParam.brand)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [brandParam.brand])

    return (
        <Shop {...props} brandParam={brandParam.brand}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
    cars: state.shop.cars,
    brands: state.shop.brands
})

const mapDispatchToProps = (dispatch) => ({
    onGetCars: (brand) => dispatch(getCarsThunk(brand)),
    onGetBrands: () => dispatch(getBrandsThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer)