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
import Stream from '@/components/Stream'
import PageHeading from '@/components/PageHeading'
import { home } from '@/data/home'

const TopStreams = ({ loading }) => {
    const isMobileLarge = useMediaQuery({
        query: '(min-width: 391px)',
    })
    return (
        <div className="mobile:mb-[-16px]">
            <PageHeading
                heading="Top Live Streams"
                linkName="View all"
                link="/browse/"
            />
            <div className="min-h-[290px] 4xl:min-h-[260px] 3xl:min-h-[220px] 2xl:min-h-[210px] xl:min-h-[200px] mobile:hidden">
                {/* For Desktop */}
                {home.streams && !loading && (
                    <MediaQuery minWidth={667}>
                        <div className="grid grid-cols-4 gap-6 gap-y-0 md:grid-cols-2 mobile:grid-cols-1 mobile:gap-3">
                            <Fade damping={0.1} triggerOnce cascade>
                                {map(home.streams, (stream, index) => (
                                    <Stream
                                        key={index}
                                        image={stream.image}
                                        profile={stream.profile}
                                        title={stream.title}
                                        description={stream.description}
                                    />
                                ))}
                            </Fade>
                        </div>
                    </MediaQuery>
                )}
                {/* Top categoeies content placeholder*/}
                {loading && (
                    <MediaQuery minWidth={667}>
                        <ContentPlaceholder
                            type="stream"
                            length="4"
                            grid="grid grid-cols-4 gap-6 gap-y-0 md:grid-cols-2 mobile:grid-cols-1 mobile:gap-3"
                        />
                    </MediaQuery>
                )}
            </div>
            {/* For Mobile */}
            <MediaQuery maxWidth={666}>
                <div className="mb-6">
                    <MobileSlider
                        loading={loading}
                        type="stream"
                        items={1}
                        slides={home.streams}
                        partialVisibility={isMobileLarge ? '80' : '60'}
                        placeholderWidth="w-[266px]"
                        placeholderHeight="h-[150px]"
                    />
                </div>
            </MediaQuery>
        </div>
    )
}

export default TopStreams
