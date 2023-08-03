import Button from '@/components/base/Button'
import Link from 'next/link'
const LiveStreamingInfo = (props) => {
    return (
        <div className="px-6 mobile:px-4">
            <div className="w-full border-b border-interface-700 py-6">
                <div className="flex mobile:flex-col">
                    <div className="flex w-full">
                        <div className="relative mr-3 h-16 w-16 flex-shrink-0">
                            <div
                                className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-cover ${
                                    props.live
                                        ? 'border-2 border-danger-700'
                                        : ''
                                }`}
                                style={{
                                    backgroundImage:
                                        `url("` + props.profileImage + `")`,
                                }}
                            ></div>
                            {props.live && (
                                <div className="absolute left-[7px] -bottom-[6px] w-[47px] overflow-hidden rounded-md bg-danger-700 px-2 text-center">
                                    <p className="mb-0 text-sm">LIVE</p>
                                </div>
                            )}
                            <Link href="/profile/1">
                                <a className="absolute top-0 left-0 right-0 h-full w-full"></a>
                            </Link>
                        </div>
                        <div className="relative w-full">
                            {/* Details */}
                            <div>
                                <h3 className="mb-[3px] text-lg">
                                    {props.title}
                                </h3>
                                <h4 className="mb-[3px] text-sm">
                                    {props.description}
                                </h4>
                                <Link href={'#' + props.gameStreaming}>
                                    <a className="text-sea-500">
                                        {props.gameStreaming}
                                    </a>
                                </Link>
                            </div>
                            {/* Actions */}
                            <div className="absolute top-0 right-0 flex w-auto flex-col lg:relative lg:mt-2 lg:w-full">
                                <div className="mb-5 flex w-full mobile:mt-2 ">
                                    <Button
                                        variant="secondary"
                                        text="Share"
                                        size="sm"
                                        icon="share"
                                        iconStyle="mr-2 text-lg"
                                    />
                                    <Button
                                        variant="primary"
                                        text="Follow"
                                        size="sm"
                                        icon="rating"
                                        modification="ml-[12px] w-auto px-4"
                                    />
                                </div>
                                <div className="flex w-full justify-end xl:justify-start">
                                    <p className="mr-1 text-sm">
                                        {props.viewers} Viewers
                                    </p>
                                    <i className="icon-person text-base"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveStreamingInfo
