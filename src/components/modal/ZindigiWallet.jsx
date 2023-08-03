import { Formik, Form } from 'formik'
import { useMemo, useState } from 'react'

import TextBox from '@/components/base/TextBox'
import Button from '@/components/base/Button'

import zindigi from '@/validations/zindigi-wallet'

const ZindigiWallet = (props) => {
    const initialState = useMemo(
        () => ({
            registerMobile: null,
        }),
        []
    )
    const [steps, setSteps] = useState(1)
    return (
        <div>
            <div className="p-[42px] mobile:p-[24px]">
                {steps === 1 && (
                    <div>
                        <h3 className="mb-3 text-xl">
                            Connect to your Zindigi Wallet
                        </h3>
                        <p className="mb-6 text-base text-interface-300">
                            Enter your registered mobile number
                        </p>
                    </div>
                )}
                {steps === 2 && (
                    <div>
                        <h3 className="mb-3 text-xl">OTP Verification</h3>
                        <p className="mb-6 text-base text-interface-300">
                            Enter 6 digit OTP code sent to +92 3008479027
                        </p>
                    </div>
                )}
                {steps === 3 && (
                    <div>
                        <h3 className="mb-3 text-xl">Confirmation</h3>
                        <p className="mb-6 text-base text-interface-300">
                            Are your sure you want to tip{' '}
                            <span className="font-semibold">PKR 500</span> to{' '}
                            <span className="font-semibold">IamKhaleel?</span>
                        </p>
                    </div>
                )}
                {steps === 4 && (
                    <div>
                        <h3 className="mb-3 text-xl">
                            Transaction completed successfully
                        </h3>
                        <p className="mb-6 text-base text-interface-300">
                            Thank you for supporting IamKhaleel. Your
                            transaction has been completed successfully.
                        </p>
                    </div>
                )}
                <Formik
                    initialValues={initialState}
                    validateOnChange
                    validationSchema={zindigi}
                >
                    {() => {
                        return (
                            <Form noValidate>
                                {steps === 1 && (
                                    <div className="grid grid-cols-1 gap-4 gap-y-0">
                                        <div>
                                            <TextBox
                                                id="registerMobile"
                                                name="registerMobile"
                                                type="number"
                                                placeholder="Enter Mobile Number"
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                variant="primary"
                                                text="Continue"
                                                type="button"
                                                click={() => setSteps(2)}
                                                modification="w-full"
                                                semiBold
                                            />
                                        </div>
                                    </div>
                                )}
                                {steps === 2 && (
                                    <div className="grid grid-cols-1 gap-4 gap-y-0">
                                        <div>
                                            <TextBox
                                                id="otp"
                                                name="otp"
                                                type="number"
                                                placeholder="Enter OTP Number"
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                variant="primary"
                                                text="Continue"
                                                type="button"
                                                click={() => setSteps(3)}
                                                modification="w-full"
                                                semiBold
                                            />
                                        </div>
                                    </div>
                                )}
                                {steps === 3 && (
                                    <div className="grid grid-cols-1 gap-4 gap-y-0">
                                        <div className="mb-3">
                                            <Button
                                                variant="primary"
                                                text="Yes, Continue"
                                                type="button"
                                                click={() => setSteps(4)}
                                                modification="w-full"
                                                semiBold
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                variant="link"
                                                text="No, Go back"
                                                type="button"
                                                click={() => setSteps(2)}
                                                modification="w-full text-sm"
                                            />
                                        </div>
                                    </div>
                                )}
                                {steps === 4 && (
                                    <div className="grid grid-cols-1 gap-4 gap-y-0">
                                        <div>
                                            <Button
                                                variant="primary"
                                                text="Finish"
                                                type="button"
                                                click={props.dataSubmission}
                                                modification="w-full"
                                                semiBold
                                            />
                                        </div>
                                    </div>
                                )}
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default ZindigiWallet
