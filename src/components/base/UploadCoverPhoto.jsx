import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'
import styles from '@/styles/Input.module.css'

const UploadCoverPhoto = ({
    label,
    imgWidth = 160,
    imgHeight = 110,
    noSpace = false,
    horizontal,
    loading,
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

    const removeFile = (file) => () => {
        const newFiles = [...files]
        newFiles.splice(newFiles.indexOf(file), 1)
        setFiles(newFiles)
    }

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
            <span className={styles.deleteImg} onClick={removeFile(file)}>
                <i className="icon-close text-[9px]"></i>
            </span>
        </div>
    ))

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
    })

    return (
        <div
            className={`${styles.inputModule} ${
                horizontal ? styles.filePreviewAside : ''
            }`}
        >
            <div
                className={`${styles.formGroup} ${
                    noSpace ? styles.noSpace : ''
                }`}
            >
                <label className="mb-1 block text-base font-semibold text-common-white">
                    {label}
                </label>
                <div
                    className={`relative bg-theme-dark-900 ${
                        loading ? 'pointer-events-none opacity-[0.5]' : ''
                    } cursor-pointer rounded-md border border-dashed border-interface-600 py-[26px] text-center`}
                    // className={`relative cursor-pointer rounded-md border border-dashed border-interface-600 bg-theme-dark-900 py-[26px] text-center`}
                >
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p className="mb-0">
                            <i className="icon-image block text-[50px] text-interface-400"></i>
                            <span className="text-base text-primary-500">
                                Upload a file
                            </span>{' '}
                            <span className="text-base">or drag and drop</span>
                            <span className="mt-1 block text-sm mobile:px-6 mobile:text-xs">
                                PNG, JPG up to 10MB - Ideal resolution 1200 x
                                200
                            </span>
                        </p>
                    </div>
                </div>
                {thumbs && (
                    <div className={`${styles.thumnailWrapper} mb-0 mt-4`}>
                        {thumbs}
                    </div>
                )}
            </div>
        </div>
    )
}

export default UploadCoverPhoto
