import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import ChannelListing from '@/components/channel/Listing'
import styles from '@/styles/Sidebar.module.css'

const followChannel = [
    {
        name: 'FOLLOWED CHANNELS',
        list: [
            {
                image: '/storage/profile/15.png',
                name: 'PJ Hayat Gaming',
                description: 'PUBGM',
                views: '10.3K',
                liveUrl: '/streamer/predator/live/guardian?online=true',
            },
            {
                image: '/storage/profile/14.png',
                name: 'Mr Jay Plays',
                description: 'Free Fire',
                views: '12.6K',
                liveUrl: '/streamer/pikachu/live/guardian?online=true',
            },
        ],
    },
    {
        name: 'RECOMMENDED CHANNELS',
        list: [
            {
                image: '/storage/profile/1.jpg',
                name: 'Predator',
                description: 'PUBGM',
                views: '24.5K',
                liveUrl: '/streamer/predator/live/guardian',
            },
            {
                image: '/storage/profile/2.jpg',
                name: 'Dr Pikachu',
                description: 'League of Legends',
                views: '18.6K',
                liveUrl: '/streamer/pikachu/live/guardian',
            },
            {
                image: '/storage/profile/3.jpg',
                name: 'Ryz3n',
                description: 'World of Warcraft',
                views: '15.4K',
                liveUrl: '/streamer/ryz3n/live/guardian',
            },
            {
                image: '/storage/profile/4.jpg',
                name: 'Ragnar',
                description: 'Dota 2',
                views: '13.1K',
                liveUrl: '/streamer/ragnar/live/guardian',
            },
            {
                image: '/storage/profile/5.jpg',
                name: 'Merciless Medic',
                description: 'Super People',
                views: '12.5K',
                liveUrl: '/streamer/merciless/live/guardian',
            },
            {
                image: '/storage/profile/6.jpg',
                name: 'Star Anonymous',
                description: 'Path of Exile',
                views: '10.6K',
                liveUrl: '/streamer/star/live/guardian',
            },
            {
                image: '/storage/profile/7.jpg',
                name: 'Asma Rahoo',
                description: 'Roblox',
                views: '10.3K',
                liveUrl: '/streamer/asma/live/guardian',
            },
            {
                image: '/storage/profile/8.jpg',
                name: 'Gaming With K',
                description: 'Fifa 22',
                views: '9.6K',
                liveUrl: '/streamer/gaming/live/guardian',
            },
            {
                image: '/storage/profile/9.jpg',
                name: 'Ducky Extra',
                description: 'Resident Evil 8',
                views: '7.9K',
                liveUrl: '/streamer/ducky/live/guardian',
            },
            {
                image: '/storage/profile/10.jpg',
                name: 'Funta Kids',
                description: 'Fortnite',
                views: '6.5K',
                liveUrl: '/streamer/funta/live/guardian',
            },
        ],
    },
]
const recommendedChannel = [
    {
        name: 'RECOMMENDED CHANNELS',
        list: [
            {
                image: '/storage/profile/1.jpg',
                name: 'Predator',
                description: 'PUBGM',
                views: '24.5K',
                liveUrl: '/streamer/predator/live/guardian',
            },
            {
                image: '/storage/profile/2.jpg',
                name: 'Dr Pikachu',
                description: 'League of Legends',
                views: '18.6K',
                liveUrl: '/streamer/pikachu/live/guardian',
            },
            {
                image: '/storage/profile/3.jpg',
                name: 'Ryz3n',
                description: 'World of Warcraft',
                views: '15.4K',
                liveUrl: '/streamer/ryz3n/live/guardian',
            },
            {
                image: '/storage/profile/4.jpg',
                name: 'Ragnar',
                description: 'Dota 2',
                views: '13.1K',
                liveUrl: '/streamer/ragnar/live/guardian',
            },
            {
                image: '/storage/profile/5.jpg',
                name: 'Merciless Medic',
                description: 'Super People',
                views: '12.5K',
                liveUrl: '/streamer/merciless/live/guardian',
            },
            {
                image: '/storage/profile/6.jpg',
                name: 'Star Anonymous',
                description: 'Path of Exile',
                views: '10.6K',
                liveUrl: '/streamer/star/live/guardian',
            },
            {
                image: '/storage/profile/7.jpg',
                name: 'Asma Rahoo',
                description: 'Roblox',
                views: '10.3K',
                liveUrl: '/streamer/asma/live/guardian',
            },
            {
                image: '/storage/profile/8.jpg',
                name: 'Gaming With K',
                description: 'Fifa 22',
                views: '9.6K',
                liveUrl: '/streamer/gaming/live/guardian',
            },
            {
                image: '/storage/profile/9.jpg',
                name: 'Ducky Extra',
                description: 'Resident Evil 8',
                views: '7.9K',
                liveUrl: '/streamer/ducky/live/guardian',
            },
            {
                image: '/storage/profile/10.jpg',
                name: 'Funta Kids',
                description: 'Fortnite',
                views: '6.5K',
                liveUrl: '/streamer/funta/live/guardian',
            },
        ],
    },
]

const SideBar = (props) => {
    const [expandSidebar, setExpandSidebar] = useState(false)

    useEffect(() => {
        sidebarClick()
    })
    const tabletQuery = useMediaQuery(
        { maxWidth: 820 } // `device` prop
    )

    const sidebarClick = () => {
        if (tabletQuery) {
            if (props.sidebarClick === true) {
                setExpandSidebar(true)
            }
            if (props.sidebarClick === false) {
                setExpandSidebar(false)
            }
        }
    }

    return (
        <div
            className={`${styles.sidebarContainer} ${
                expandSidebar ? styles.expand : ''
            }`}
        >
            <div
                className={`${styles.sidebar} ${
                    expandSidebar ? styles.expand : ''
                }`}
            >
                <div
                    className={`relative flex items-center ipad:hidden ipad:h-[60px] mobile:inline-block mobile:w-full ${
                        expandSidebar ? 'h-[40px]' : ''
                    }`}
                >
                    <h4
                        className={`${
                            expandSidebar ? 'mobile:flex' : 'mobile:hidden'
                        } hidden h-full items-center pl-4 font-theme uppercase mobile:mb-0`}
                    >
                        Channels
                    </h4>
                    <div
                        className={`absolute right-[-5px] top-4 ml-auto flex w-auto min-w-[64px] cursor-pointer items-center justify-center text-sm text-common-white mobile:hidden ${
                            expandSidebar ? 'top-6 rotate-180' : ''
                        }`}
                        onClick={() => {
                            setExpandSidebar(!expandSidebar)
                        }}
                    >
                        <i className="icon-collapse"></i>
                    </div>
                    <div
                        className={`absolute right-[-5px] top-4 ml-auto flex w-auto min-w-[64px] cursor-pointer items-center justify-center text-sm text-common-white ${
                            expandSidebar ? 'top-6 rotate-180' : ''
                        }`}
                        onClick={props.sidebarClose}
                    >
                        <i className="icon-close hidden mobile:block"></i>
                    </div>
                </div>
                <ChannelListing
                    listing={props.online ? followChannel : recommendedChannel}
                    expand={expandSidebar}
                    channelClick={props.sidebarClose}
                />
            </div>
        </div>
    )
}

export default SideBar
