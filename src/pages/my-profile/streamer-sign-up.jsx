import { Formik, Form } from 'formik'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import TextBox from '@/components/base/TextBox'
import SelectBox from '@/components/base/SelectBox'
import PhoneNumberField from '@/components/base/PhoneNumberField'
import DatePicker from '@/components/base/DatePicker'
import Button from '@/components/base/Button'
import BaseModal from '@/components/base/Modal'
import OtpVerification from '@/components/modal/OtpVerification'

import streamersignup from '@/validations/streamer-signup'

const gender = [
    { key: 'male', text: 'Male' },
    { key: 'female', text: 'Female' },
]
const StreamerSignUp = () => {
    const router = useRouter()
    const initialState = useMemo(
        () => ({
            firstName: '',
            lastName: '',
            gender: '',
            dateOfBirth: '',
            cnicNumber: '',
            mobileNumber: '',
            email: '',
        }),
        []
    )
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dataSubmission = () => {
        setIsModalOpen(!isModalOpen)
        router.push('streamer-sign-up-completed')
    }
    return (
        <div className="p-6">
            <Head>
                <title>{`Streaming Center | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
            </Head>
            <h1 className="mb-6 mobile:text-2xl">Streaming Center</h1>

            <Formik
                initialValues={initialState}
                validateOnChange
                validationSchema={streamersignup}
            >
                {() => {
                    return (
                        <Form noValidate>
                            <div className="default-card max-w-[768px] mobile:p-5">
                                <h4 className="mb-2">
                                    Raptr wallet creation information
                                </h4>
                                <p className="mb-6 text-interface-400">
                                    If you are under 18 years old, please
                                    provide details of your guardian.
                                </p>
                                <div className="grid grid-cols-2 gap-4 gap-y-0">
                                    <div className="mobile:col-span-2">
                                        <TextBox
                                            id="firtName"
                                            name="firstName"
                                            label="First name"
                                            type="text"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div className="mobile:col-span-2">
                                        <TextBox
                                            id="lastName"
                                            name="lastName"
                                            label="Last name"
                                            type="text"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                    <div className="mobile:col-span-2">
                                        <SelectBox
                                            label="Gender"
                                            id="gender"
                                            name="gender"
                                            textField="name"
                                            selectText="All Gender"
                                            valueField="id"
                                            options={gender}
                                        />
                                    </div>
                                    <div className="mobile:col-span-2">
                                        <DatePicker label="Date of birth" />
                                    </div>
                                    <div className="col-span-2">
                                        <TextBox
                                            id="cnicNumber"
                                            name="cnicNumber"
                                            label="CNIC"
                                            type="text"
                                            placeholder="Enter your valid Nadra CNIC"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <PhoneNumberField
                                            id="mobileNumber"
                                            name="mobileNumber"
                                            label="Phone number"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <TextBox
                                            id="email"
                                            name="email"
                                            label="Email address"
                                            type="email"
                                            placeholder="Enter your email address (optional)"
                                            noSpace
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex mobile:flex-col">
                                <div>
                                    <Button
                                        variant="primary"
                                        text="Continue"
                                        type="button"
                                        click={() => setIsModalOpen(true)}
                                        modification="w-[184px] mobile:w-full"
                                        semiBold
                                    />
                                </div>
                                <div className="pl-4 mobile:mt-1 mobile:pl-0">
                                    <Button
                                        variant="secondary"
                                        text="Cancel, go back"
                                        type="button"
                                        link="/my-profile"
                                        modification="w-[184px] mobile:w-full mobile:mt-2"
                                        semiBold
                                    />
                                </div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
            <BaseModal
                ModalBody={OtpVerification}
                isModalOpen={isModalOpen}
                toggleModal={() => setIsModalOpen(false)}
                dataSubmission={dataSubmission}
                size="sm"
                modification=""
                hideButton
            />
        </div>
    )
}

export default StreamerSignUp
