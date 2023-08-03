import { Formik, Form } from 'formik'
import Link from 'next/link'
import CopyClipboard from '@/components/base/CopyClipboard'
import Button from '@/components/base/Button'

const StreamingInfo = () => {
    return (
        <div>
            <div className="p-[42px] mobile:p-[24px]">
                <h3 className="mb-3 text-xl">Streaming Information</h3>
                <Formik>
                    {() => {
                        return (
                            <Form noValidate>
                                <div className="grid grid-cols-1 gap-4 gap-y-0">
                                    <div>
                                        <p className="mb-6 text-base text-interface-300">
                                            Please enter the following
                                            information into your broadcasting
                                            software (OBS) to start streaming.
                                            To learn more about how to stream,{' '}
                                            <Link href="#">
                                                <a>click here</a>
                                            </Link>
                                            .
                                        </p>
                                    </div>
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
                                    <div>
                                        <p className="mb-6 text-base text-common-white">
                                            Please do not share your secret key
                                            with anyone, since it allows anyone
                                            to stream to the channel.
                                        </p>
                                    </div>
                                    <div>
                                        <Button
                                            variant="primary"
                                            text="Done"
                                            type="button"
                                            modification="w-full"
                                            semiBold
                                        />
                                    </div>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default StreamingInfo
