
import styles from './OneCarInfo.module.css'

const OneCarInfo = ({ car }) => {
    return (
        <div className={styles.mainInfo}>
            <span><h3>Information about car</h3></span>
            <hr />
            <div className={styles.infoTitle}>
                <div className={styles.info}>Brand, model, year</div><i><b>{car.brand} {car.model} {car.year}</b></i>
            </div>
            <div className={styles.infoTitle}>
                <div className={styles.info}>Mileage</div><i><b>{car.info.mileage} miles</b></i>
            </div>
            <div className={styles.infoTitle}>
                <div className={styles.info}>Engine</div>
                <i><b>{car.info.engineCapacity}L ({car.info.hp} hp) <span className={styles.point}>•</span> {car.info.fuelType}</b></i>
            </div>
            <div className={styles.infoTitle}>
                <div className={styles.info}>Transmission</div><i><b>{car.info.transmission}</b></i>
            </div>
            <div className={styles.infoTitle}>
                <div className={styles.info}>Drive train</div><i><b>{car.info.driveTrain}</b></i>
            </div>
            <div className={styles.infoTitle}>
                <div className={styles.info}>Color</div><i><b>{car.info.color}</b></i>
            </div>
            <hr />
            <span><h3>Other information</h3></span>
            <p>{car.description}</p>
        </div>
    )
}

export default OneCarInfo