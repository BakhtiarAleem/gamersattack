import { useMemo } from 'react'
import { Formik, Form } from 'formik'
import TextBox from '@/components/base/TextBox'
import Button from '@/components/base/Button'
import authValidation from '@/validations/auth-validation'

const AuthEmailConnect = ({ finish }) => {
    const initialState = useMemo(
        () => ({
            raptrId: '',
            displayName: '',
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
                            <h3 className="mb-6 text-center text-xl">
                                Complete your profile
                            </h3>
                            <div className="mb-4">
                                <TextBox
                                    id="raptrId"
                                    name="raptrId"
                                    label="Raptr ID"
                                    type="text"
                                    placeholder="Enter Raptr ID"
                                    noSpace
                                />
                            </div>
                            <div className="mb-6">
                                <TextBox
                                    id="displayName"
                                    name="displayName"
                                    label="Display name"
                                    type="text"
                                    placeholder="Enter Display name"
                                    noSpace
                                />
                            </div>
                            <Button
                                click={finish}
                                variant="primary"
                                text="Finish"
                                size="md"
                                modification="w-full mb-0"
                                semiBold
                            />
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default AuthEmailConnect
