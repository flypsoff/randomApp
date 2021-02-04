import React, { useEffect, useState } from "react"
import styles from './Account.module.css'
import Security from "./Security/Security"
import FullnameField from "./Fields/FullnameField"
import getDate from '../../../utils/getDate'
import Fields from "./Fields/Fields"
import DeleteAccount from "./Fields/DeleteAccount"
import { Link } from "react-router-dom"

const Account = ({ handleDelete, handleLogout, onChangeField, onChangeEmail, onChangePassword, isLoading, user }) => {
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
                <DeleteAccount />
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.mainPosts}>
                    {user.posts.length > 0 ? user.posts.map(item => (
                        <div key={item.carID} className={styles.postContainer}>
                            <div className={styles.post}>
                                <div><h4>{item.brand}</h4></div>
                                <div><h4>{item.model}</h4></div>
                                <div><h4>{item.price}$</h4></div>
                                <div><Link to={`/car/${item.carID}`}>see car</Link></div>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(item.carID)}>Delete</button>
                            </div>
                        </div>
                        
                    ))
                    : <div><b>You don't have posts</b></div>}
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
                            isLoading={isLoading} />
                    </div>
                    <div className={styles.item}>
                        <Fields
                            buttonName='Change'
                            field='surname'
                            act='Change surname'
                            name={user.surname}
                            onChangeField={onChangeField}
                            isLoading={isLoading} />
                    </div>
                    <div className={styles.item}>
                        <Fields
                            buttonName='Change'
                            field='country'
                            act='Change country'
                            name={user.country}
                            onChangeField={onChangeField}
                            isLoading={isLoading} />
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