import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/base/Button'
import SwitchButton from '@/components/base/SwitchButton'
import ViewChatPopover from '@/components/popovers/ViewChat'

const StreamingCenter = (props) => {
    const [popoverType, setPopoverType] = useState(null)

    return (
        <>
            <div
                className={`relative grid grid-cols-5 gap-6 md:block md:w-full  ${
                    props.placeholder ? 'animate-pulse' : ''
                }`}
            >
                <div className="relative col-span-2 w-full overflow-hidden rounded-md bg-interface-700 shadow-thumnails">
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

                    {/* Live */}
                    {props.live && (
                        <div className="absolute top-4 right-4">
                            <Button
                                variant="live"
                                text="Live"
                                size="sm"
                                modification="w-[68px] h-[23px] p-0 rounded-md"
                                uppercase
                            />
                        </div>
                    )}
                </div>
                <div className="col-span-3 ">
                    <div className="relative flex md:mt-5">
                        {!props.placeholder && (
                            <Link href="/profile/id">
                                <a className="absolute left-0 right-0 z-[9] h-full w-full"></a>
                            </Link>
                        )}
                        <div
                            className={`h-[30px] w-[30px] overflow-hidden rounded-full bg-interface-700 ${
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
                            <h5
                                className={`mb-0 font-semibold ipad:text-lg  mobile:text-base  ${
                                    props.placeholder
                                        ? 'font-redacted text-interface-500'
                                        : 'text-common-white'
                                }`}
                            >
                                {props.title}
                            </h5>
                            <p
                                className={`text-xs ipad:text-base ipad:text-sm  ${
                                    props.placeholder
                                        ? 'font-redacted text-interface-500'
                                        : 'text-interface-400'
                                }`}
                            >
                                {props.description}
                            </p>
                        </div>
                    </div>
                    <div className="border-b border-interface-700 pb-6"></div>
                    <div className="flex justify-between border-b border-interface-700 pt-3">
                        <h6>Chat</h6>
                        <div>
                            <SwitchButton
                                className="absolute right-0"
                                label="On"
                                checked={true}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between border-b border-interface-700 pt-3">
                        <h6>Allow only followers to chat</h6>
                        <div>
                            <SwitchButton
                                className="absolute right-0"
                                label="Off"
                                checked={false}
                            />
                        </div>
                    </div>
                    <div className="relative flex justify-between pt-3 mobile:grid mobile:w-full mobile:grid-cols-1">
                        <div className="flex gap-[10px] mobile:grid mobile:grid-cols-1">
                            <Button
                                variant="light-gray"
                                text="Start Streaming"
                                icon="streaming"
                                size="sm"
                                modification="pl-3 pr-4"
                                click={props.startStreaming}
                            />
                            <Button
                                variant="primary"
                                text="View Chat"
                                icon="chat"
                                size="sm"
                                modification="pl-3 pr-4"
                                click={() => setPopoverType('sticker')}
                            />
                        </div>
                        <div className="mobile:mt-3 mobile:grid mobile:grid-cols-1">
                            <Button
                                variant="live"
                                text="Stop Streaming"
                                icon="minus-circle"
                                size="sm"
                                modification="pl-3 pr-4"
                                link="/streamer/gaming/live/guardian"
                            />
                        </div>
                    </div>

                    <div className="z-50">
                        {popoverType === 'sticker' && (
                            <ViewChatPopover close={() => setPopoverType()} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default StreamingCenter
