import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ShopMain from './../components/Shop/ShopMain/ShopMain'
import { getItems } from '../actions'


const ShopMainContainer = (props) => {
    // have a warning if we use props.getItems(1, 10)
    useEffect(() => {
        const items = props.getItems
        items(1, 10)
    }, [props.getItems])

    return (
        <ShopMain {...props.items} getItems={props.getItems}/>
    )
}

const mapStateToProps = (state) => ({   
    items: state.shops.items
})

const mapDispatchToProps = (dispatch) => ({
    getItems: () => dispatch(getItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopMainContainer)