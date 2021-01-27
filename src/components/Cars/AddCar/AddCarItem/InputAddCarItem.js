import React from 'react'
import { Field } from 'formik'
import styles from '../AddCar.module.css'

const InputAddCarItem = ({name, label, errors, touched, as, rows}) => {
    return (
        <div className={styles.item}>
            <label>{label}</label>
            <Field name={name} as={as} rows={rows}/>
            {errors[name] && touched[name] ? <div style={{color: 'darkred'}}>{errors[name]}</div> : null}
        </div>
    )
}

export default InputAddCarItem