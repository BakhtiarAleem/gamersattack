import * as Yup from 'yup'
import { debitCard } from './messages'

export default Yup.object().shape({
    cardName: Yup.string()
        .required(debitCard.cardName.required)
        .min(1, debitCard.cardName.min)
        .max(100, debitCard.cardName.max),

    cardNumber: Yup.string()
        .required(debitCard.cardNumber.required)
        .min(16, debitCard.cardNumber.min)
        .max(16, debitCard.cardNumber.max),

    month: Yup.string()
        .required(debitCard.month.required)
        .min(1, debitCard.month.min)
        .max(2, debitCard.month.max),

    year: Yup.string()
        .required(debitCard.year.required)
        .min(4, debitCard.year.min)
        .max(4, debitCard.year.max),

    cvv: Yup.string()
        .required(debitCard.cvv.required)
        .min(3, debitCard.cvv.min)
        .max(3, debitCard.cvv.max),
})
