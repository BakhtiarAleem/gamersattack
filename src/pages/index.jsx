import Head from 'next/head'
import { useState, useEffect } from 'react'
//import MainSlider from '@/components/landing/MainSlider'
import TopCategories from '@/components/TopCategories'
import TopStreams from '@/components/TopStreams'
import TopStreamers from '@/components/TopStreamers'
import TopGamesStream from '@/components/TopGamesStream'
import Separator from '@/components/Separator'

const HomePage = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => setLoading(false), 3000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div>
            <Head>
                <title>{`Home | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
            </Head>
            <div className="body-padding">
                {/* Main Slider */}
                {/* <MainSlider loading={loading} /> */}
                {/* Top Categories */}
                <TopCategories loading={loading} />
                <Separator />
                {/* Top Live streams */}
                <TopStreams loading={loading} />
                <Separator />
                {/* Top Streamers */}
                <TopStreamers loading={loading} />
                <Separator />
                {/* Top games live streams */}
                <TopGamesStream loading={loading} />
            </div>
        </div>
    )
}

export default HomePage
