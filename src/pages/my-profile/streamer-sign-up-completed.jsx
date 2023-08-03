import Head from 'next/head'
import { Formik, Form } from 'formik'
import { useMemo } from 'react'
import Button from '@/components/base/Button'
import CopyClipboard from '@/components/base/CopyClipboard'

const StreamerSignUpCompleted = () => {
    const initialState = useMemo(
        () => ({
            username: '',
            displayName: '',
            shortBio: '',
        }),
        []
    )
    return (
        <div className="p-6">
            <Head>
                <title>{`Streaming Center | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
            </Head>
            <h1 className="mb-6 mobile:text-2xl">Thank you</h1>

            <Formik initialValues={initialState}>
                {() => {
                    return (
                        <Form noValidate>
                            <div className="default-card max-w-[768px] mobile:p-5">
                                <h3>
                                    Your streamer account has been created
                                    successfully!
                                </h3>
                                <p className="mb-6 text-base text-interface-300 mobile:text-sm">
                                    Please enter the following information into
                                    your broadcasting software (OBS) to start
                                    streaming. To learn more about how to
                                    stream,{' '}
                                    <a
                                        href="#"
                                        className="text-primary-500 hover:underline"
                                    >
                                        click here
                                    </a>
                                    .
                                </p>
                                <div>
                                    <CopyClipboard
                                        label="Stream URL"
                                        value="················································"
                                    />
                                </div>
                                <div>
                                    <CopyClipboard
                                        label="Secret Key"
                                        value="················································"
                                    />
                                </div>
                                <p className="mb-0 text-base mobile:text-sm">
                                    Please do not share your secret key with
                                    anyone, since it allows anyone to stream to
                                    the channel.
                                </p>
                            </div>
                            <div className="flex mobile:flex-col">
                                <div>
                                    <Button
                                        variant="primary"
                                        text="Continue"
                                        type="button"
                                        link="/streamer/live?online=true"
                                        modification="w-[184px] mobile:w-full"
                                        semiBold
                                    />
                                </div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default StreamerSignUpCompleted
