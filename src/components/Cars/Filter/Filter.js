import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field, } from 'formik'
import { getBrandsThunk } from '../../../actions/cars'
import styles from './Filter.module.css'

const Filter = (props) => {
    const dispatch = useDispatch()
    const brands = useSelector(state => state.cars.brands)
    const filter = useSelector(state => state.cars.filter)
    
    useEffect(() => {
        dispatch(getBrandsThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={styles.fixed}>
            <Formik
                enableReinitialize
                initialValues={{
                    ...filter,
                    brand: filter.brand.toLowerCase()
                }}
                onSubmit={(value, { setSubmitting }) => {
                    props.onFilterChanged(value)
                    setSubmitting(false)
                }}>
                {({ isSubmitting  }) =>
                    <Form className={styles.filterContainer}>
                        <div>
                            <label><b>Brand</b></label><br />
                            <div>
                                <Field name='brand' as='select' placeholder='brand'>
                                    <option value='' label='all cars'></option>
                                    {brands && brands.map(item => (
                                        <option key={item} value={item} label={item}></option>
                                    ))}
                                </Field>
                            </div>
                        </div>
                        <div>
                            <label><b>Class</b></label><br />
                            <div>
                                <Field name='carClass' as='select' placeholder='class'>
                                    <option value='' label='all classes'></option>
                                    <option value='C' label='C'></option>
                                    <option value='E' label='E'></option>
                                    <option value='S' label='S'></option>
                                </Field>
                            </div>
                        </div>
                        <div>
                            <label><b>Body type</b></label><br />
                            <div>
                                <Field name='bodyType' as='select' placeholder='body type'>
                                    <option value='' label='all body types'></option>
                                    <option value='sedan' label='sedan'></option>
                                    <option value='coupe' label='coupe'></option>
                                    <option value='wagon' label='wagon'></option>
                                    <option value='crossover' label='crossover'></option>
                                </Field>
                            </div>
                        </div>
                        <div>
                            <label><b>Car state</b></label><br />
                            <div>
                                <Field name='carState' as='select' placeholder='state'>
                                    <option value='' label='all states'></option>
                                    <option value='new' label='new'></option>
                                    <option value='used' label='used'></option>
                                </Field>
                            </div>
                        </div>
                        <div >
                            <label><b>Year</b></label><br />
                            <div className={styles.inputs} >
                                <Field type='number' name='fromYear' placeholder='from' className={styles.firstInput} min='1'/>
                                <Field type='number' name='toYear' placeholder='to' min='1' />
                            </div>
                        </div>
                        <div >
                            <label><b>Price</b></label><br />
                            <div className={styles.inputs}>
                                <Field type='number' name='fromPrice' placeholder='from' className={styles.firstInput} min='1' />
                                <Field type='number' name='toPrice' placeholder='to' min='1' />
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button type="submit" disabled={isSubmitting}>Submit</button>
                            <button type="reset" onClick={() => props.handleReset()}>Reset</button>
                        </div>
                    </Form>
                    }
            </Formik>
        </div>
    )
}

export default Filter