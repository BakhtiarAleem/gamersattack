import * as Yup from 'yup'
import { zindigiWallet } from './messages'

export default Yup.object().shape({
    registerMobile: Yup.string()
        .required(zindigiWallet.registerMobile.required)
        .min(1, zindigiWallet.registerMobile.min)
        .max(12, zindigiWallet.registerMobile.max),
    otp: Yup.string()
        .required(zindigiWallet.otp.required)
        .min(1, zindigiWallet.otp.min)
        .max(6, zindigiWallet.otp.max),
})
