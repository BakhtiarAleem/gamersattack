import Head from 'next/head'
import { useState, useEffect } from 'react'
import TabList from '@/components/browse/TabList'
import Stream from '@/components/Stream'
import map from 'lodash/map'
import ContentPlaceholder from '@/components/content-placeholder/List'
import { browse } from '@/data/browse'

const Browse = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => setLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            <Head>
                <title>
                    {`Browse - Live Stream | ${process.env.NEXT_PUBLIC_APP_NAME}`}
                </title>
            </Head>
            <div className="body-padding">
                <h1 className="mb-6 mobile:mb-4 mobile:text-xl">Browse</h1>
                <div className="mb-6">
                    <TabList />
                </div>
                {browse.streams && !loading && (
                    <div className="grid grid-cols-4 gap-6 gap-y-0 lg:grid-cols-3 mobile:grid-cols-1">
                        {map(browse.streams, (stream, index) => (
                            <Stream
                                key={index}
                                image={stream.image}
                                profile={stream.profile}
                                title={stream.title}
                                description={stream.description}
                            />
                        ))}
                    </div>
                )}
                {/* Streams content placeholder*/}
                {loading && (
                    <ContentPlaceholder
                        type="stream"
                        length="8"
                        grid="grid grid-cols-4 gap-6 gap-y-0 lg:grid-cols-3 mobile:grid-cols-1"
                    />
                )}
            </div>
        </div>
    )
}

export default Browse
