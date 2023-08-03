import map from 'lodash/map'
import Separator from '@/components/Separator'
import Button from '@/components/base/Button'
import CustomTabRadio from '@/components/base/CustomTabRadio'
const AmountPopover = (props) => {
    const tips = [
        {
            amount: 50,
        },
        {
            amount: 100,
        },
        {
            amount: 250,
        },
        {
            amount: 500,
        },
        {
            amount: 750,
        },
        {
            amount: 1000,
        },
    ]
    return (
        <div className="absolute bottom-[95px] right-0 w-full bg-interface-700">
            <div>
                <h5 className="sticker-title">Send tips to IamKhaleel</h5>
                <div
                    onClick={props.close}
                    className="absolute right-4 top-[8px] flex h-[27px] w-[27px] cursor-pointer items-center justify-center rounded-full bg-theme-dark-900"
                >
                    <i className="icon-close"></i>
                </div>
                <div className={`p-4`}>
                    <p className="mb-4 text-xs text-common-white">
                        Tips are a way to support streamers. Everytime you give
                        tips, the creator you love get paid.
                    </p>
                    <Separator modification="bg-interface-600 mb-4" />
                    <div className="grid grid-cols-3 gap-4">
                        {map(tips, (item, index) => (
                            <CustomTabRadio
                                key={index}
                                amount={item.amount}
                                id={index}
                                name="amount"
                            />
                        ))}
                    </div>
                    <div className="mt-4">
                        <Button
                            variant="primary"
                            text="Pay via Credit or Debit Card"
                            size="xs"
                            modification="w-full pl-[25px] mb-4 justify-start"
                            image="/storage/card.svg"
                            click={props.payDebit}
                            imageWidth={50}
                            imageHeight={24}
                            labelSize="text-sm"
                            imageModification="absolute right-[12px]"
                        />
                    </div>
                    <div>
                        <Button
                            variant="white"
                            text="Pay via Zindigi Wallet"
                            size="xs"
                            click={props.payZindigiWallet}
                            modification="w-full pl-[25px] justify-start"
                            image="/storage/zindagi.png"
                            imageWidth={77}
                            imageHeight={20}
                            labelSize="text-sm"
                            imageModification="absolute right-[12px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmountPopover
