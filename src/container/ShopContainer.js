import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCarsThunk, getCurrentBrandThunk } from '../actions'
import Shop from '../components/Shop/Shop'


// зробити state = props.match.params.brand коли буде мінятися params.brand то ми будемо перередрювати

const ShopContainer = ({brands, cars, onGetCars, getCurrentBrandThunk, ...props}) => {

    useEffect(() => {
        if(!props.match.params.brand) {
            onGetCars()
        } else {
            getCurrentBrandThunk(props.match.params.brand)
        }

        console.log('a');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Shop brands={brands} cars={cars} getCurrentBrandThunk={getCurrentBrandThunk}/>
    )
}


const mapStateToProps = (state) => ({   
    brands: state.shops.brands,
    cars: state.shops.cars
})

const mapDispatchToProps = (dispatch) => ({
    onGetCars: () => dispatch(getCarsThunk()),
    getCurrentBrandThunk: (brand) => dispatch(getCurrentBrandThunk(brand))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShopContainer))