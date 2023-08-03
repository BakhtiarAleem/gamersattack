import { JolPlayer } from 'jol-player'
const LiveStreamingJolPlayer = (props) => {
    // There are many properties and methods, please refer to the documentation ...

    const qualityData = [
        {
            name: 'FHD',
            url: '/storage/videos-live-streaming/smashbros.mp4',
        },
        {
            name: 'HD',
            url: '/storage/videos-live-streaming/smashbros.mp4',
        },
    ]

    return (
        <>
            <JolPlayer
                option={{
                    videoSrc: '/storage/videos-live-streaming/smashbros.mp4',
                    poster: '/storage/video-streaming/1.jpg',
                    width: 750,
                    height: 484,
                    language: 'en',
                    isShowMultiple: false,
                    quality: qualityData,
                    isShowSet: false,
                    isShowScreenshot: false,
                    isShowPicture: false,
                    isShowWebFullScreen: false,
                }}
            />
        </>
    )
}

export default LiveStreamingJolPlayer
