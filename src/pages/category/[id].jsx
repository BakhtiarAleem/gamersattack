import Head from 'next/head'
import CategoryDetail from '@/components/CategoryDetail'
import Separator from '@/components/Separator'
import Stream from '@/components/Stream'
import map from 'lodash/map'
import { browse } from '@/data/browse'
const CategoryId = () => {
    const tags = [
        {
            text: 'FPS',
        },
        {
            text: 'Action',
        },
        {
            text: 'Shooter',
        },
    ]

    return (
        <>
            <div>
                <Head>
                    <title>
                        {`Categories  | ${process.env.NEXT_PUBLIC_APP_NAME}`}
                    </title>
                </Head>

                <div className="p-6 pb-0">
                    <div>
                        <CategoryDetail
                            image={browse.image}
                            title={browse.title}
                            viewers={browse.viewers}
                            tags={tags}
                            description={browse.description}
                        />
                    </div>
                    <Separator />
                    <div className="grid grid-cols-4 gap-6 gap-y-0 lg:grid-cols-3 mobile:grid-cols-1">
                        {map(browse.categoryDetail, (item, index) => (
                            <Stream
                                key={index}
                                image={item.image}
                                profile={item.profile}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryId
