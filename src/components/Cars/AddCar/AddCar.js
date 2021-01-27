import React from 'react'
import { Formik, Form, Field } from 'formik'
import styles from './AddCar.module.css'
import addCarSchema from './addCarSchema'
import InputAddCarItem from './AddCarItem/InputAddCarItem'

const AddCar = (props) => {
    return (
        <div className={styles.addCartContainer}>

            <Formik
                initialValues={{
                    brand: '',
                    model: '',
                    carClass: '',
                    year: '',
                    price: '',
                    bodyType: '',
                    carState: '',
                    engineCapacity: '',
                    location: '',
                    mileage: '',
                    fuelType: '',
                    hp: '',
                    color: '',
                    transmission: '',
                    driveTrain: '',
                    description: '',
                    phoneNumber: '',
                }}
                onSubmit={(values) => {
                    props.handleSubmit(values)
                }}
                validationSchema={addCarSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className={styles.mainAddCar}>
                            <div className={styles.oneInfo}>
                                <InputAddCarItem
                                    name='brand'
                                    label='Brand'
                                    errors={errors}
                                    touched={touched} />
                                <InputAddCarItem
                                    name='model'
                                    label='Model'
                                    itemStyle={styles.item}
                                    errors={errors}
                                    touched={touched} />
                                <div className={styles.item}>
                                    <label>Class</label>
                                    <Field type='text' name='carClass' as='select'>
                                        <option value='A'>A</option>
                                        <option value='B'>B</option>
                                        <option value='C'>C</option>
                                        <option value='D'>D</option>
                                        <option value='E'>E</option>
                                        <option value='F'>F</option>
                                        <option value='S'>S</option>
                                    </Field>
                                </div>
                                <InputAddCarItem
                                    name='year'
                                    label='Year'
                                    errors={errors}
                                    touched={touched} />
                                <InputAddCarItem
                                    name='price'
                                    label='Price (in dollars)'
                                    errors={errors}
                                    touched={touched} />
                                <div className={styles.item}>
                                    <label>Type of body</label>
                                    <Field type='text' name='bodyType' as='select'>
                                        <option value='hatchback'>hatchback</option>
                                        <option value='sedan'>sedan</option>
                                        <option value='MUV/SUV'>MUV/SUV</option>
                                        <option value='coupe'>coupe</option>
                                        <option value='convertible'>convertible</option>
                                        <option value='wagon'>wagon</option>
                                        <option value='van'>van</option>
                                        <option value='jeep'>jeep</option>
                                    </Field>
                                </div>
                                <div className={styles.item}>
                                    <label>State of car</label>
                                    <Field type='text' name='carState' as='select'>
                                        <option value='new'>new</option>
                                        <option value='used'>used</option>
                                    </Field>
                                </div>
                                <InputAddCarItem
                                    name='description'
                                    label='Description'
                                    as='textarea' rows='5'
                                    errors={errors}
                                    touched={touched} />
                            </div>
                            <div className={styles.secondInfo}>
                                <InputAddCarItem
                                    name='engineCapacity'
                                    label='Engine capacity'
                                    errors={errors}
                                    touched={touched} />
                                <InputAddCarItem
                                    name='location'
                                    label='Car location'
                                    errors={errors}
                                    touched={touched} />
                                <InputAddCarItem
                                    name='mileage'
                                    label='Mileage'
                                    errors={errors}
                                    touched={touched} />
                                <div className={styles.item}>
                                    <label>Transmission</label>
                                    <Field type='text' name='transmission' as='select'>
                                        <option value='automatic'>Automatic</option>
                                        <option value='manual'>Manual</option>
                                        <option value='automated manual'>Automated Manual</option>
                                        <option value='continuously variable'>Continuously Variable</option>
                                    </Field>
                                </div>
                                <div className={styles.item}>
                                    <label>Fuel type</label>
                                    <Field type='text' name='fuelType' as='select'>
                                        <option value='gasoline'>gasoline</option>
                                        <option value='diesel'>diesel</option>
                                        <option value='bio-diesel'>bio-diesel</option>
                                        <option value='ethanol'>ethanol</option>
                                        <option value='electric'>electric</option>
                                        <option value='hybrid'>hybrid</option>
                                    </Field>
                                </div>
                                <InputAddCarItem
                                    name='hp'
                                    label='Horsepower'
                                    errors={errors}
                                    touched={touched} />
                                <InputAddCarItem
                                    name='color'
                                    label='Color'
                                    errors={errors}
                                    touched={touched} />
                                <div className={styles.item}>
                                    <label>State of car</label>
                                    <Field type='text' name='transmission' as='select'>
                                        <option value='manual'>manual</option>
                                        <option value='automatic'>automatic</option>
                                        <option value='CVT'>CVT</option>
                                    </Field>
                                </div>
                                <div className={styles.item}>
                                    <label>Drive train</label>
                                    <Field type='text' name='driveTrain' as='select'>
                                        <option value='all-wheel-drive'>all-wheel drive</option>
                                        <option value='four-wheel-drive'>four-wheel drive</option>
                                        <option value='front-wheel-drive'>front-wheel drive</option>
                                        <option value='rear-wheel-drive'>rear-wheel drive</option>
                                    </Field>
                                </div>
                                <InputAddCarItem
                                    name='phoneNumber'
                                    label='Phone number of seller'
                                    errors={errors}
                                    touched={touched} />
                            </div>
                        </div>
                        <button type='submit'>Submit</button>
                    </Form>)}
            </Formik>
        </div>
    )
}

export default AddCar