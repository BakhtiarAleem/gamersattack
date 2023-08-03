import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BaseLogo from '@/components/Logo'
import SearchBox from '@/components/base/SearchBox'
import GuestSession from '@/components/session/Guest'
import ViewerSession from '@/components/session/Viewer'
import StreamerSession from '@/components/session/Streamer'
import styles from '@/styles/Header.module.css'

const Header = (props) => {
    const router = useRouter()
    const [session, setSession] = useState(1)

    const myProfile = () => {
        router.push(' /my-profile')
    }
    const streamingSignup = () => {
        router.push('/my-profile/streamer-sign-up')
    }
    useEffect(() => {
        sessionSetup()
    })
    const sessionSetup = () => {
        if (
            router.pathname === '/my-profile' ||
            router.pathname === '/my-profile/customize-channel'
        ) {
            setSession(2)
        } else if (
            router.pathname === '/my-profile/streamer-sign-up' ||
            router.pathname === '/my-profile/streamer-sign-up-completed' ||
            router.pathname === '/streamer/[streamingslug]' ||
            router.pathname === '/streaming-center'
        ) {
            setSession(3)
        } else {
            setSession(1)
        }
    }
    const [mobileSearchField, setMobileSearchField] = useState(false)

    return (
        <div className={styles.header}>
            <div>
                <div className={`ipad:flex ${styles.sidebarLogo}`}>
                    <div className="hidden ipad:flex ipad:items-center ipad:justify-center ipad:pr-3 ipad:text-base">
                        <i
                            onClick={props.sidebarOpen}
                            className="icon-collapse"
                        ></i>
                    </div>
                    <div className="ml-[-8px] inline-block w-[160px] ipad:ml-0 mobile:mt-[-5px] mobile:ml-[-5px] mobile:w-[110px]">
                        <BaseLogo
                            width={163}
                            height={46}
                            className="mobile:inline-block"
                        />
                    </div>
                </div>
            </div>
            <div className="ipad:blocks ml-4 inline-block rounded-md border border-interface-700 ipad:border-none">
                <Link href="/browse">
                    <a className="block p-[7px] px-3 font-semibold text-common-white hover:text-primary-500 mobile:px-1">
                        <i className="icon-hamburger relative top-0.5 mr-2"></i>
                        <span className="ipad:hidden">Browse</span>
                    </a>
                </Link>
            </div>
            <div
                className={`mobile: m-auto flex md:w-[350px] mobile:absolute mobile:top-[51px] mobile:left-0 mobile:w-full mobile:border-t mobile:border-theme-dark-900 mobile:bg-theme-dark-500 mobile:p-[10px] ${
                    mobileSearchField ? '' : 'mobile:hidden'
                }`}
            >
                <div className={`w-[464px] ipad:w-full`}>
                    <SearchBox placeholder="Search" variant="light" />
                </div>
            </div>
            {/* Search field mobile icon only */}
            <div className={` ipad:mr-0 ipad:ml-auto`}>
                <div
                    className="mt-1 mr-4 hidden cursor-pointer text-right mobile:mr-1 mobile:block"
                    onClick={() => setMobileSearchField(!mobileSearchField)}
                >
                    <i className="icon-search text-xl text-common-white hover:text-primary-500"></i>
                </div>
            </div>
            <div className="mobile:top-10 mobile:right-0 mobile:mr-0">
                {session === 1 && <GuestSession click={props.login} />}
                {session === 2 && (
                    <ViewerSession
                        streamingSignup={streamingSignup}
                        myProfile={myProfile}
                    />
                )}
                {session === 3 && <StreamerSession />}
            </div>
        </div>
    )
}
export default Header
