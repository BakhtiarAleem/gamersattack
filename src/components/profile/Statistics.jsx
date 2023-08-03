import Separator from '@/components/Separator'

const ProfileStatistics = (props) => {
    return (
        <div>
            <div>
                <div className="mt-6">
                    <Separator />
                </div>
                <div>
                    <p className="mb-4 text-base">Last 30 Days</p>
                    <div className="mb-4 grid grid-cols-3 gap-5 mobile:mb-3 mobile:grid-cols-1 mobile:gap-3">
                        <div className="rounded-lg bg-interface-700 p-4">
                            <p className="mb-1 text-interface-300 mobile:text-base">
                                Total streaming hours
                            </p>
                            <h2 className="mb-0 text-3xl">{props.streaming}</h2>
                        </div>
                        <div className="rounded-lg bg-interface-700 p-4">
                            <p className="mb-1 text-interface-300 mobile:text-base">
                                Followers
                            </p>
                            <h2 className="mb-0 text-3xl">{props.followers}</h2>
                        </div>
                        <div className="rounded-lg bg-interface-700 p-4">
                            <p className="mb-1 text-interface-300 mobile:text-base">
                                Total views
                            </p>
                            <h2 className="mb-0 text-3xl">{props.views}</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 mobile:gap-3">
                        <div className="rounded-lg bg-interface-700 p-4">
                            <p className="mb-1 text-interface-300 mobile:text-base">
                                Tips received
                            </p>
                            <h2 className="mb-0 text-3xl">{props.tips}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileStatistics
