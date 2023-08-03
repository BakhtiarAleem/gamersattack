import Link from 'next/link'
import { useFormikContext } from 'formik'
import Loader from '@/components/base/Loader'
import Image from 'next/image'
import styles from '@/styles/Button.module.css'

const Button = (props) => {
    const { isSubmitting: loading } = useFormikContext() || {}

    const disabled = props.disabled || loading

    return (
        <button
            className={`btn ${styles.btn} ${styles[props.size]} 
    ${props.modification ? props.modification : 'w-auto px-5'} ${
                styles[props.variant]
            } ${styles[props.size]} ${
                disabled || (loading && props.type !== 'submit')
                    ? styles.disabled
                    : ''
            } ${
                (props.loading || loading) &&
                (props.type === 'submit' || props.type === 'button')
                    ? styles.loading
                    : ''
            }`}
            disabled={disabled}
            type={props.type ? props.type : 'submit'}
            onClick={props.click}
            id={props.id}
        >
            <div
                className={`icon-position flex items-center justify-center ${
                    styles.iconPosition
                } ${
                    styles[props.textModification]
                        ? styles[props.textModification]
                        : ''
                } ${styles[props.position]}`}
            >
                {props.icon && (
                    <i
                        className={`${`icon-` + props.icon} ${
                            props.iconStyle ? props.iconStyle : 'mr-2 text-base'
                        }`}
                    ></i>
                )}
                <span
                    className={`${styles.labelText} ${props.labelColor} ${
                        props.semiBold ? 'font-semibold' : 'font-medium'
                    } ${props.labelSize} ${props.uppercase ? 'uppercase' : ''}`}
                >
                    {props.text}
                </span>
                {props.image && (
                    <span className={`${'ml-4'} ${props.imageModification}`}>
                        <Image
                            src={props.image}
                            alt={props.text}
                            layout="fixed"
                            width={props.imageWidth ? props.imageWidth : 24}
                            height={props.imageHeight ? props.imageHeight : 24}
                        />
                    </span>
                )}
            </div>
            <Loader />
            {props.link && (
                <>
                    <Link href={props.link}>
                        <a
                            className={`absolute top-0 left-0 right-0 z-10 h-full w-full ${props.className}`}
                        ></a>
                    </Link>
                </>
            )}
        </button>
    )
}

export default Button
