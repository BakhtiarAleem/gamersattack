import { useMemo } from 'react'
import { Formik, Form } from 'formik'
import TextBox from '@/components/base/TextBox'
import Button from '@/components/base/Button'
import authValidation from '@/validations/auth-validation'

const AuthEmailConnect = ({ request, back }) => {
    const initialState = useMemo(
        () => ({
            email: '',
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
                                Continue with email address
                            </h3>
                            <p className="mb-6 text-center text-base text-interface-300">
                                Please enter your email address
                            </p>
                            <TextBox
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter Email"
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

export default AuthEmailConnect
