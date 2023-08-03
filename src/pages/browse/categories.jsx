import Head from 'next/head'
import Category from '@/components/Category'
import TabList from '@/components/browse/TabList'
import map from 'lodash/map'
import ContentPlaceholder from '@/components/content-placeholder/List'
import { browse } from '@/data/browse'

const Categories = ({ loading }) => {
    return (
        <div>
            <Head>
                <title>
                    {`Browse - Categories | ${process.env.NEXT_PUBLIC_APP_NAME}`}
                </title>
            </Head>
            <div className="body-padding">
                <h1 className="mb-6 mobile:mb-4 mobile:text-xl">Browse</h1>
                <div className="mb-6">
                    <TabList />
                </div>
                {browse.categories && !loading && (
                    <div className="grid grid-cols-6 gap-6 gap-y-0 lg:grid-cols-5 md:grid-cols-4 mobile:grid-cols-2">
                        {map(browse.categories, (category, index) => (
                            <Category
                                key={index}
                                image={category.image}
                                title={category.title}
                                viewers={category.viewers}
                            />
                        ))}
                    </div>
                )}
                {/* Categories content placeholder*/}
                {loading && (
                    <ContentPlaceholder
                        type="stream"
                        length="4"
                        grid="grid grid-cols-4 gap-6 gap-y-0 mobile:grid-cols-2"
                    />
                )}
            </div>
        </div>
    )
}

export default Categories
