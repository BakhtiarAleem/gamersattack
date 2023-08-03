import { useMemo } from 'react'
import { Formik, Form } from 'formik'
import TextBox from '@/components/base/TextBox'
import Button from '@/components/base/Button'
import authValidation from '@/validations/auth-validation'

const AuthMobileConnect = ({ request, back }) => {
    const initialState = useMemo(
        () => ({
            mobileNumber: '',
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
                        <div className="p-[42px] mobile:p-[24px]">
                            <h3 className="mb-3 text-center text-xl">
                                Continue with mobile number
                            </h3>
                            <p className="mb-6 text-center text-base text-interface-300">
                                Please enter your mobile number
                            </p>
                            <TextBox
                                id="mobileNumber"
                                name="mobileNumber"
                                type="number"
                                placeholder="Enter Mobile No"
                            />
                            <Button
                                click={request}
                                variant="primary"
                                text="Request OTP"
                                size="md"
                                modification="w-full mb-6"
                                semiBold
                            />
                            <div
                                onClick={back}
                                className="mt-6 w-full cursor-pointer text-center text-interface-300"
                            >
                                <p>Go back</p>
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default AuthMobileConnect
