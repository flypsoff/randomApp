import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter, useParams } from 'react-router-dom'
import { getCarsThunk, getBrandsThunk } from '../actions/shops'
import Shop from '../components/Shop/Shop'
import Preloader from '../components/commons/Preloader'

const ShopContainer = ({ loading, brands, cars, onGetCars, onGetBrands, ...props }) => {
    const { brand } = useParams()
    useEffect(() => {
        if (!brands.length) {
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
        loading ? <Preloader /> : <Shop brands={brands} cars={cars} loading={loading} />
    )
}


const mapStateToProps = (state) => ({
    brands: state.shops.brands,
    cars: state.shops.cars,
    loading: state.shops.loading,
})

const mapDispatchToProps = (dispatch) => ({
    onGetCars: (brand) => dispatch(getCarsThunk(brand)),
    onGetBrands: () => dispatch(getBrandsThunk()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShopContainer))