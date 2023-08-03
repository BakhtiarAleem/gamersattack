// import LiveStreaming from '@/components/streaming/LiveStreaming'
import dynamic from 'next/dynamic'
import Link from 'next/link'
// import LiveStreamingTwo from '@/components/streaming/LiveStreamingTwo'
const LiveStreaming = dynamic(
    () => import('@/components/streaming/LiveStreaming'),
    {
        ssr: false,
    }
)
import Head from 'next/head'
import LiveStreamingInfo from '@/components/streaming/LiveStreamingInfo'
import map from 'lodash/map'
import Stream from '@/components/Stream'
const LiveStream = () => {
    const streaming = {
        url: '/storage/videos-live-streaming/1.mp4',
        profileImage: '/storage/profile/11.jpg',
        title: 'I am Khaleel',
        description: 'WE BACK!!! Late Night Stream | Story mode | Come join us',
        gameStreaming: "Marvel's Guardians of the Galaxy",
        viewers: 92,
        live: true,
        related: [
            {
                image: '/storage/streams/15.png',
                profile: '/storage/user/1.png',
                title: 'Trying Out Guardians of the..',
                description: 'Merciless Medic',
            },
            {
                image: '/storage/streams/16.png',
                profile: '/storage/user/2.png',
                title: 'My cat trapped in a jail',
                description: 'KhanSaab69',
            },
            {
                image: '/storage/streams/17.png',
                profile: '/storage/user/3.png',
                title: 'Walkthrough, Part 1!',
                description: 'Predator',
            },
        ],
    }

    return (
        <div>
            <Head>
                <title>{`I am Khaleel | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
            </Head>
            {/* <LiveStreaming streamingUrl={streaming.url} /> */}
            <LiveStreaming streamingUrl="/storage/videos-live-streaming/1.mp4" />
            <LiveStreamingInfo
                profileImage={streaming.profileImage}
                title={streaming.title}
                description={streaming.description}
                gameStreaming={streaming.gameStreaming}
                viewers={streaming.viewers}
                live={streaming.live}
            />
            <div className="body-padding">
                <h5 className="mb-1">
                    More live streams related to
                    <Link href={'#'}>
                        <a className="text-sea-500 ml-1">
                            Marvel&apos;s Guardians of the Galaxy
                        </a>
                    </Link>
                </h5>
            </div>
            <div className="grid grid-cols-3 gap-4 gap-y-0 px-6 pt-6 lg:grid-cols-2 mobile:grid-cols-1">
                {map(streaming.related, (stream, index) => (
                    <Stream
                        key={index}
                        image={stream.image}
                        profile={stream.profile}
                        title={stream.title}
                        description={stream.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default LiveStream
