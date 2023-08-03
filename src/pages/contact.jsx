import React, { useMemo } from 'react'
import { Formik, Form } from 'formik'
import Head from 'next/head'
import TextBox from '@/components/base/TextBox'
import TextArea from '@/components/base/TextArea'
import PhoneNumberField from '@/components/base/PhoneNumberField'
import Button from '@/components/base/Button'
import contact from '@/validations/contact'
import styles from '@/styles/Input.module.css'

const Contact = () => {
    const initialState = useMemo(
        () => ({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            company: '',
            country: '',
            message: '',
        }),
        []
    )
    return (
        <>
            <Head>
                <title>{`Contact Us | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
            </Head>
            <div className="container">
                <div className="static-pages-body-padding">
                    <h1 className="static-pages-main-heading">Contact</h1>

                    <div className="default-card max-w-[768px]">
                        <div className="static-pages">
                            <div className="w-full flex-col">
                                <div className="mb-6">
                                    <p className="text-lg font-medium text-common-white">
                                        Please fill out the form below and
                                        we&apos;ll get back to you soon.
                                    </p>
                                </div>
                                <div>
                                    <Formik
                                        initialValues={initialState}
                                        validateOnChange
                                        validationSchema={contact}
                                    >
                                        {() => {
                                            return (
                                                <Form noValidate>
                                                    <div className="tablet:block grid grid-cols-3 gap-3 gap-y-0 mobile:block">
                                                        <div>
                                                            <TextBox
                                                                id="firstName"
                                                                name="firstName"
                                                                type="text"
                                                                label="Name"
                                                                placeholder="Enter your name"
                                                            />
                                                        </div>
                                                        <div>
                                                            <TextBox
                                                                id="email"
                                                                name="email"
                                                                type="email"
                                                                label="Email"
                                                                placeholder="Enter your email address"
                                                            />
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.phoneInput
                                                            }
                                                        >
                                                            <PhoneNumberField
                                                                id="phoneNumber"
                                                                name="phoneNumber"
                                                                label="Phone no."
                                                                placeholder="Enter your phone no."
                                                            />
                                                        </div>
                                                        <div className="col-span-3">
                                                            <TextArea
                                                                id="message"
                                                                name="message"
                                                                type="text"
                                                                label="Message"
                                                                placeholder="Start typing your message"
                                                                rows="4"
                                                            />
                                                        </div>
                                                    </div>
                                                </Form>
                                            )
                                        }}
                                    </Formik>
                                    <div className="mb-2">
                                        <Button
                                            text="Submit"
                                            type="button"
                                            variant="primary"
                                            size="md"
                                            modification="px-4 min-w-[130px] mobile:w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
