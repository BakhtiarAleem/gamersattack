import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ContentPlaceholder from '@/components/content-placeholder/List'

const ProfileUserInfo = ({ avatar, name, userId, placeholder }) => {
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
                    className={`card-lists profile-card last-of-type:mb-1 ${
                        placeholder ? 'animate-pulse' : ''
                    }`}
                >
                    <div className="flex">
                        {avatar && !placeholder && (
                            <div className="relative h-[30px] w-[30px] overflow-hidden rounded-full ">
                                <Image
                                    src={avatar}
                                    alt={name}
                                    layout="responsive"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        )}
                        {placeholder && (
                            <div className="h-[30px] w-[30px] rounded-full  bg-interface-600 "></div>
                        )}
                        <div className="relative w-[calc(100%-30px)] pl-2">
                            {/* Label */}
                            <h6
                                className={`mb-0 w-full overflow-hidden text-ellipsis whitespace-nowrap text-[13px] font-medium text-common-white ${
                                    placeholder
                                        ? 'font-redacted text-interface-700'
                                        : ''
                                }`}
                            >
                                {name}
                            </h6>
                            <p
                                className={`mb-0 text-[12px] text-interface-300 ${
                                    placeholder
                                        ? 'font-redacted text-interface-700'
                                        : ''
                                }`}
                            >
                                {userId}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {loading && (
                <ContentPlaceholder type="profileUserInfo" length="1" />
            )}
        </div>
    )
}

export default ProfileUserInfo
