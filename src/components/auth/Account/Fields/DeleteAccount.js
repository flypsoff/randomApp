import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteAccountThunk } from '../../../../actions/account'
import AccountChange from '../../../commons/AccountChange/AccountChange'
import styles from './Def.module.css'

const DeleteAccount = (props) => {
    const dispatch = useDispatch()
    const [keyWord, setKeyWord] = useState('')
    const [errorMessage, setErrorMessage] = useState([])

    const clearState = () => {
        setKeyWord('')
        setErrorMessage('')
    }

    const handleClick = async () => {
        if(keyWord === 'delete') {
            const {message} = await dispatch(deleteAccountThunk())
            alert(message)
        } else {
           setErrorMessage(['Keyword is wrong'])
        }
    }

    return (
        <AccountChange act='Delete account' clearState={clearState} buttonName='Delete'>
            <label>Enter "delete" if you want delete your account</label>
            <div className={styles.form}>
                <input type='text' placeholder='...' onChange={(e) => setKeyWord(e.target.value)}/>
            </div>
            <ul style={{ color: 'darkred' }}>
                {errorMessage && errorMessage.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <button onClick={handleClick}>Submit</button>
        </AccountChange>
    )
}

export default DeleteAccount