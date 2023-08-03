import * as Yup from 'yup'
import { streaming } from './messages'

export default Yup.object().shape({
    title: Yup.string()
        .required(streaming.title.required)
        .min(1, streaming.title.min)
        .max(100, streaming.title.max),

    tags: Yup.string().required(streaming.tags.required),

    category: Yup.string().required(streaming.category.required),
})
