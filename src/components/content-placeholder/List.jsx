import React from 'react'
import Category from '@/components/Category'
import Stream from '@/components/Stream'
import Streamer from '@/components/Streamer'
import Stats from '@/components/profile/Stats'
import ProfileUserInfo from '@/components/profile/ProfileUserInfo'
const List = ({
    type,
    grid,
    length,
    streamerVariant,
    placeholderWidth,
    placeholderHeight,
}) => {
    const listing = []
    for (let i = 0; i < length; i++) {
        listing.push(
            <div className="pointer-events-none" key={i}>
                {type == 'category' && (
                    <Category
                        placeholder
                        title="Lorem ipsum"
                        viewers="Lorem ipsum"
                        image="/placeholders/249x385.svg"
                    />
                )}
                {type == 'stream' && (
                    <Stream
                        placeholder
                        title="Lorem ipsum"
                        description="Lorem ipsum dolor sit amet,"
                        image="/placeholders/270x151.svg"
                    />
                )}
                {type == 'streamer' && (
                    <Streamer
                        horizontalData={streamerVariant}
                        placeholder
                        image="/placeholders/124x124.svg"
                        title="Lorem ipsum"
                        followers="Lorem ipsum dolor"
                    />
                )}
                {type == 'stats' && (
                    <Stats
                        placeholder
                        title="Lorem ipsum"
                        numbers="Lorem ipsum"
                        image="/placeholders/124x124.svg"
                    />
                )}
                {type == 'profileUserInfo' && (
                    <ProfileUserInfo
                        placeholder
                        name="Lorem ipsum"
                        userId="Lorem ipsum"
                    />
                )}
            </div>
        )
    }
    return <div className={grid}>{listing}</div>
}

export default List

/*

// Example of how to use it 

<ContentPlaceholder
    type="category"
    length={6}
    grid="grid grid-cols-4"
/>

*/
