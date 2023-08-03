import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '@/styles/Profile.module.css'
import Button from '@/components/base/Button'

const ProfileCover = (props) => {
    const [imageUrl] = useState(props.image)
    const router = useRouter()
    return (
        <div>
            {props.image && (
                <div
                    className={styles.coverImage}
                    style={{
                        backgroundImage: `url("` + props.image + `")`,
                    }}
                >
                    <Image src={props.image} alt={props.title} layout="fill" />
                </div>
            )}
            {!props.image && (
                <div
                    className={`${styles.coverImage} ${styles.coverEdit}`}
                    style={{
                        backgroundImage: `url("` + imageUrl + `")`,
                    }}
                >
                    {imageUrl && (
                        <Image src={imageUrl} alt={props.title} layout="fill" />
                    )}

                    {props.edit && (
                        <div
                            className={`${'absolute left-0 right-0 top-6 text-center mobile:top-[0px]'} ${
                                styles.coverEditSection
                            }`}
                        >
                            <div className="mobile:py-auto inline-block overflow-hidden rounded-2xl bg-theme-dark-500 px-4 py-5 md:mx-10 ipad:my-4 mobile:m-0 mobile:h-[150px] mobile:w-full mobile:rounded-none mobile:px-3 mobile:py-7 mobile:text-xs">
                                <p className="inline-block">
                                    Brand your channels identity by updating
                                    your profile picture, channel banner, and
                                    manage channel preferences.
                                </p>
                                <div className="relative ml-4 inline-block md:mt-3 ipad:ml-0">
                                    <Button
                                        variant="dark"
                                        text="Update"
                                        size="sm"
                                        click={() =>
                                            router.push(
                                                '/my-profile/streamer-sign-up'
                                            )
                                        }
                                        modification="update-btn"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default ProfileCover
