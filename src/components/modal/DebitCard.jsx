import { Formik, Form } from 'formik'
import { useMemo, useState } from 'react'

import TextBox from '@/components/base/TextBox'
import Button from '@/components/base/Button'

import DebitCardValidations from '@/validations/streamer-signup'

const DebitCard = (props) => {
    const initialState = useMemo(
        () => ({
            cardName: '',
            cardNumber: '',
            month: '',
            year: '',
            cvv: '',
        }),
        []
    )
    const [transicationVerification, setTransicationVerification] =
        useState(false)
    return (
        <div>
            {!transicationVerification && (
                <div className="p-[42px] mobile:p-[24px]">
                    <h3 className="mb-3 text-xl">Pay via Credit/Debit Card</h3>
                    <p className="mb-6 text-base">
                        Pay tip <span className="font-semibold">PKR 500</span>{' '}
                        to <span className="font-semibold">IamKhaleel</span>
                    </p>
                    <Formik
                        initialValues={initialState}
                        validateOnChange
                        validationSchema={DebitCardValidations}
                    >
                        {() => {
                            return (
                                <Form noValidate>
                                    <div className="grid grid-cols-1 gap-4 gap-y-0">
                                        <div>
                                            <TextBox
                                                id="cardName"
                                                label="Cardholder name"
                                                name="cardName"
                                                type="text"
                                                placeholder="Enter card holder name"
                                            />
                                        </div>
                                        <div>
                                            <TextBox
                                                id="cardNumber"
                                                label="Card number"
                                                name="cardNumber"
                                                type="number"
                                                placeholder="---- ---- ---- ----"
                                            />
                                        </div>
                                        <div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="col-span-2">
                                                            <label className="-mb-1 block text-base font-semibold text-common-white">
                                                                Expiration date
                                                            </label>
                                                        </div>
                                                        <TextBox
                                                            id="month"
                                                            name="month"
                                                            type="number"
                                                            placeholder="MM"
                                                        />
                                                        <TextBox
                                                            id="year"
                                                            name="year"
                                                            type="number"
                                                            placeholder="YYYY"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <TextBox
                                                        id="cvv"
                                                        label="Security code (CVV)"
                                                        name="cvv"
                                                        type="number"
                                                        placeholder="----"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Button
                                                variant="primary"
                                                text="Continue"
                                                click={() =>
                                                    setTransicationVerification(
                                                        true
                                                    )
                                                }
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
            )}
            {transicationVerification && (
                <div className="p-[42px]">
                    <h3 className="mb-3 text-xl">
                        Transaction completed successfully
                    </h3>
                    <p className="mb-6 text-base">
                        Thank you for supporting IamKhaleel. Your transaction
                        has been completed successfully.
                    </p>
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
            )}
        </div>
    )
}

export default DebitCard
