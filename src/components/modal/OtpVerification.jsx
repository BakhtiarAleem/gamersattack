import { Formik, Form } from 'formik'
import { useMemo } from 'react'

import TextBox from '@/components/base/TextBox'
import Button from '@/components/base/Button'

import otp from '@/validations/otp-verification'

const OtpVerification = (props) => {
    const initialState = useMemo(
        () => ({
            otp: null,
        }),
        []
    )
    return (
        <div>
            <div className="p-[42px] mobile:p-[24px]">
                <h3 className="mb-3 text-xl">OTP Verification</h3>
                <p className="mb-6 text-base">
                    Enter 6 digit OTP code sent to +92 3008479027
                </p>
                <Formik
                    initialValues={initialState}
                    validateOnChange
                    validationSchema={otp}
                >
                    {() => {
                        return (
                            <Form noValidate>
                                <div className="grid grid-cols-1 gap-4 gap-y-0">
                                    <div>
                                        <TextBox
                                            id="otp"
                                            name="otp"
                                            type="number"
                                            placeholder="Enter OTP"
                                        />
                                    </div>
                                    <div>
                                        <Button
                                            variant="primary"
                                            text="Continue"
                                            click={props.dataSubmission}
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

export default OtpVerification
