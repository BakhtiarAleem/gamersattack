import map from 'lodash/map'
import kebabCase from 'lodash/kebabCase'

import { useMemo } from 'react'
import { useFormikContext } from 'formik'

import styles from '../../styles/Input.module.css'

const SelectBox = (props) => {
    const { handleBlur, handleChange, getFieldMeta } = useFormikContext() || {}
    const { value, error, touched } = getFieldMeta
        ? getFieldMeta(props.name)
        : {}

    const id$ = useMemo(
        () => props.id || `${kebabCase(props.label)}`,
        [props.id, props.label]
    )

    const optionList = map(props.options, (option) => (
        <option
            key={option[props.valueField] || option.id}
            value={option[props.valueField]}
        >
            {option[props.textField] || option.text}
        </option>
    ))

    const selectText = props.selectText ?? 'Select'
    const disabled = props.disabled ?? false
    const defaultOption = props.defaultOption !== false

    return (
        <div className={styles.inputModule}>
            <div
                className={`${styles.formGroup} ${
                    props.noSpace ? styles.noSpace : ''
                }`}
            >
                {props.label && (
                    <label
                        htmlFor={id$}
                        className="mb-1 block text-base font-semibold text-common-white"
                    >
                        {props.label}
                    </label>
                )}
                <div className="custom-selectbox">
                    <select
                        id={id$}
                        name={props.name || props.id}
                        className={`${styles.formControl}  ${
                            styles[props.variant]
                        } appearance-none ${
                            error && touched ? styles.hasError : ''
                        } select-arrow-space`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={value}
                        disabled={disabled}
                    >
                        {defaultOption && (
                            <option value="" label={selectText} />
                        )}
                        {optionList}
                    </select>
                    <div className="icon-section absolute right-[14px] bottom-[18px]">
                        <i className="icon-down-arrow text-[8px]"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectBox
