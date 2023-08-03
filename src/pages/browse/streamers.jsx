import Head from 'next/head'
import { useState, useEffect } from 'react'
import Streamer from '@/components/Streamer'
import TabList from '@/components/browse/TabList'
import map from 'lodash/map'
import ContentPlaceholder from '@/components/content-placeholder/List'
import { browse } from '@/data/browse'
const Streamers = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => setLoading(false), 3000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div>
            <Head>
                <title>
                    {`Browse - Streamers | ${process.env.NEXT_PUBLIC_APP_NAME}`}
                </title>
            </Head>
            <div className="body-padding">
                <h1 className="mb-6 mobile:mb-4 mobile:text-xl">Browse</h1>
                <div className="mb-6">
                    <TabList />
                </div>
                {browse.categories && !loading && (
                    <div className="grid grid-cols-5 gap-10 gap-y-0 3xl:grid-cols-4 2xl:grid-cols-3 ipad:grid-cols-2 mobile:grid-cols-1">
                        {map(browse.streamers, (streamer, index) => (
                            <Streamer
                                key={index}
                                image={streamer.image}
                                title={streamer.title}
                                followers={streamer.followers}
                                horizontalData
                            />
                        ))}
                    </div>
                )}
                {/* Categories content placeholder*/}
                {loading && (
                    <ContentPlaceholder
                        streamerVariant
                        type="streamer"
                        length="8"
                        grid="grid grid-cols-5 gap-10 gap-y-0 3xl:grid-cols-4 2xl:grid-cols-3 ipad:grid-cols-2 mobile:grid-cols-1"
                    />
                )}
            </div>
        </div>
    )
}

export default Streamers
