import Head from 'next/head'
import Cover from '@/components/profile/Cover'
import Details from '@/components/profile/Details'

const MyProfilePage = () => {
    const profile = {
        coverImage: null,
        profileName: 'PJ Hayat Gaming',
        avatarImage: '/storage/placeholder/profile.png',
        followers: '0',
        followed: '10',
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
                image: '/storage/placeholder/live.png',
                profile: '/placeholders/avatar.svg',
                title: 'Your channel is currently offline',
                description: 'Robocop 87',
            },
        ],
    }
    return (
        <div>
            <Head>
                <title>{`PJ Hayat | Profile | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
            </Head>
            <Cover
                image={profile.coverImage}
                title={profile.profileName}
                edit
            />
            <div className="px-6 pt-6">
                <Details
                    avatarImage={profile.avatarImage}
                    title={profile.profileName}
                    followed={profile.followed}
                    followers={profile.followers}
                    tags={profile.tags}
                    description={profile.description}
                    avatarLink="my-profile/customize-channel"
                    edit
                    stream
                    modification
                />
                <div className="mt-6 min-h-[150px] mobile:min-h-0"></div>
            </div>
        </div>
    )
}

export default MyProfilePage
