import React from 'react'
import dynamic from 'next/dynamic'
import map from 'lodash/map'
import { Fade } from 'react-awesome-reveal'
const MediaQuery = dynamic(() => import('react-responsive'), {
    ssr: false,
})
import { useMediaQuery } from 'react-responsive'
import ContentPlaceholder from '@/components/content-placeholder/List'
import MobileSlider from '@/components/MobileSlider'
import Streamer from '@/components/Streamer'
import PageHeading from '@/components/PageHeading'
import { home } from '@/data/home'

const data = home.streamers

const TopStreamers = ({ loading }) => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1399px)',
    })
    const isMobileLarge = useMediaQuery({
        query: '(min-width: 391px)',
    })
    return (
        <div className="mobile:mb-[-16px]">
            <PageHeading
                heading="Top Streamers"
                linkName="View all"
                link="/browse/streamers"
            />
            <div className="min-h-[260px] 4xl:min-h-[230px] 3xl:min-h-[200px] 2xl:min-h-[210px] mobile:hidden">
                {/* For Desktop */}
                {data && !loading && (
                    <MediaQuery minWidth={667}>
                        <div className="grid grid-cols-8 gap-6 gap-y-0 2xl:grid-cols-6 xl:grid-cols-6 md:grid-cols-4 mobile:grid-cols-2 mobile:gap-3">
                            <Fade damping={0.1} triggerOnce cascade>
                                {map(
                                    isDesktop
                                        ? data.slice(0, 8)
                                        : data.slice(0, 6),
                                    (streamer, index) => (
                                        <Streamer
                                            key={index}
                                            image={streamer.image}
                                            title={streamer.title}
                                            followers={streamer.followers}
                                        />
                                    )
                                )}
                            </Fade>
                        </div>
                    </MediaQuery>
                )}
                {/* Top categoeies content placeholder*/}
                <MediaQuery minWidth={667}>
                    {loading && (
                        <ContentPlaceholder
                            type="streamer"
                            length={isDesktop ? 8 : 6}
                            grid="grid grid-cols-8 gap-6 gap-y-0 xl:grid-cols-6 2xl:grid-cols-6 md:grid-cols-4 mobile:grid-cols-2 mobile:gap-3"
                        />
                    )}
                </MediaQuery>
            </div>
            {/* For Mobile */}
            <MediaQuery maxWidth={666}>
                <div className="mb-6">
                    <MobileSlider
                        loading={loading}
                        type="streamer"
                        slides={home.streamers}
                        items={2}
                        partialVisibility={isMobileLarge ? '40' : '10'}
                        placeholderWidth="w-[125px]"
                        placeholderHeight="h-[125px]"
                    />
                </div>
            </MediaQuery>
        </div>
    )
}

export default TopStreamers
