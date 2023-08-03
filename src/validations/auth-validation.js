import * as Yup from 'yup'
import { authValidation } from './messages'

export default Yup.object().shape({
    email: Yup.string()
        .email(authValidation.email.invalid)
        .required(authValidation.email.required),

    otp: Yup.string()
        .email(authValidation.otp.invalid)
        .required(authValidation.otp.required),

    raptrId: Yup.string()
        .required(authValidation.raptrId.required)
        .min(1, authValidation.raptrId.min)
        .max(100, authValidation.raptrId.max),

    displayName: Yup.string()
        .required(authValidation.displayName.required)
        .min(1, authValidation.displayName.min)
        .max(100, authValidation.displayName.max),

    mobileNumber: Yup.string().required(authValidation.mobileNumber.required),
})
