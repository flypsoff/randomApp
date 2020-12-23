import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ShopSidebar.module.css'

const ShopSidebar = (props) => {
    return (
        <div className={styles.shopSidebar}>
            <div>
                {props.brands.map(item => (
                    <div className={styles.item} key={item.id}>
                        <Link
                            to={`/shop/${item.name.toLowerCase()}`}
                            onClick={async () => {
                               props.getCurrentBrandThunk(item.name.toLowerCase())
                            }}>
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default ShopSidebar