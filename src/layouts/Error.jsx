import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Error.module.css'

const Error = (props) => {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 h-full w-full">
                <div className={styles.mapPosition}>
                    <div className="-mt-[100px] h-[524px] w-[673px] opacity-30">
                        <Image
                            src="/storage/logo.png"
                            alt={process.env.NEXT_PUBLIC_APP_NAME}
                            width={673}
                            height={524}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.errorPage}>
                    <div className={styles.inner}>
                        <div className="relative">{props.children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error
