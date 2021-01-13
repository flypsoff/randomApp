import React from 'react'
import { connect } from 'react-redux'

import Cart from '../components/Shop/Cart'
import { deleteWithShoppingCart } from './../actions/cart'

const CartContainer = (props) => {
    return (
        <Cart shoppingCart={props.shoppingCart} onDeleteWithShoppingCart={props.onDeleteWithShoppingCart}/>
    )
}

const mapStateToProps = (state) => ({
    shoppingCart: state.shops.shoppingCart
})

const mapDispatchToProps = (dispatch) => ({
    onDeleteWithShoppingCart: (carID) => dispatch(deleteWithShoppingCart(carID)) 
})

export default  connect(mapStateToProps, mapDispatchToProps)(CartContainer)