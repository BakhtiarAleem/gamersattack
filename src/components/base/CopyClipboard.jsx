import React, { useRef, useState } from 'react'
import styles from '@/styles/Input.module.css'

const CopyClipboard = (props) => {
    const [btnVariant, setBtnVariant] = useState('bg-interface-700')
    const [copyText, setCopyText] = useState('Copy')
    const textAreaRef = useRef(null)

    const copyToClipboard = (event) => {
        textAreaRef.current.select()
        document.execCommand('copy')
        setCopyText('Copied!')
        event.target.focus()
        setBtnVariant('bg-primary-500')
        const timer = setTimeout(() => {
            setBtnVariant('bg-interface-700')
            setCopyText('Copy')
        }, 3000)
        return () => clearTimeout(timer)
    }
    return (
        <div
            className={`${styles.formGroup} ${
                props.noSpace ? styles.noSpace : ''
            }`}
        >
            {props.label && (
                <label className="mb-1 block text-base font-semibold text-common-white">
                    {props.label}
                </label>
            )}
            <div
                className={`relative flex h-[46px] items-center overflow-hidden rounded-md border border-interface-600 bg-interface-800 px-3 pr-0 pb-[4px] text-base text-common-white placeholder:text-interface-400 focus:border-interface-300 focus:shadow-none focus:outline-none ${props.width}`}
            >
                <div className="absolute top-0 right-0 overflow-hidden">
                    <button
                        onClick={copyToClipboard}
                        type="button"
                        className={`flex h-[44px] w-[100px] items-center justify-center p-4 text-base font-semibold text-common-white shadow-md transition-all ${btnVariant}`}
                    >
                        <i className="icon-clipboard mr-2 text-lg" />
                        <span>{copyText}</span>
                    </button>
                </div>

                <textarea
                    ref={textAreaRef}
                    value={props.value}
                    className="-z-10 opacity-0 outline-none"
                />
                <p className="absolute top-[10px] mb-0 w-[calc(100%-140px)] overflow-hidden whitespace-nowrap">
                    <span>{props.value}</span>
                </p>
            </div>
        </div>
    )
}
export default CopyClipboard
