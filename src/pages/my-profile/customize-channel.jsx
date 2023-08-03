import Head from 'next/head'
import { Formik, Form } from 'formik'
import { useMemo } from 'react'
import TextBox from '@/components/base/TextBox'
import UploadPhoto from '@/components/base/UploadPhoto'
import UploadCoverPhoto from '@/components/base/UploadCoverPhoto'
import TextArea from '@/components/base/TextArea'
import CustomSelect from '@/components/CustomSelect'
import PhoneNumberField from '@/components/base/PhoneNumberField'
// import GoogleButton from '@/components/base/GoogleButton'
import Button from '@/components/base/Button'
import LinkButton from '@/components/base/LinkButton'

import customizechannel from '@/validations/customize-channel'

const CustomizeProfile = () => {
    const initialState = useMemo(
        () => ({
            raptrID: '',
            displayName: '',
            shortBio: '',
            tags: '',
            mobileNumber: '',
            email: '',
        }),
        []
    )
    const tags = [
        { label: 'Pubg Mobile', value: 'a' },
        { label: 'GTA 5', value: 'b' },
        { label: 'PS4', value: 'c' },
        { label: 'Valorant', value: 'd' },
        { label: 'Dota 2', value: 'e' },
        { label: 'Apex Legends', value: 'f' },
    ]

    return (
        <div className="p-6">
            <Head>
                <title>{`Customize Your Channel | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
            </Head>
            <h1 className="mb-6">Customize your channel</h1>

            <Formik
                initialValues={initialState}
                validateOnChange
                validationSchema={customizechannel}
            >
                {() => {
                    return (
                        <Form noValidate>
                            <div className="default-card max-w-[768px]">
                                <h4>Branding</h4>
                                <div className="grid grid-cols-2 gap-4 gap-y-0">
                                    <div className="mobile:col-span-2">
                                        <TextBox
                                            id="raptrID"
                                            name="raptrID"
                                            label="Raptr ID"
                                            type="text"
                                            variant="light"
                                            placeholder="Enter your raptr id"
                                        />
                                    </div>
                                    <div className="mobile:col-span-2">
                                        <TextBox
                                            id="displayName"
                                            name="displayName"
                                            label="Display Name"
                                            type="text"
                                            variant="light"
                                            placeholder="Enter display name"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <UploadPhoto label="Photo" />
                                    </div>
                                    <div className="col-span-2">
                                        <UploadCoverPhoto
                                            label="Cover Photo"
                                            noSpace
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="default-card max-w-[768px]">
                                <h4>About</h4>
                                <div className="grid grid-cols-2 gap-4 gap-y-0">
                                    <div className="col-span-2">
                                        <TextArea
                                            id="shortBio"
                                            name="shortBio"
                                            label="Short Bio"
                                            type="text"
                                            placeholder="Write description for the about section in under 300 characters"
                                        />
                                    </div>
                                    <div className="relative col-span-2">
                                        <span className="absolute right-0 text-sm">
                                            You can choose upto 5 tags
                                        </span>
                                        <CustomSelect
                                            id="tags"
                                            name="tags"
                                            label="Tags"
                                            options={tags}
                                            placeholder="Select tags"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="default-card max-w-[768px]">
                                <h4>Linked Contact</h4>
                                <div className="grid grid-cols-1 gap-4 gap-y-0">
                                    <div className="relative">
                                        <div className="absolute right-4 top-[40px] z-[2]">
                                            <LinkButton label="LINK" />
                                        </div>
                                        <PhoneNumberField
                                            id="mobileNumber"
                                            name="mobileNumber"
                                            label="Phone number"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="absolute right-4 top-[40px] z-[1]">
                                            <LinkButton label="LINKED" />
                                        </div>
                                        <TextBox
                                            id="email"
                                            name="email"
                                            label="Email address"
                                            type="email"
                                            placeholder="Enter email address"
                                            noSpace
                                        />
                                    </div>
                                    {/* <div>
                                        <div>
                                            <p className="mb-[6px] text-base font-semibold">
                                                Google
                                            </p>
                                        </div>
                                        <GoogleButton />
                                    </div> */}
                                </div>
                            </div>
                            <div className="flex mobile:flex-col">
                                <div className="mobile:mb-4">
                                    <Button
                                        variant="primary"
                                        text="Save & Continue"
                                        type="button"
                                        link="/my-profile"
                                        modification="w-[184px] mobile:w-full"
                                        semiBold
                                    />
                                </div>
                                <div className="pl-4 mobile:pl-0">
                                    <Button
                                        variant="dark"
                                        text="Cancel, go back"
                                        type="button"
                                        link="/my-profile"
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

export default CustomizeProfile
