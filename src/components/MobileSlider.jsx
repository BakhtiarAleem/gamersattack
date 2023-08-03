import React from 'react'
import map from 'lodash/map'
import dynamic from 'next/dynamic'
const Carousel = dynamic(() => import('react-multi-carousel'), {
    ssr: false,
})
import Category from '@/components/Category'
import Stream from '@/components/Stream'
import Streamer from '@/components/Streamer'
import SliderItem from '@/components/landing/SliderItem'
import 'react-multi-carousel/lib/styles.css'

const MobileHomeSlider = ({
    slides,
    items = 2,
    partialVisibility = 20,
    type = 'category',
    loading,
    placeholderWidth = 'w-[200px]',
    placeholderHeight = 'h-[200px]',
}) => {
    const responsive = {
        mobile: {
            breakpoint: {
                max: 899,
                min: 0,
            },
            items: items,
            partialVisibilityGutter: partialVisibility,
        },
    }
    const carouselAttr = {
        arrows: false,
        radditionalTransfrom: 0,
        autoPlaySpeed: 3000,
        centerMode: false,
        containerClass: 'container',
        draggable: true,
        focusOnSelect: false,
        itemClass: 'carousel-item-padding-40-px',
        minimumTouchDrag: 80,
        partialVisible: true,
        pauseOnHover: true,
        renderArrowsWhenDisabled: false,
        renderButtonGroupOutside: false,
        renderDotsOutside: false,
        responsive: responsive,
        rewind: false,
        rewindWithAnimation: false,
        rtl: false,
        showDots: false,
        slidesToSlide: 1,
        swipeable: true,
    }
    return (
        <>
            <Carousel {...carouselAttr}>
                {map(slides, (slide, index) => (
                    <div key={index}>
                        {type === 'category' && (
                            <Category
                                hideZoomEffect
                                image={slide.image}
                                title={slide.title}
                                viewers={slide.viewers}
                            />
                        )}
                        {type === 'stream' && (
                            <Stream
                                hideZoomEffect
                                image={slide.image}
                                profile={slide.profile}
                                title={slide.title}
                                description={slide.description}
                            />
                        )}
                        {type === 'streamer' && (
                            <Streamer
                                hideZoomEffect
                                image={slide.image}
                                title={slide.title}
                                followers={slide.followers}
                            />
                        )}
                        {type === 'mainSlider' && (
                            <SliderItem
                                coverImage={slide.coverImage}
                                profileImage={slide.profileImage}
                                title={slide.title}
                                description={slide.description}
                                views={slide.views}
                                profileUrl={slide.profileUrl}
                                liveStreamUrl={slide.liveStreamUrl}
                                liveVideo={slide.liveVideo}
                            />
                        )}
                    </div>
                ))}
            </Carousel>
            {!slides.length && loading && (
                <Carousel {...carouselAttr}>
                    <div
                        className={`pointer-events-none animate-pulse rounded-md bg-interface-700 shadow ${placeholderWidth} ${placeholderHeight}`}
                    ></div>
                    <div
                        className={`pointer-events-none animate-pulse rounded-md bg-interface-700 shadow ${placeholderWidth} ${placeholderHeight}`}
                    ></div>
                    <div
                        className={`pointer-events-none animate-pulse rounded-md bg-interface-700 shadow ${placeholderWidth} ${placeholderHeight}`}
                    ></div>
                </Carousel>
            )}
        </>
    )
}

export default MobileHomeSlider
