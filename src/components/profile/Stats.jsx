import React, { useState, useEffect } from 'react'
import ContentPlaceholder from '@/components/content-placeholder/List'

const Stats = ({ title, numbers, placeholder }) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => setLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div>
            {!loading && (
                <div
                    className={`default-card mb-6 h-[88px] bg-theme-dark-100 p-4 mobile:h-auto ${
                        placeholder ? 'animate-pulse' : ''
                    }`}
                >
                    <div>
                        <p
                            className={`mb-1 block text-sm text-interface-300 ${
                                placeholder
                                    ? 'font-redacted text-interface-700'
                                    : ''
                            }`}
                        >
                            {title}
                        </p>
                        <h2
                            className={`font-acumin-bold mb-0 text-2xl text-common-white ${
                                placeholder
                                    ? 'font-redacted text-interface-700'
                                    : ''
                            }`}
                        >
                            {numbers}
                        </h2>
                    </div>
                </div>
            )}
            {loading && <ContentPlaceholder type="stats" length="1" />}
        </div>
    )
}

export default Stats
