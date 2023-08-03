// Next js Components
import Head from 'next/head'
import { useRouter } from 'next/router'
import Button from '@/components/base/Button'
import styles from '@/styles/Error.module.css'

const Error404 = () => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>
                    404 Not Found | {process.env.NEXT_PUBLIC_APP_NAME}
                </title>
            </Head>
            <div className="text-center">
                <h1 className={styles.heading}>OOPS!</h1>
                <h2 className={styles.subHeading}>
                    We looked everywhere and couldn’t find that page.
                </h2>
                <p className={styles.description}>
                    This might be because: You have typed the web address
                    incorrectly, or the page you were looking for may have been
                    moved, updated or deleted.
                </p>
                <div className="mt-8 flex items-center justify-center">
                    <Button
                        text="Back to Home"
                        type="button"
                        size="md"
                        variant="primary"
                        click={() => router.push(`/`)}
                    />
                </div>
            </div>
        </>
    )
}

Error404.error = true
export default Error404
