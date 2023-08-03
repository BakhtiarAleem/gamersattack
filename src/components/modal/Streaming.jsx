import { Formik, Form } from 'formik'
import { useMemo } from 'react'
import UploadCoverPhoto from '@/components/base/UploadCoverPhoto'
import CustomSelect from '@/components/CustomSelect'
import SelectBox from '@/components/base/SelectBox'
import TextBox from '@/components/base/TextBox'
import Button from '@/components/base/Button'

import streaming from '@/validations/streaming'

const ModalStreaming = (props) => {
    const tags = [
        { label: 'Pubg Mobile', value: 'a' },
        { label: 'GTA 5', value: 'b' },
        { label: 'PS4', value: 'c' },
        { label: 'Valorant', value: 'd' },
        { label: 'Dota 2', value: 'e' },
        { label: 'Apex Legends', value: 'f' },
    ]
    const categories = [
        { key: 'action', text: 'Action' },
        { key: 'adventure', text: 'Adventure' },
        { key: 'first person', text: 'First Person Shooter' },
        { key: 'strategy', text: 'Strategy' },
    ]
    const initialState = useMemo(
        () => ({
            title: '',
            category: '',
            tags: '',
        }),
        []
    )
    return (
        <div>
            <div className="p-[42px] mobile:p-[24px]">
                <h3 className="mb-5 text-xl">Start Streaming</h3>
                <Formik
                    initialValues={initialState}
                    validateOnChange
                    validationSchema={streaming}
                >
                    {() => {
                        return (
                            <Form noValidate>
                                <div className="grid grid-cols-1 gap-4 gap-y-0">
                                    <div>
                                        <TextBox
                                            id="title"
                                            name="title"
                                            label="Title"
                                            type="text"
                                            placeholder="Enter title"
                                        />
                                    </div>
                                    <div>
                                        <SelectBox
                                            label="Category"
                                            id="category"
                                            name="category"
                                            textField="name"
                                            selectText="Select category"
                                            valueField="id"
                                            options={categories}
                                        />
                                    </div>
                                    <div className="relative mb-4">
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
                                    <div className="mb-4">
                                        <UploadCoverPhoto
                                            label="Video Player Cover Photo"
                                            noSpace
                                        />
                                    </div>
                                    <div>
                                        <Button
                                            variant="primary"
                                            text="Continue"
                                            type="button"
                                            modification="w-full"
                                            click={props.dataSubmission}
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

export default ModalStreaming
