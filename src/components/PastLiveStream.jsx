import React from 'react'

import Table from '@/components/base/Table'

const PastLiveStream = () => {
    const columns = [
        {
            name: ' Live Stream',
            minWidth: '280px',
            cell: (row) => (
                <div className="flex cursor-pointer items-center">
                    <div className="w-[clac(100%-24px)]">
                        {row.streamName}
                        <div className="text-sm text-interface-400">
                            {row.date} {row.time}
                        </div>
                    </div>
                </div>
            ),
        },

        {
            name: 'Viewers',
            minWidth: '100px',
            wrap: 'true',
            selector: (row) => (
                <div className="rounded-3xl bg-interface-700 px-5 py-[2px] text-sm">
                    {row.followers}
                </div>
            ),
        },
        {
            name: 'Messages',
            minWidth: '100px',
            wrap: 'true',
            selector: (row) => (
                <div className="rounded-3xl bg-interface-700 px-5 py-[2px] text-sm">
                    {row.viewers}
                </div>
            ),
        },
        {
            name: 'Tip (PKR)',
            minWidth: '100px',
            wrap: 'true',
            selector: (row) => (
                <div className="rounded-3xl bg-interface-700 px-5 py-[2px] text-sm">
                    {row.tips}
                </div>
            ),
        },
    ]
    const data = [
        {
            avatar: '/storage/streamers/1.jpg',
            streamName: 'Chill Live Stream until we..',
            date: 'Sep 10, 2022',
            time: '10:45 PM',
            followers: '32.5K',
            viewers: '105K',
            tips: '60.5K',
        },
        {
            avatar: '/storage/streamers/2.jpg',
            streamName: 'When People Use Valorant..',
            date: 'Sep 8, 2022',
            time: '6:30 PM',
            followers: '25.3K',
            viewers: '87K',
            tips: '43.3K',
        },
        {
            avatar: '/storage/streamers/3.jpg',
            streamName: 'Vandal but with NO recoil',
            date: 'Sep 8, 2022',
            time: ' 7:45 PM',
            followers: '24.2K',
            viewers: '65K',
            tips: '39.6K',
        },
        {
            avatar: '/storage/streamers/4.jpg',
            streamName: 'Infinite Ability Hide & Seek..',
            date: 'Sep 7, 2022',
            time: ' 4:05 PM',
            followers: '24.2K',
            viewers: '65K',
            tips: '39.6K',
        },
        {
            avatar: '/storage/streamers/5.jpg',
            streamName: "Pakistan's Best Valorant..",
            date: 'Sep 6, 2022',
            time: ' 6:30 PM',
            followers: '24.2K',
            viewers: '65K',
            tips: '39.6K',
        },
        {
            avatar: '/storage/streamers/6.jpg',
            streamName: 'Raven Phantom Assassin',
            date: 'Sep 6, 2022',
            time: ' 10:00 PM',
            followers: '24.2K',
            viewers: '65K',
            tips: '39.6K',
        },
        {
            avatar: '/storage/streamers/7.jpg',
            streamName: 'Ancients League S2',
            date: 'Sep 5, 2022',
            time: ' 9:30 PM',
            followers: '24.2K',
            viewers: '65K',
            tips: '39.6K',
        },
        {
            avatar: '/storage/streamers/8.jpg',
            streamName: 'Ultras Dota Pro League Sea..',
            date: 'Sep 4, 2022 ',
            time: '8:75 PM',
            followers: '24.2K',
            viewers: '65K',
            tips: '39.6K',
        },
        {
            avatar: '/storage/streamers/9.jpg',
            streamName: 'Lucky Crate Opening',
            date: 'Sep 4, 2022',
            time: ' 7:30 PM',
            followers: '24.2K',
            viewers: '65K',
            tips: '39.6K',
        },
        {
            avatar: '/storage/streamers/10.jpg',
            streamName: 'Valorant Ranked | Live PK',
            date: 'Sep 3, 2022',
            time: ' 6:20 PM',
            followers: '24.2K',
            viewers: '65K',
            tips: '39.6K',
        },
    ]
    return (
        <div className="my-4 ">
            <div className="relative mb-4">
                <p>PAST LIVE STREAMS</p>
            </div>
            <div className="mt-4">
                <div className="style-table-two">
                    <Table
                        data={data}
                        columns={columns}
                        loadMore={true}
                        loadText="Load More"
                    />
                </div>
            </div>
        </div>
    )
}

export default PastLiveStream
