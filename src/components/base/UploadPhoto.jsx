import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'
import Button from '@/components/base/Button'
import styles from '@/styles/Input.module.css'

const UploadPhoto = ({
    placeholder = 'Change',
    label,
    imgWidth = 36,
    imgHeight = 36,
    noSpace = false,
}) => {
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': [],
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            )
        },
    })

    const thumbs = files.map((file) => (
        <div key={file.name} className={styles.thumnail}>
            <Image
                alt=""
                src={file.preview}
                width={imgWidth}
                height={imgHeight}
                // Revoke data uri after image is loaded
                onLoad={() => {
                    URL.revokeObjectURL(file.preview)
                }}
                className={styles.thumbnailimage}
            />
        </div>
    ))

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
    })

    return (
        <div className={`${styles.inputModule}`}>
            <div
                className={`${styles.formGroup} ${
                    noSpace ? styles.noSpace : ''
                }`}
            >
                {label && (
                    <label className="mb-1 block text-base font-semibold text-common-white">
                        {label}
                    </label>
                )}
                <div className="flex">
                    <div className={styles.bgPlaceholder}>
                        <div className={styles.thumnailWrapper}>{thumbs}</div>
                    </div>
                    <div className={`relative ml-5`}>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Button
                                text={placeholder}
                                type="button"
                                variant="primary"
                                size="sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPhoto
