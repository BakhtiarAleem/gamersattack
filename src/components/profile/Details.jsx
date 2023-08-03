import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import map from 'lodash/map'

import Button from '@/components/base/Button'
import BaseModal from '@/components/base/Modal'
import Following from '@/components/modal/Following'
import Followers from '@/components/modal/Followers'

import styles from '@/styles/Profile.module.css'

const ProfileDetails = (props) => {
    const [isFollowers, setIsFollowers] = useState(false)
    const [isFollowings, setIsFollowings] = useState(false)

    return (
        <div>
            <div
                className={`${styles.profileDetail} ${
                    props.modification ? 'mobile:border-none' : ''
                }`}
            >
                <div
                    className={styles.avatar}
                    style={{
                        backgroundImage: `url("` + props.avatarImage + `")`,
                    }}
                >
                    <Image
                        src={props.avatarImage}
                        alt={props.title}
                        layout="fill"
                    />
                    {props.avatarLink && (
                        <Link href={props.avatarLink}>
                            <a className="absolute top-0 left-0 right-0 h-full w-full"></a>
                        </Link>
                    )}
                </div>
                <div className={styles.descriptionDetails}>
                    <h3 className={styles.descriptionTitle}>{props.title}</h3>
                    <div className={styles.follwersTags}>
                        <div>
                            {props.followers && (
                                <div
                                    className={styles.followers}
                                    onClick={() => setIsFollowers(true)}
                                >
                                    {props.followers} followers
                                </div>
                            )}
                            {props.followed && (
                                <div
                                    className={styles.followed}
                                    onClick={() => setIsFollowings(true)}
                                >
                                    {props.followed} followed
                                </div>
                            )}
                        </div>
                        <div className={styles.tagsContainer}>
                            <ul className="flex mobile:mt-2 mobile:justify-center">
                                {map(props.tags, (tag, index) => (
                                    <li key={index} className="mr-1.5 mb-1.5">
                                        <span className="flex h-5 items-center justify-center rounded bg-interface-700 px-1.5 text-xs font-medium">
                                            <Link href="/search">
                                                <a className="text-common-white">
                                                    {tag.text}
                                                </a>
                                            </Link>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="mt-3 ipad:mt-1">{props.description}</p>

                    {props.stream && (
                        <div>
                            {props.streamingDetails && (
                                <div className="mt-3 flex mobile:m-auto mobile:mt-4 mobile:flex-col mobile:items-center mobile:justify-center">
                                    {/* <div className="mr-3">
                                        <Button
                                            variant="primary"
                                            text="Start Streaming"
                                            icon="streaming"
                                            size="sm"
                                            click={props.startStreaming}
                                        />
                                    </div> */}
                                    <div>
                                        <Button
                                            variant="dark"
                                            text="Customize your channel"
                                            icon="edit"
                                            size="sm"
                                            link="/my-profile/customize-channel"
                                        />
                                    </div>
                                </div>
                            )}
                            {!props.streamingDetails && (
                                <div className="mt-3 flex mobile:mt-4 mobile:flex-col mobile:items-center mobile:justify-center">
                                    <div>
                                        <Button
                                            variant="dark"
                                            text="Customize your channel"
                                            icon="edit"
                                            size="sm"
                                            link="/my-profile/customize-channel"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {!props.stream && (
                        <div className="mt-3 flex mobile:mt-4 mobile:justify-center">
                            <div className="mr-3">
                                <Button
                                    variant="primary"
                                    text="Follow"
                                    icon="rating"
                                    size="sm"
                                    iconStyle="mr-2 text-lg"
                                    modification="w-[96px] h-[36px] rounded-md"
                                />
                            </div>
                            <div>
                                <Button
                                    variant="dark"
                                    text="Share"
                                    icon="share"
                                    size="sm"
                                    iconStyle="mr-2 text-lg"
                                    modification="w-[96px] h-[36px] rounded-md"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <BaseModal
                ModalBody={Followers}
                isModalOpen={isFollowers}
                toggleModal={() => setIsFollowers(false)}
                title="Followers"
                size="lg"
                modification="w-[720px]"
                panelModification="h-auto"
                titleLeft
            />
            <BaseModal
                ModalBody={Following}
                isModalOpen={isFollowings}
                toggleModal={() => setIsFollowings(false)}
                title="Followings"
                size="lg"
                modification="w-[720px]"
                panelModification="h-auto"
                titleLeft
            />
        </div>
    )
}

export default ProfileDetails
