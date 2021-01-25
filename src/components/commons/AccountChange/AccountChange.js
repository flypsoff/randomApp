import React, { useState } from 'react'
import styles from './AccountChange.module.css'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const AccountChange = ({ children, act, clearState, buttonName }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpen = () => {
        setIsOpen(true)
    }

    const handleClickClose = () => {
        setIsOpen(false)
        clearState()
    }

    return (
        <div className={buttonName === 'Delete' ? '' : styles.change}>
            <button onClick={handleClickOpen}>{buttonName}</button>

            <Modal isOpen={isOpen} className={styles.changeModal} overlayClassName={styles.overlay}
                onRequestClose={handleClickClose} contentLabel="Example Modal">

                <div className={styles.mainContainer}>
                    <div className={styles.changeHeader}>
                        <h3>{act}</h3>
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