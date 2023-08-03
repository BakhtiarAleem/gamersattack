import { useState, useMemo } from 'react'
import { useFormikContext } from 'formik'
import DatePicker from 'react-datepicker'
import kebabCase from 'lodash/kebabCase'

import 'react-datepicker/dist/react-datepicker.css'
import styles from '@/styles/Input.module.css'

const Datepicker = ({
    id,
    name,
    label,
    noSpace = false,
    isDisabledPicker = false,
    placeholder = 'MM / DD / YYYY',
    format = 'MMM d, yyyy',
    showTimeInput,
    showTimeSelect,
    currentDateTime,
    defaultValue = '',
}) => {
    const { handleBlur, getFieldMeta } = useFormikContext() || {}
    const { value, error } = getFieldMeta ? getFieldMeta(name) : {}
    const id$ = useMemo(() => id || `${kebabCase(label)}`, [id, label])

    defaultValue = value === '' || value === null ? '' : value
    const [startDate, setStartDate] = useState()

    return (
        <div
            className={`${styles.inputModule} ${styles.DatePicker} ${
                isDisabledPicker ? 'disabled-timepicker' : ''
            } custom-date-time customize-data-time-picker`}
        >
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
                    className={`relative ${styles.formControl} ${
                        error ? styles.hasError : ''
                    } `}
                >
                    <DatePicker
                        selected={currentDateTime ? currentDateTime : startDate}
                        showYearDropdown
                        yearDropdownItemNumber={4}
                        placeholderText={placeholder}
                        showFourColumnMonthYearPicker
                        onChange={(date) => setStartDate(date)}
                        dateFormat={format}
                        showTimeInput={showTimeInput}
                        showTimeSelect={showTimeSelect}
                        onBlur={handleBlur}
                        disabled={isDisabledPicker}
                        value={value || defaultValue}
                    />
                    <div className="icon-section pointer-events-none absolute right-[11px] bottom-[14px]">
                        <i className="icon-calendar text-lg text-common-white"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Datepicker
