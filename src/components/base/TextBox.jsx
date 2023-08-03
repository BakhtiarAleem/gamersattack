import { useFormikContext } from 'formik'
import { useMemo } from 'react'

import kebabCase from 'lodash/kebabCase'

import styles from '@/styles/Input.module.css'

const TextBox = ({
    id,
    name,
    placeholder,
    label,
    type = 'text',
    ariaLabel,
    variant,
    defaultValue = '',
    disabled = false,
    noSpace = false,
    customCssContainer,
    customcss,
}) => {
    const { handleBlur, handleChange, getFieldMeta } = useFormikContext() || {}
    const { value, error, touched } = getFieldMeta ? getFieldMeta(name) : {}
    const id$ = useMemo(() => id || `${kebabCase(label)}`, [id, label])

    defaultValue = value === '' || value === null ? '' : value
    return (
        <div className={`${styles.inputModule} ${customCssContainer}`}>
            <div
                className={`${styles.formGroup} ${
                    noSpace ? styles.noSpace : ''
                }`}
            >
                {label && (
                    <label
                        htmlFor={id$}
                        className="mb-1 block text-base font-semibold text-common-white mobile:text-sm"
                    >
                        {label}
                    </label>
                )}

                <input
                    id={id$}
                    name={name}
                    type={type}
                    disabled={disabled}
                    className={`${styles.formControl} ${styles[variant]} ${
                        error && touched ? styles.hasError : ''
                    } ${customcss}`}
                    aria-label={ariaLabel ? ariaLabel : label}
                    placeholder={placeholder}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={value || defaultValue}
                />
            </div>
        </div>
    )
}

export default TextBox
