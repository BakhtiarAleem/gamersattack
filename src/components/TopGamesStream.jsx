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
import Separator from '@/components/Separator'
import { home } from '@/data/home'

const TopGamesStream = ({ loading }) => {
    const isMobileLarge = useMediaQuery({
        query: '(min-width: 391px)',
    })
    return (
        <div>
            {/* Top stream */}
            {map(home.gamesStreams, (item, index) => (
                <div key={index}>
                    <PageHeading
                        heading={item.title}
                        linkName="View all"
                        link="/category/1"
                    />

                    <div className="min-h-[290px] 4xl:min-h-[260px] 3xl:min-h-[220px] 2xl:min-h-[210px] xl:min-h-[200px] mobile:hidden">
                        {/* For Desktop */}
                        <MediaQuery minWidth={667}>
                            {item.topGames && !loading && (
                                <div className="grid grid-cols-4 gap-6 gap-y-0 md:grid-cols-2 mobile:grid-cols-1 mobile:gap-3">
                                    <Fade damping={0.1} triggerOnce cascade>
                                        {map(
                                            item.topGames,
                                            (games, gameIndex) => (
                                                <Stream
                                                    key={gameIndex}
                                                    image={games.image}
                                                    profile={games.profile}
                                                    title={games.title}
                                                    description={
                                                        games.description
                                                    }
                                                />
                                            )
                                        )}
                                    </Fade>
                                </div>
                            )}
                        </MediaQuery>
                        {/* Top games stream content placeholder*/}
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
                    <div>
                        <MediaQuery maxWidth={666}>
                            <MobileSlider
                                loading={loading}
                                type="stream"
                                slides={item.topGames}
                                items={1}
                                partialVisibility={isMobileLarge ? '80' : '60'}
                                placeholderWidth="w-[266px]"
                                placeholderHeight="h-[150px]"
                            />
                        </MediaQuery>
                    </div>

                    {index < home.gamesStreams.length - 1 && <Separator />}
                </div>
            ))}
        </div>
    )
}

export default TopGamesStream
