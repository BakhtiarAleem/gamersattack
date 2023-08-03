import * as Yup from 'yup'
import { contact } from './messages'

export default Yup.object().shape({
    firstName: Yup.string()
        .required(contact.firstName.required)
        .min(1, contact.firstName.min)
        .max(100, contact.firstName.max),

    lastName: Yup.string()
        .required(contact.lastName.required)
        .min(1, contact.lastName.min)
        .max(100, contact.lastName.max),

    email: Yup.string()
        .email(contact.email.invalid)
        .required(contact.email.required),

    phoneNumber: Yup.string()
        .required(contact.phoneNumber.required)
        .min(1, contact.phoneNumber.min)
        .max(100, contact.phoneNumber.max),

    company: Yup.string()
        .required(contact.company.required)
        .min(1, contact.company.min)
        .max(100, contact.company.max),

    country: Yup.string().required(),

    message: Yup.string().required(contact.message.required),
})
