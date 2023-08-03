import * as Yup from 'yup'
import { customizeChannel } from './messages'

export default Yup.object().shape({
    raptrID: Yup.string()
        .required(customizeChannel.raptrID.required)
        .min(1, customizeChannel.raptrID.min)
        .max(100, customizeChannel.raptrID.max),

    displayName: Yup.string()
        .required(customizeChannel.displayName.required)
        .min(1, customizeChannel.displayName.min)
        .max(100, customizeChannel.displayName.max),

    tags: Yup.string().required(customizeChannel.tags.required),

    shortBio: Yup.string().required(customizeChannel.shortBio.required),

    mobileNumber: Yup.string().required(customizeChannel.mobileNumber.required),

    email: Yup.string()
        .email(customizeChannel.email.invalid)
        .required(customizeChannel.email.required),
})
