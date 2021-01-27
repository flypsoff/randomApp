import * as Yup from 'yup'

const addCarSchema = Yup.object().shape({
    brand: Yup.string('Value must be a string').trim().min(2, 'Too short').required('Required field'),
    model: Yup.string('Value must be a string').trim().min(1, 'Too short').required('Required field'),
    year: Yup.number().test(4, 'Must be exactly 4 characters', val => val ? val.toString().length === 4 : null).positive('Value must be positive').integer('Value must be integer').required('Required field'),
    price: Yup.number().positive('Value must be positive').required('Required field'),
    description: Yup.string('Value must be a string').trim().required('Required field'),
    engineCapacity: Yup.number().positive('Value must be positive').required('Required field'),
    location: Yup.string('Value must be a string').trim().required('Required field'),
    mileage: Yup.number().required('Required field'),
    hp: Yup.number().required('Required field'),
    color: Yup.string('Value must be a string').trim().required('Required field'),
    phoneNumber: Yup.number().test(9, 'Must be exactly 9 characters', val => val ? val.toString().length === 9 : null).positive('Value must be positive').integer('Value must be integer').required('Required field'),
})

export default addCarSchema