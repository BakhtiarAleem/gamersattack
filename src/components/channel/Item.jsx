import styles from '@/styles/Channel.module.css'
import Link from 'next/link'
const ChannelItem = (props) => {
    return (
        <div onClick={props.channelClick} className={styles.channelItem}>
            <div
                className={styles.channelImage}
                style={{
                    backgroundImage: `url("` + props.image + `")`,
                }}
            ></div>
            <div
                className={`${styles.channelDetail} ${
                    props.expand ? styles.expand : ''
                }`}
            >
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <div className={styles.channelViews}>
                    <span className="mr-1 inline-block h-2 w-2 rounded-lg bg-live"></span>
                    {props.views}
                </div>
            </div>
            <div className={styles.channelLink}>
                <Link href={props.liveUrl}>
                    <a></a>
                </Link>
            </div>
        </div>
    )
}

export default ChannelItem
