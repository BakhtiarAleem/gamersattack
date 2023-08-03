import React from 'react'
import Navigation from '@/components/base/Navigation'

const list = [
    {
        label: 'Live Streams',
        route: '/browse',
    },
    {
        label: 'Categories',
        route: '/browse/categories',
    },
    {
        label: 'Streamers',
        route: '/browse/streamers',
    },
]

const TabList = () => {
    return <Navigation items={list} tabList />
}

export default TabList
