import React from 'react'
import map from 'lodash/map'
import ProfileUserInfo from '@/components/profile/ProfileUserInfo'

import styles from '@/styles/Profile.module.css'

const Following = () => {
    const followings = [
        {
            avatar: '/storage/profile/1.jpg',
            name: 'Marry Philips',
            userId: 'marryPhilips',
        },
        {
            avatar: '/storage/profile/2.jpg',
            name: 'Ann Curtis',
            userId: 'annCurtis',
        },
        {
            avatar: '/storage/profile/3.jpg',
            name: 'Jaydon Aminoff',
            userId: 'jaydon',
        },
        {
            avatar: '/storage/profile/4.jpg',
            name: 'Cooper Bator',
            userId: 'cooper',
        },
        {
            avatar: '/storage/profile/5.jpg',
            name: 'Anika Rosser',
            userId: 'anikaross',
        },
        {
            avatar: '/storage/profile/6.jpg',
            name: 'Makenna Dor..',
            userId: 'makenna',
        },
        {
            avatar: '/storage/profile/7.jpg',
            name: 'Emery Ekstrom',
            userId: 'emery',
        },
        {
            avatar: '/storage/profile/8.jpg',
            name: 'Jordyn Lubin',
            userId: 'lubinjor',
        },
        {
            avatar: '/storage/profile/9.jpg',
            name: 'Randy Botosh',
            userId: 'randy',
        },
        {
            avatar: '/storage/profile/10.jpg',
            name: 'Emery Ekstrom',
            userId: 'emery',
        },
    ]

    return (
        <div className="px-4">
            <div className={styles.profileContent}>
                <div className="grid grid-cols-4 gap-1.5 mobile:grid-cols-2">
                    {map(followings, (info, index) => (
                        <ProfileUserInfo
                            key={index}
                            avatar={info.avatar}
                            name={info.name}
                            userId={info.userId}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Following
