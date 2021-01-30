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
                                        <option value=''>Select class</option>
                                        <option value='A'>A</option>
                                        <option value='B'>B</option>
                                        <option value='C'>C</option>
                                        <option value='D'>D</option>
                                        <option value='E'>E</option>
                                        <option value='F'>F</option>
                                        <option value='S'>S</option>
                                    </Field>
                                {errors.carClass && touched.carClass ? <div style={{color: 'darkred'}}>{errors.carClass}</div> : null}
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
                                        <option value=''>Select type</option>
                                        <option value='hatchback'>hatchback</option>
                                        <option value='sedan'>sedan</option>
                                        <option value='MUV/SUV'>MUV/SUV</option>
                                        <option value='coupe'>coupe</option>
                                        <option value='convertible'>convertible</option>
                                        <option value='wagon'>wagon</option>
                                        <option value='van'>van</option>
                                        <option value='jeep'>jeep</option>
                                    </Field>
                                    {errors.bodyType && touched.bodyType ? <div style={{color: 'darkred'}}>{errors.bodyType}</div> : null}
                                </div>
                                <div className={styles.item}>
                                    <label>State of car</label>
                                    <Field type='text' name='carState' as='select'>
                                        <option value=''>Select state</option>
                                        <option value='new'>new</option>
                                        <option value='used'>used</option>
                                    </Field>
                                    {errors.carState && touched.carState ? <div style={{color: 'darkred'}}>{errors.carState}</div> : null}
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
                                        <option value=''>Select transmission</option>
                                        <option value='automatic'>Automatic</option>
                                        <option value='manual'>Manual</option>
                                        <option value='automated manual'>Automated Manual</option>
                                        <option value='continuously variable'>Continuously Variable</option>
                                    </Field>
                                    {errors.transmission && touched.transmission ? <div style={{color: 'darkred'}}>{errors.transmission}</div> : null}
                                </div>
                                <div className={styles.item}>
                                    <label>Fuel type</label>
                                    <Field type='text' name='fuelType' as='select'>
                                        <option value=''>Select fuel</option>
                                        <option value='gasoline'>gasoline</option>
                                        <option value='diesel'>diesel</option>
                                        <option value='bio-diesel'>bio-diesel</option>
                                        <option value='ethanol'>ethanol</option>
                                        <option value='electric'>electric</option>
                                        <option value='hybrid'>hybrid</option>
                                    </Field>
                                    {errors.fuelType && touched.fuelType ? <div style={{color: 'darkred'}}>{errors.fuelType}</div> : null}
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
                                    <label>Drive train</label>
                                    <Field type='text' name='driveTrain' as='select'>
                                        <option value=''>Select drive train</option>
                                        <option value='all-wheel-drive'>all-wheel drive</option>
                                        <option value='four-wheel-drive'>four-wheel drive</option>
                                        <option value='front-wheel-drive'>front-wheel drive</option>
                                        <option value='rear-wheel-drive'>rear-wheel drive</option>
                                    </Field>
                                    {errors.driveTrain && touched.driveTrain ? <div style={{color: 'darkred'}}>{errors.driveTrain}</div> : null}
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