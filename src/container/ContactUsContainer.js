import { useState } from 'react'
import { reset } from 'redux-form'
import { postContactUsAPI } from '../api/api'
import ContactUs from '../components/ContactUs/ContactUs'

const ContactUsContainer = (props) => {
    const [state, setState] = useState(null)

    const handleContactUs = async (value, dispatch) => {
        let result
    
        try {
            result = await postContactUsAPI('posts', value)
            result = result.data.id
            setState(result)
            dispatch(reset('contactUs'))
        } catch (err) {
            console.log(err.name + ": " + err.message)
        }

    }

    const handleReset = (resetValue) => {
        resetValue()
        setState(null)
    }

    return (
        <ContactUs onSubmit={handleContactUs} state={state} handleReset={handleReset}/>
    )
}

export default ContactUsContainer