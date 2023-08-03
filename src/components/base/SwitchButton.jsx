import { useState } from 'react'
import styles from '@/styles/Input.module.css'

const SwitchButton = ({ className, label, checked }) => {
    const [checkIn, setCheckIn] = useState(checked)
    return (
        <>
            <div className={className}>
                <label>
                    <div className={styles.switch}>
                        <input
                            type="checkbox"
                            onChange={() => setCheckIn(!checkIn)}
                            checked={checkIn}
                        />
                        <div
                            className={`${styles.slider} ${styles.round}`}
                        ></div>
                    </div>
                    <span className="ml-2 text-sm text-common-white">
                        {label}
                    </span>
                </label>
            </div>
        </>
    )
}

export default SwitchButton
