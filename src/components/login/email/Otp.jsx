import { useMemo } from 'react'
import { Formik, Form } from 'formik'
import TextBox from '@/components/base/TextBox'
import Link from 'next/link'
import Button from '@/components/base/Button'
import authValidation from '@/validations/auth-validation'

const AuthEmailOtp = ({ otpContinue }) => {
    const initialState = useMemo(
        () => ({
            otp: '',
        }),
        []
    )
    return (
        <Formik
            initialValues={initialState}
            validateOnChange
            validationSchema={authValidation}
        >
            {() => {
                return (
                    <Form noValidate>
                        <div className="p-[42px] mobile:p-[25px]">
                            <h3 className="mb-3 text-center text-xl">
                                Enter OTP
                            </h3>
                            <p className="mb-6 text-center text-base text-interface-300">
                                Enter 6 digit OTP code sent to{' '}
                                <Link href="mailto:aris@cygismedia.com">
                                    <a>aris@cygismedia.com</a>
                                </Link>
                            </p>
                            <TextBox
                                id="otp"
                                name="otp"
                                type="number"
                                placeholder="Enter OTP"
                            />
                            <Button
                                click={otpContinue}
                                variant="primary"
                                text="Continue"
                                size="md"
                                modification="w-full mb-6"
                                semiBold
                            />
                            <div className="mt-6 text-center">
                                <p className="text-interface-300">
                                    Not received OTP code yet? Resend OTP code
                                </p>
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default AuthEmailOtp
