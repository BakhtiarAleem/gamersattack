import Head from 'next/head'
import Cover from '@/components/profile/Cover'
import Details from '@/components/profile/Details'
import map from 'lodash/map'
import Stream from '@/components/Stream'
const PublicProfilePage = () => {
    const profile = {
        coverImage: '/storage/profile-cover/1.jpg',
        profileName: 'PJ Hayat Gaming',
        avatarImage: '/storage/profile-image/1.png',
        followers: '160k',
        tags: [
            {
                text: 'Pubg Mobile',
            },
            {
                text: 'Content Creator',
            },
            {
                text: 'PS4',
            },
        ],
        description:
            'Just an ordinary Girl with some Good gaming Skills, Love to Play PUBG❤️',
        live: [
            {
                image: '/storage/video-streaming/2.jpg',
                profile: '/storage/profile/12.jpg',
                title: 'Chill Live Stream until we..',
                description: 'PJ Hayat Gaming',
            },
        ],
    }
    return (
        <div>
            <Head>
                <title>
                    {`Profile  | ${process.env.NEXT_PUBLIC_APP_NAME}`}
                </title>
            </Head>
            <Cover image={profile.coverImage} title={profile.profileName} />
            <div className="p-6 pb-0">
                <Details
                    avatarImage={profile.avatarImage}
                    title={profile.profileName}
                    followers={profile.followers}
                    tags={profile.tags}
                    description={profile.description}
                />
                <div className="mt-6">
                    <div className="grid grid-cols-2 gap-6 mobile:grid-cols-1">
                        {map(profile.live, (item, index) => (
                            <div className="max-w-[480px]">
                                <Stream
                                    key={index}
                                    image={item.image}
                                    profile={item.profile}
                                    title={item.title}
                                    description={item.description}
                                    live
                                    hideZoomEffect
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicProfilePage
