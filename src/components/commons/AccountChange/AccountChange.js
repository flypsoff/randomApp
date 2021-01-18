import React, { useState } from 'react'
import styles from './AccountChange.module.css'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const AccountChange = ({ children, change, clearState }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpen = () => {
        setIsOpen(true)
    }

    const handleClickClose = () => {
        setIsOpen(false)
        clearState()
    }

    return (
        <div className={styles.change}>
            <button onClick={handleClickOpen}>Change</button>

            <Modal isOpen={isOpen} className={styles.changeModal} overlayClassName={styles.overlay}
                onRequestClose={handleClickClose} contentLabel="Example Modal">

                <div className={styles.mainContainer}>
                    <div className={styles.changeHeader}>
                        <h3>Change {change}</h3>
                        <button onClick={handleClickClose}>close</button>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default AccountChange