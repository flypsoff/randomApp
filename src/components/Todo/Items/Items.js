import React from 'react'
import styles from './Items.module.css'

const Items = ({todos, isAuth}) => {

    return (
        <div>
            {isAuth && todos && todos.map((item) => (
                <div className={styles.itemsContainer} 
                    key={item.id}>
                    <span style={item.completed ? {textDecoration:'line-through'} : {textDecoration:'none'}}>
                        {item.title}
                    </span>
                    <button >Complete</button>
                </div>
            ))}
        </div>
    )
}

export default Items