import { useRouter } from 'next/router'
import Button from '@/components/base/Button'
import { Menu } from '@headlessui/react'

const StreamerSession = (props) => {
    const router = useRouter()
    const avatar = '/storage/profile-image/1.png'
    return (
        <div className="ipad:items-center mobile:flex">
            <div className="mt-[2px] inline-block align-top ipad:hidden">
                <Button
                    click={() => router.push('/streaming-center')}
                    variant="primary"
                    text="Streaming Center"
                    size="sm"
                    icon="lightning-bolt"
                    modification="px-3"
                />
            </div>
            <i
                onClick={() => router.push('/streaming-center')}
                className="icon-lightning-bolt relative top-0 ml-3 hidden cursor-pointer text-2xl hover:text-primary-500 ipad:top-[-5px] ipad:inline-block mobile:top-[1px]"
            ></i>
            <div className="relative ml-4 inline-block cursor-pointer align-super">
                <i className="icon-notification text-[23px]"></i>
                <div className="absolute top-0 -right-[5px] rounded-full bg-danger-600 px-1 text-xs">
                    2
                </div>
            </div>

            <div className="relative ml-5 inline-block">
                <Menu as="div" className="relative inline-block">
                    <Menu.Button className="dropdown-button items-center">
                        <div
                            style={{
                                backgroundImage: `url("` + avatar + `")`,
                            }}
                            className="h-9 w-9 overflow-hidden rounded-full bg-cover"
                        ></div>
                    </Menu.Button>
                    <Menu.Items className="dropdown-menu -right[15px] top-[34px] flex w-[168px] flex-col">
                        <Menu.Item>
                            <Button
                                variant="link"
                                type="button"
                                text="View Profile"
                                icon="avatar"
                                size="link-xs"
                                modification="dropdown-link  font-light"
                                click={() => router.push('/streamer/index')}
                            />
                        </Menu.Item>
                        <Menu.Item>
                            <Button
                                variant="link"
                                type="button"
                                text="Sign out"
                                icon="exit"
                                size="link-xs"
                                modification="dropdown-link  font-light"
                                click={() => router.push('/')}
                            />
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </div>
        </div>
    )
}

export default StreamerSession
