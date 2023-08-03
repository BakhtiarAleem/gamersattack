import React from 'react'
import Button from '@/components/base/Button'
import Separator from '@/components/Separator'
import CheckBox from '@/components/base/CheckBox'

const ReportLiveStream = () => {
    return (
        <div className="w-full p-[42px]">
            <h3 className="mt-3">Report Live Stream</h3>
            <div className="w-full">
                <span className="flex text-sm text-interface-300 mobile:block">
                    You are reporting&nbsp;
                    <span className="text-common-white">IamKhaleel</span>
                    &nbsp;for the current live stream.
                </span>
                <Separator modification="mt-3" />
            </div>
            <div className="mb-6">
                <h5>Why are you submitting this report?</h5>
                <div className="rounded-lg border border-interface-700 bg-interface-800">
                    <div className="border-b border-interface-700 p-3">
                        <CheckBox
                            id="violence"
                            name="violence"
                            label="Violence or Gore"
                        />
                    </div>
                    <div className="border-b border-interface-700 p-3">
                        <CheckBox
                            id="bullying"
                            name="bullying"
                            label="Bullying or Harassment"
                        />
                    </div>
                    <div className="border-b border-interface-700 p-3">
                        <CheckBox
                            id="hatefulConduct"
                            name="hatefulConduct"
                            label="Hateful Conduct"
                        />
                    </div>
                    <div className="border-b border-interface-700 p-3">
                        <CheckBox
                            id="selfHarm"
                            name="selfHarm"
                            label="Self-Harm"
                        />
                    </div>
                    <div className="border-b border-interface-700 p-3">
                        <CheckBox
                            id="nudityExplicit"
                            name="nudityExplicit"
                            label="Nudity or Sexually Explicit"
                        />
                    </div>
                    <div className="border-b border-interface-700 p-3">
                        <CheckBox
                            id="spam"
                            name="spam"
                            label="Spam, Scams, or Bots"
                        />
                    </div>
                    <div className="border-interface-700 p-3">
                        <CheckBox
                            id="terrorism"
                            name="terrorism"
                            label="Terrorism"
                        />
                    </div>
                </div>
            </div>
            <div>
                <Button
                    variant="primary"
                    text="Submit"
                    size="md"
                    modification="w-full justify-center"
                    labelSize="text-base"
                />
            </div>
        </div>
    )
}

export default ReportLiveStream
