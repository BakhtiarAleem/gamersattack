import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import kebabCase from 'lodash/kebabCase'
import { useFormikContext } from 'formik'

const CustomSelect = ({
    id,
    name,
    label,
    selectProps,
    options,
    placeholder,
    selected,
    menuIsOpen,
    isMulti,
}) => {
    const { getFieldMeta, setFieldValue } = useFormikContext() || {}
    const { error, touched } = getFieldMeta ? getFieldMeta(name) : {}
    const id$ = useMemo(() => id || `${kebabCase(label)}`, [id, label])
    const [selectedValue, setSelectedValue] = useState(null)

    const handleChange = (value) => {
        if (value?.length) {
            setFieldValue(name, value)
        } else {
            setFieldValue(name, value?.id)
        }
        setSelectedValue(value)
    }

    return (
        <div>
            {label && (
                <label
                    htmlFor={id$}
                    className="mb-1 block text-base font-semibold text-common-white"
                >
                    {label}
                </label>
            )}
            <div
                className={`default-react-select relative ${
                    error && touched ? 'isHasError' : ''
                }  ${isMulti ? 'multiSelect' : ''}`}
            >
                <Select
                    id={id$}
                    name={name}
                    {...selectProps}
                    onChange={handleChange}
                    options={options}
                    isClearable={true}
                    isMulti
                    isOpen
                    value={selectedValue}
                    placeholder={placeholder}
                    defaultValue={options[selected]}
                    menuIsOpen={menuIsOpen}
                    className={`${error && touched ? 'isHasError' : ''}`}
                />
                <i className="icon-down-arrow pointer-events-none absolute right-[14px] bottom-[20px] text-[7px]" />
            </div>
        </div>
    )
}

export default CustomSelect
