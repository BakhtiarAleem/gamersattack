import dynamic from 'next/dynamic'
import { useState } from 'react'
import { config } from 'react-spring'
const Carousel = dynamic(() => import('react-spring-3d-carousel'), {
    ssr: false,
})
const MediaQuery = dynamic(() => import('react-responsive'), {
    ssr: false,
})
import { useMediaQuery } from 'react-responsive'
import SliderItem from '@/components/landing/SliderItem'
import MobileSlider from '@/components/MobileSlider' // mobile slider
import Separator from '@/components/Separator'
import PageHeading from '@/components/PageHeading'
import { home } from '@/data/home'
import 'react-multi-carousel/lib/styles.css'

const MainSlider = ({ loading }) => {
    const [slide, setSlide] = useState(0)
    const isIpad = useMediaQuery({
        query: '(min-width: 667px)',
    })
    const state = {
        goToSlide: slide,
        offsetRadius: 3,
        showNavigation: true,
        config: config.slow,
    }

    const slides = home.slides.map((item, index) => {
        return {
            key: index,
            content: (
                <SliderItem
                    key={index}
                    coverImage={item.coverImage}
                    profileImage={item.profileImage}
                    title={item.title}
                    description={item.description}
                    views={item.views}
                    profileUrl={item.profileUrl}
                    liveStreamUrl={item.liveStreamUrl}
                    liveVideo={item.liveVideo}
                    click={() => setSlide(index)}
                />
            ),
        }
    })

    return (
        <>
            {/* For mobile */}
            <MediaQuery maxWidth={666}>
                <PageHeading heading="Featured Live Streams" />
            </MediaQuery>
            {/* For desktop */}
            <div className="min-h-[400px] ipad:hidden">
                <MediaQuery minWidth={891}>
                    <div className="relative m-auto  h-[400px] w-full">
                        {loading && (
                            <div className="relative  h-[360px] w-full animate-pulse rounded-md bg-interface-600"></div>
                        )}
                        <div>
                            {slides && !loading && (
                                <div className="main-slider relative m-auto h-[360px] w-[76%] 3xl:w-[65%] xl:w-[55%] lg:w-[46%] md:w-[40%] mobile:w-full">
                                    <Carousel
                                        slides={slides}
                                        goToSlide={state.goToSlide}
                                        offsetRadius={state.offsetRadius}
                                        interval={1000}
                                        showNavigation={state.showNavigation}
                                        animationConfig={state.config}
                                        className="main-slider"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </MediaQuery>
            </div>
            {/* For mobile */}
            <MediaQuery maxWidth={890}>
                <div className="mb-6">
                    <MobileSlider
                        type="mainSlider"
                        slides={home.slides}
                        items={1}
                        partialVisibility={isIpad ? '170' : '30'}
                        placeholderWidth="w-[270px]"
                        placeholderHeight="h-[200px]"
                        loading={loading}
                    />
                </div>
                <Separator />
            </MediaQuery>
        </>
    )
}

export default MainSlider
