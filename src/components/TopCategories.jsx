import React from 'react'
import dynamic from 'next/dynamic'
import map from 'lodash/map'
const MediaQuery = dynamic(() => import('react-responsive'), {
    ssr: false,
})
import { useMediaQuery } from 'react-responsive'
import { Fade } from 'react-awesome-reveal'
import ContentPlaceholder from '@/components/content-placeholder/List'
import MobileSlider from '@/components/MobileSlider'
import Category from '@/components/Category'
import PageHeading from '@/components/PageHeading'
import NoRecordFound from '@/components/base/NoRecordFound'
import { home } from '@/data/home'

const TopCategories = ({ loading }) => {
    const isMobileLarge = useMediaQuery({
        query: '(min-width: 391px)',
    })
    return (
        <div className="mobile:mb-[-16px]">
            {/* Top Categories */}
            <PageHeading
                heading="Top Categories"
                linkName="View all"
                link="browse/categories"
            />
            <div className="min-h-[400px] 4xl:min-h-[348px] 3xl:min-h-[298px] 2xl:min-h-[280px] xl:min-h-[260px] mobile:hidden">
                {/* For Desktop */}
                {home.categories && !loading && (
                    <MediaQuery minWidth={667}>
                        <div className="grid grid-cols-6 gap-6 gap-y-0 md:grid-cols-3 mobile:grid-cols-2 mobile:gap-3">
                            <Fade damping={0.1} triggerOnce cascade>
                                {map(home.categories, (category, index) => (
                                    <Category
                                        key={index}
                                        image={category.image}
                                        title={category.title}
                                        viewers={category.viewers}
                                    />
                                ))}
                            </Fade>
                        </div>
                    </MediaQuery>
                )}
                {/* Top categoeies content placeholder*/}
                {loading && (
                    <ContentPlaceholder
                        type="category"
                        length="6"
                        grid="grid grid-cols-6 gap-6 gap-y-0 md:grid-cols-3 mobile:grid-cols-2 mobile:gap-3"
                    />
                )}
            </div>

            {!home.categories.length && !loading && (
                <div className="default-card mb-8">
                    <NoRecordFound />
                </div>
            )}
            {/* For Mobile */}
            <MediaQuery maxWidth={666}>
                <div className="mobile:mb-4">
                    <MobileSlider
                        loading={loading}
                        slides={home.categories}
                        items={isMobileLarge ? 2 : 1}
                        partialVisibility={isMobileLarge ? '15' : '120'}
                        placeholderWidth="w-[145px]"
                        placeholderHeight="h-[240px]"
                    />
                </div>
            </MediaQuery>
        </div>
    )
}

export default TopCategories
