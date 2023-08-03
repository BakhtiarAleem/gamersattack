import React from 'react'
import Image from 'next/image'

const NoRecordFound = ({
    title,
    imgWidth,
    imgHeight,
    description,
    customCss,
}) => {
    return (
        <div className="mb-5 flex h-full w-full flex-col items-center justify-center">
            <div
                className={`mx-auto  -mb-[11px] ${
                    imgWidth ? imgWidth : 'w-[110px]'
                } ${customCss} ${imgHeight ? imgHeight : 'h-auto'}`}
            >
                <Image
                    src="/not-found.svg"
                    alt={process.env.NEXT_PUBLIC_APP_NAME}
                    layout="responsive"
                    width={180}
                    height={184}
                />
            </div>

            <div className="mx-auto w-[360px] mobile:w-[300px]">
                <h4 className="font-acumin-bold mt-3 mb-2 text-center text-lg text-common-white">
                    {title ? title : 'No data available.'}
                </h4>
                <p className="mb-0 text-center text-interface-300">
                    {description
                        ? description
                        : 'There is no data available currently.'}
                </p>
            </div>
        </div>
    )
}

export default NoRecordFound
