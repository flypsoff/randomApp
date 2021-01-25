import React, { useState } from 'react'
import AccountChange from '../../../commons/AccountChange/AccountChange'
import styles from './Def.module.css'

const Fields = ({field, name, act, onChangeField, isLoading, buttonName}) => {
    const [state, setState] = useState('')
    const [errorMessage, setErrorMessage] = useState([])

    const handleClick = async () => {
        const res = await onChangeField(field, state)
        alert(res.message)
        if(res.errors) {
            setErrorMessage(res.errors)
        } else {
            clearState()
        }
    }

    const clearState = () => {
        setState('')
        setErrorMessage('')
    }

    return (
        <>
            <div>
                {field}: {name}
            </div>
            <AccountChange act={act} clearState={clearState} buttonName={buttonName}>
                <label>Enter new {field}:</label>
                <div className={styles.form}>
                    <input type='text' placeholder={field}
                        value={state}
                        onChange={e => setState(e.target.value)}
                    />
                </div>
                <ul style={{color: 'darkred'}}>
                {errorMessage && errorMessage.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <button onClick={handleClick} disabled={isLoading}>Submit</button>

            </AccountChange>
        </>
    )
}

export default Fields