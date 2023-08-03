import React from 'react'
import Table from '@/components/base/Table'

const PayoutTransactions = () => {
    const columns = [
        {
            name: ' Transaction ID',
            cell: (row) => (
                <div className="flex cursor-pointer items-center">
                    <div className="w-[clac(100%-24px)]">
                        {row.transactionID}
                        <div className="text-sm text-interface-400">
                            {row.date}
                        </div>
                    </div>
                </div>
            ),
        },

        {
            name: ' Total Payout',
            minWidth: '80px',
            right: true,
            wrap: 'true',
            selector: (row) => (
                <div className="rounded-3xl bg-interface-700 px-2 py-[2px] text-sm">
                    {row.totalPayout}
                </div>
            ),
        },
    ]
    const data = [
        {
            transactionID: 'Total Earning',
            date: 'Sep 15, 2022',
            totalPayout: 'PKR 5,000',
        },
        {
            transactionID: 'Total payment disburse to your wallet',
            date: 'Sep 1, 2022',
            totalPayout: 'PKR 8,500',
        },
        {
            transactionID: 'Pending payout',
            date: 'Aug 15, 2022',
            totalPayout: 'PKR 3,500',
        },
    ]
    return (
        <div className="my-4 ">
            <div className="relative mb-4">
                <p>RECENT PAYOUT TRANSACTIONS</p>
            </div>
            <div className="mt-4">
                <div className="style-table-two">
                    <Table data={data} columns={columns} />
                </div>
            </div>
        </div>
    )
}

export default PayoutTransactions
