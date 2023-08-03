import * as Yup from 'yup'
import { streamerSignUp } from './messages'

export default Yup.object().shape({
    firstName: Yup.string()
        .required(streamerSignUp.firstName.required)
        .min(1, streamerSignUp.firstName.min)
        .max(100, streamerSignUp.firstName.max),

    lastName: Yup.string()
        .required(streamerSignUp.lastName.required)
        .min(1, streamerSignUp.lastName.min)
        .max(100, streamerSignUp.lastName.max),

    gender: Yup.string().required(streamerSignUp.gender.required),

    dateOfBirth: Yup.string().required(streamerSignUp.dateOfBirth.required),

    cnicNumber: Yup.string().required(streamerSignUp.cnicNumber.required),

    mobileNumber: Yup.string().required(streamerSignUp.mobileNumber.required),

    email: Yup.string()
        .email(streamerSignUp.email.invalid)
        .required(streamerSignUp.email.required),
})
