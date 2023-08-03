import styles from '@/styles/Channel.module.css'
import map from 'lodash/map'
import ChannelItem from '@/components/channel/Item'
const ChannelListing = (props) => {
    return (
        <div className={`${styles.channelContainer} ${'scrollable'}`}>
            {map(props.listing, (item, index) => (
                <div className="mb-4">
                    <h4
                        id={index}
                        className={`${styles.channelListHeading} ${
                            props.expand ? styles.expand : ''
                        }`}
                    >
                        {item.name}
                    </h4>
                    <div className="">
                        {map(item.list, (channelItem, itemIndex) => (
                            <ChannelItem
                                key={itemIndex}
                                image={channelItem.image}
                                title={channelItem.name}
                                description={channelItem.description}
                                views={channelItem.views}
                                liveUrl={channelItem.liveUrl}
                                expand={props.expand}
                                channelClick={props.channelClick}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChannelListing
