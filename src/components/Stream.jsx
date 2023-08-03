import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/base/Button'

const TopLiveStream = (props) => {
    return (
        <>
            <div
                className={`relative mb-6  ${
                    props.placeholder ? 'animate-pulse' : ''
                } ${props.hideZoomEffect ? '' : 'zoom-effect'}`}
            >
                <div className="relative mb-3 w-full overflow-hidden rounded-md bg-interface-700 shadow-thumnails">
                    {!props.placeholder && (
                        <Link href="/streamer/gaming/live/guardian">
                            <a className="absolute left-0 right-0 z-[9] h-full w-full"></a>
                        </Link>
                    )}
                    <Image
                        src={props.image}
                        alt={props.title}
                        layout="responsive"
                        width={270}
                        height={151}
                    />
                </div>
                <div className="relative flex">
                    {!props.placeholder && (
                        <Link href="/profile/id">
                            <a className="absolute left-0 right-0 z-[9] h-full w-full"></a>
                        </Link>
                    )}
                    <div
                        className={`h-[30px] w-[30px] overflow-hidden rounded-full bg-interface-700 ipad:mt-[6px] ${
                            !props.placeholder ? '' : ''
                        }`}
                    >
                        {!props.placeholder && (
                            <Image
                                src={props.profile}
                                alt={props.title}
                                layout="responsive"
                                width={30}
                                height={30}
                            />
                        )}
                    </div>
                    <div className="w-[calc(100%-30px)] pl-2">
                        <h6
                            className={`stream-title mb-0 font-semibold  ${
                                props.placeholder
                                    ? 'font-redacted text-interface-500'
                                    : 'text-common-white'
                            }`}
                        >
                            {props.title}
                        </h6>
                        <p
                            className={`stream-description text-xs  ${
                                props.placeholder
                                    ? 'font-redacted text-interface-500'
                                    : 'text-interface-400'
                            }`}
                        >
                            {props.description}
                        </p>
                    </div>
                </div>
                {/* Live */}
                {props.live && (
                    <div className="absolute top-4 right-4">
                        <Button
                            variant="live"
                            text="Live"
                            size="sm"
                            modification="w-[68px] h-[23px] rounded-md ipad:h-[23px] ipad:w-auto ipad:px-[5px] live-status"
                            uppercase
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export default TopLiveStream
