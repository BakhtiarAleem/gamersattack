import React from 'react'
import Table from '@/components/base/Table'

const PayoutSummary = () => {
    const columns = [
        {
            name: '',
            cell: (row) => (
                <div className="flex cursor-pointer items-center">
                    <div>{row.summaryTitle}</div>
                </div>
            ),
        },

        {
            name: '',
            minWidth: '80px',
            right: true,
            wrap: 'true',
            selector: (row) => (
                <div className="rounded-3xl bg-interface-700 px-2 py-[2px] text-sm">
                    {row.earning}
                </div>
            ),
        },
    ]
    const data = [
        {
            summaryTitle: 'Total Earning',
            earning: 'PKR 22,950',
        },
        {
            summaryTitle: 'Total payment disburse to your wallet',
            earning: 'PKR 17,000',
        },
        {
            summaryTitle: 'Pending payout',
            earning: 'PKR 3,500',
        },
    ]
    return (
        <div className="my-4 ">
            <div className="relative mb-4">
                <p>PAYOUT SUMMARY</p>
            </div>
            <div className="mt-4">
                <div className="style-table-two header-hidden">
                    <Table
                        data={data}
                        columns={columns}
                        loadMore={true}
                        loadText="Learn more about how to access your funds"
                        noHeader
                    />
                </div>
            </div>
        </div>
    )
}

export default PayoutSummary
