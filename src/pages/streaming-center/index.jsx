import Head from 'next/head'
import { useState } from 'react'
import map from 'lodash/map'
import BaseModal from '@/components/base/Modal'
import Streaming from '@/components/modal/Streaming'
import StreamingInfo from '@/components/modal/StreamingInfo'
import StreamingCenter from '@/components/StreamingCenter'
import Stats from '@/components/profile/Stats'
import Separator from '@/components/Separator'
import PastLiveStream from '@/components/PastLiveStream'
import PayoutSummary from '@/components/PayoutSummary'
import PayoutTransactions from '@/components/PayoutTransactions'

const PublicStreamingPage = () => {
    const [isStreaming, setIsStreaming] = useState(false)
    const StreamingModal = () => {
        setIsStreaming(!isStreaming)
    }
    const [isStreamingInfo, setIsStreamingInfo] = useState(false)
    const StreamingInfoModal = () => {
        setIsStreaming(false)
        setTimeout(() => {
            setIsStreamingInfo(!isStreamingInfo)
        }, 500)
    }

    const profile = {
        coverImage: '/storage/profile-cover/2.jpg',
        profileName: 'Pak Gaming',
        avatarImage: '/storage/profile-image/2.png',
        followers: '1.3K',
        followed: '10',
        tags: [
            {
                text: 'Pubg Mobile',
            },
            {
                text: 'GTA 5',
            },
            {
                text: 'PS4',
            },
        ],
        description:
            'Write description for the about section in under 300 characters',
        live: [
            {
                image: '/storage/video-streaming/3.png',
                profile: '/storage/profile/13.jpg',
                title: 'Charity Stream for Flood Victims',
                description: 'Robocop 87',
                streaming: '30.5',
                followers: '572',
                views: '5.3K',
                tips: 'PKR 3,530',
            },
        ],
    }
    const statistics = [
        {
            title: 'Total Streaming Sessions',
            numbers: '24',
        },
        {
            title: 'Total Streaming Hours',
            numbers: '14h 20m',
        },
        {
            title: 'Total Views',
            numbers: '2,106',
        },
        {
            title: 'Total Followers',
            numbers: '30,500',
        },

        {
            title: 'Total Earning',
            numbers: 'PKR 22,950',
        },
    ]
    return (
        <div>
            <Head>
                <title>{`Streaming center | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
            </Head>
            <div className="p-6 mobile:w-full">
                <h1>Streaming Center</h1>
                <div className="mt-6">
                    {map(profile.live, (item, index) => (
                        <div>
                            <div>
                                <StreamingCenter
                                    key={index}
                                    image={item.image}
                                    profile={item.profile}
                                    title={item.title}
                                    description={item.description}
                                    live
                                    hideDetailEffect
                                    startStreaming={StreamingModal}
                                />
                            </div>
                            <div className="mt-6">
                                <Separator />
                            </div>
                            <div className="grid grid-cols-5 gap-x-4 xl:grid-cols-3 mobile:grid-cols-2">
                                {map(statistics, (stat, indexTwo) => (
                                    <Stats
                                        key={indexTwo}
                                        title={stat.title}
                                        numbers={stat.numbers}
                                    />
                                ))}
                            </div>
                            <div className="grid min-w-[560px] grid-cols-2 gap-8 md:min-w-full md:grid-cols-1 md:gap-1">
                                <div>
                                    <PastLiveStream />
                                </div>
                                <div>
                                    <div className="pb-1">
                                        <PayoutSummary />
                                    </div>
                                    <div>
                                        <PayoutTransactions />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BaseModal
                ModalBody={Streaming}
                isModalOpen={isStreaming}
                searchBank
                toggleModal={StreamingModal}
                size="sm"
                modification=""
                hideButton
                dataSubmission={StreamingInfoModal}
            />
            <BaseModal
                ModalBody={StreamingInfo}
                isModalOpen={isStreamingInfo}
                searchBank
                toggleModal={StreamingInfoModal}
                size="sm"
                hideButton
            />
        </div>
    )
}

export default PublicStreamingPage
