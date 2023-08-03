import { useFormikContext } from 'formik'
import styles from '@/styles/CheckBox.module.css'

const CheckBox = ({ id, name, label, defaultValue = true }) => {
    const { handleChange, getFieldMeta } = useFormikContext() || {}
    const { value } = getFieldMeta ? getFieldMeta(name) : {}
    return (
        <div>
            <label htmlFor={id} className={styles.checkBox}>
                <input
                    id={id}
                    name={name}
                    type="checkbox"
                    onChange={handleChange}
                    value={defaultValue}
                    checked={value}
                />
                <span className={styles.checkmark}>
                    <i className="icon-check"></i>
                </span>
                <span className="text-sm font-normal text-common-white">
                    {label}
                </span>
            </label>
        </div>
    )
}

export default CheckBox
