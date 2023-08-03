import Head from 'next/head'
import { useState } from 'react'
import map from 'lodash/map'
import Cover from '@/components/profile/Cover'
import Details from '@/components/profile/Details'
import BaseModal from '@/components/base/Modal'
import Streaming from '@/components/modal/Streaming'
import StreamingInfo from '@/components/modal/StreamingInfo'
import StreamingCenter from '@/components/StreamingCenter'

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
    return (
        <div>
            <Head>
                <title>{`Pak Gaming | Profile ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
            </Head>
            <Cover image={profile.coverImage} title={profile.profileName} />
            <div className="p-6">
                <div className="relative">
                    <Details
                        avatarImage={profile.avatarImage}
                        title={profile.profileName}
                        followers={profile.followers}
                        followed={profile.followed}
                        tags={profile.tags}
                        description={profile.description}
                        stream
                        streamingDetails
                        startStreaming={StreamingModal}
                    />
                </div>
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
                                    // liveChat={chatModal}
                                />
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
