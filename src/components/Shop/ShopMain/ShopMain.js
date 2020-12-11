import React from 'react'
import styles from './ShopMain.module.css'
import Item from './Item/Item'

const ShopMain = (props) => {
    return (
        <div className={styles.shopMain}>
            {props.data.map(item => (
                <Item key={item.id} url={item.url} title={item.title}/>
            ))}
        </div>
    )
}

export default ShopMain