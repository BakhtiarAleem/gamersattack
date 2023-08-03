import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress' // nprogress module
import 'nprogress/nprogress.css' // styles of nprogress

// Layout
import MainLayout from '@/layouts/Main'
import ErrorLayout from '../layouts/Error'
import '@/styles/fonts.css'
import '@/styles/tailwind.css'
import '@/styles/icons.css'
import '@/styles/redactedfont.css'

// Binding events
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }) => {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(
        <>
            {/* Default Layout */}
            {!Component.auth && !Component.error && (
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            )}
            {/* Error Layout */}
            {Component.error && (
                <ErrorLayout>
                    <Component {...pageProps} />
                </ErrorLayout>
            )}
        </>
    )
}

export default MyApp
