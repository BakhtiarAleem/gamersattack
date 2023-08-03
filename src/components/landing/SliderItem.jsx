import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '@/styles/Channel.module.css'
const LiveStreaming = dynamic(
    () => import('@/components/streaming/LiveStreaming'),
    {
        ssr: false,
    }
)
const SliderItem = (props) => {
    return (
        <div
            onClick={props.click}
            className="slider-content cursor-pointer overflow-hidden rounded-md bg-theme-dark-500"
        >
            {!props.liveVideo && (
                <div className="stream-url">
                    <Link href={props.liveStreamUrl}>
                        <div
                            className={`${
                                styles.coverPhoto
                            } ${'cover-photo-image cursor-pointer'}`}
                        >
                            <Image
                                src={props.coverImage}
                                alt={process.env.NEXT_PUBLIC_APP_NAME}
                                layout="responsive"
                                width={530}
                                height={300}
                            />
                        </div>
                    </Link>
                </div>
            )}
            {props.liveVideo && (
                <div
                    className={`${
                        styles.coverPhoto
                    } ${'cover-photo-image stream-url cursor-pointer'}`}
                >
                    <Link
                        className="absolute left-0 top-0 z-[9999] h-full  w-full"
                        href={props.liveStreamUrl}
                    >
                        <div className="absolute left-0 top-0 z-[9999] h-full w-full"></div>
                    </Link>

                    <LiveStreaming streamingUrl={`${props.liveVideo}`} />
                </div>
            )}
            <div className={styles.channelItem}>
                <div
                    className={styles.channelImage}
                    style={{
                        backgroundImage: `url("` + props.profileImage + `")`,
                    }}
                ></div>
                <div className={styles.channelDetail}>
                    <Link href={props.profileUrl}>
                        <div>
                            <h5>{props.title}</h5>
                            <p>{props.description}</p>
                            <div className={styles.channelViews}>
                                <span className="mr-1 inline-block h-2 w-2 rounded-lg bg-live"></span>
                                {props.views}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SliderItem
