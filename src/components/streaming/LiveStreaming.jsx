import { useRef, useEffect } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import styles from '@/styles/Streaming.module.css'

const LiveStreaming = (props) => {
    const videoRef = useRef(null)
    useEffect(() => {
        if (videoRef.current) {
            videojs(videoRef.current, {
                autoplay: true,
                preload: 'auto',
                poster: '/storage/video-streaming/1.jpg',
                height: 483,
                sources: [
                    {
                        src: props.streamingUrl,
                        type: 'video/mp4',
                    },
                ],
            })
        }
    })

    return (
        <div className={styles.streamingContainer}>
            <video
                id="myBtn"
                controls
                ref={videoRef}
                autoPlay
                muted
                className="video-js"
            />
        </div>
    )
}

export default LiveStreaming
