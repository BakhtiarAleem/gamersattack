import React, { useMemo } from 'react'
import kebabCase from 'lodash/kebabCase'
import { useFormikContext } from 'formik'
import PhoneInput from 'react-phone-number-input'

import 'react-phone-number-input/style.css'
import styles from '@/styles/Input.module.css'

const PhoneNumberField = ({
    id,
    name,
    label,
    noSpace = false,
    size,
    disabled = false,
    placeholder = 'Enter date',
    defaultValue = '',
}) => {
    const { handleBlur, getFieldMeta, setFieldValue } = useFormikContext() || {}

    const { value, error, touched } = getFieldMeta ? getFieldMeta(name) : {}
    const id$ = useMemo(() => id || `${kebabCase(label)}`, [id, label])

    return (
        <div className={`${styles.inputModule} ${styles.DatePicker}`}>
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
                <div
                    className={`relative  ${styles.formControl} ${
                        error && touched ? styles.hasError : ''
                    } ${styles[size]}`}
                >
                    <PhoneInput
                        id={id$}
                        name={name}
                        placeholder={placeholder}
                        value={value || defaultValue}
                        onChange={(eValue) => setFieldValue(name, eValue || '')}
                        disabled={disabled}
                        onBlur={handleBlur}
                    />
                </div>
            </div>
        </div>
    )
}

export default PhoneNumberField
