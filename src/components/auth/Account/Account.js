import React, { useEffect, useState } from "react"
import styles from './Account.module.css'
import Security from "./Security/Security"
import FullnameField from "./Fields/FullnameField"
import getDate from '../../../utils/getDate'
import Fields from "./Fields/Fields"
import DeleteAccount from "./Fields/DeleteAccount"

const Account = ({ handleLogout, onChangeField, onChangeEmail, onChangePassword, isLoading, user }) => {
    const [date, setDate] = useState(NaN)

    useEffect(() => {
        const age = getDate(user.birthday)
        setDate(age)
    }, [user.birthday])

    return (
        <div className={styles.mainContainer}>
            <div className={styles.account}>
                Account
                <button onClick={handleLogout}>Logout</button>
                <div>
                    Delete account:
                <DeleteAccount/>
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.data}>
                    <div className={styles.item}>
                        <FullnameField name={user.name} surname={user.surname} date={date} />
                    </div>
                    <div className={styles.item}>
                        <Fields 
                            buttonName='Change'
                            field='name' 
                            act='Change name'
                            name={user.name} 
                            onChangeField={onChangeField} 
                            isLoading={isLoading}/>
                    </div>
                    <div className={styles.item}>
                        <Fields 
                            buttonName='Change'
                            field='surname' 
                            act='Change surname'
                            name={user.surname} 
                            onChangeField={onChangeField} 
                            isLoading={isLoading}/>
                    </div>
                    <div className={styles.item}>
                        <Fields 
                            buttonName='Change'
                            field='country' 
                            act='Change country'
                            name={user.country} 
                            onChangeField={onChangeField} 
                            isLoading={isLoading}/>
                    </div>
                    <div className={styles.item}>
                        birthday: {user.birthday}
                    </div>
                </div>

                <Security 
                    email={user.email} 
                    onChangeEmailField={onChangeEmail} 
                    onChangePasswordField={onChangePassword} 
                    handleLogout={handleLogout}
                    isLoading={isLoading}
                    />

            </div>
        </div>
    )
}

export default Account