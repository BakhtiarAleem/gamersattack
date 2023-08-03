import { useMemo } from 'react'
import { useFormikContext } from 'formik'
import { kebabCase } from 'lodash/kebabCase'

import styles from '@/styles/Input.module.css'

const TextArea = ({
    id,
    name,
    rows,
    label,
    ariaLabel,
    placeholder,
    defaultValue = '',
    noSpace = false,
}) => {
    const { handleBlur, handleChange, getFieldMeta } = useFormikContext() || {}
    const { value, error, touched } = getFieldMeta ? getFieldMeta(name) : {}
    const id$ = useMemo(() => id || `${kebabCase(label)}`, [id, label])

    return (
        <div className={styles.inputModule}>
            <div
                className={`${styles.formGroup} ${
                    noSpace ? styles.noSpace : ''
                }`}
            >
                {label && (
                    <label
                        htmlFor={id$}
                        className="mb-1 block text-base font-semibold text-common-white"
                    >
                        {label}
                    </label>
                )}
                <textarea
                    id={id$}
                    name={name}
                    className={`${styles.formControl} ${
                        error && touched ? styles.hasError : ''
                    }`}
                    aria-label={ariaLabel ? ariaLabel : label}
                    rows={rows ? rows : 3}
                    placeholder={placeholder}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={value || defaultValue}
                />
            </div>
        </div>
    )
}

export default TextArea
