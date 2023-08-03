import * as Yup from 'yup'
import { otpVerification } from './messages'

export default Yup.object().shape({
    otp: Yup.string()
        .required(otpVerification.otp.required)
        .min(1, otpVerification.otp.min)
        .max(6, otpVerification.otp.max),
})
