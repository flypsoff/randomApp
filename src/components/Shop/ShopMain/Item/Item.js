import React from 'react'
import styles from './Item.module.css'

const Item = (props) => {
    return (
        <div className={styles.itemBox}>
            <img src={props.url} alt='asd' />
            <p>{props.title}</p>
        </div>
    )
}

export default Item