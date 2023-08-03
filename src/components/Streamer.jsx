import Link from 'next/link'
import Button from '@/components/base/Button'
import Image from 'next/image'

const ProfileLink = () => {
    return (
        <Link href="/profile/1">
            <a className="absolute left-0 right-0 top-0 z-[9] h-full w-full"></a>
        </Link>
    )
}
const TopStream = (props) => {
    return (
        <>
            <div
                className={`relative mb-6  ${
                    props.horizontalData
                        ? 'flex mobile:flex-row mobile:items-center'
                        : ''
                } ${props.hideZoomEffect ? '' : 'zoom-effect'}`}
            >
                <div
                    className={`relative w-full overflow-hidden rounded-md bg-interface-700 shadow-thumnails  ${
                        props.horizontalData
                            ? 'mb-0 h-[99px] w-[99px] mobile:mr-3 mobile:h-[135px] mobile:w-[135px] mobile:flex-shrink-0'
                            : 'mb-2'
                    }`}
                >
                    <Image
                        src={props.image}
                        alt={props.title}
                        layout="responsive"
                        width={123}
                        height={123}
                    />
                    {!props.placeholder && <ProfileLink />}
                </div>
                <div
                    className={`moible:align-left mobile:mt-2 mobile:w-full mobile:pl-0 ${
                        props.horizontalData
                            ? 'w-[calc(100%-99px)] pl-3 mobile:mt-0'
                            : ''
                    }`}
                >
                    <h6
                        className={`relative mb-0.5  font-semibold ${
                            props.horizontalData ? 'text-base' : ''
                        } ${
                            props.placeholder
                                ? 'font-redacted text-interface-500'
                                : 'text-common-white'
                        }`}
                    >
                        {props.title}
                        <ProfileLink />
                    </h6>
                    <p
                        className={`relative text-sm ${
                            props.placeholder
                                ? 'font-redacted text-interface-500'
                                : 'text-interface-400 '
                        }`}
                    >
                        {props.followers}
                        <ProfileLink />
                    </p>
                    {props.horizontalData && (
                        <div className="absolute bottom-0 mobile:relative mobile:mt-2">
                            {!props.placeholder && (
                                <Button
                                    variant="primary"
                                    text="Follow"
                                    icon="rating"
                                    size="sm"
                                />
                            )}
                            {props.placeholder && (
                                <div className="h-9 w-24 rounded-lg bg-interface-500"></div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default TopStream
