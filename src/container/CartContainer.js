import React from 'react'
import Cart from '../components/Shop/Cart'
import {connect} from 'react-redux'

const CartContainer = (props) => {
    return (
        <Cart shoppingCart={props.shoppingCart}/>
    )
}

const mapStateToProps = (state) => ({
    shoppingCart: state.shops.shoppingCart
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default  connect(mapStateToProps, mapDispatchToProps)(CartContainer)