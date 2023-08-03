import { useState, useEffect } from 'react'
import { theme } from '../../../tailwind.config'
import DataTable from 'react-data-table-component'
import Button from '@/components/base/Button'
// import NoRecordFound from '@/components/base/NoRecordFound'

const Table = ({
    columns,
    data,
    dataPlaceholder,
    fixedHeader,
    noHeader,
    fixedHeaderScrollHeight,
    modification,
    waitBeforeShow = 500,
    smallFont,
    noRecordHeight,
    loadMore,
    loadText,
}) => {
    const [isShown, setIsShown] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsShown(true)
        }, waitBeforeShow)
    }, [waitBeforeShow])
    const customStyles = {
        rows: {
            style: {
                minHeight: '52px',
                fontSize: smallFont ? '12px' : '14px',
                backgroundColor: theme.colors.interface[100],
            },
        },
        headCells: {
            style: {
                paddingLeft: '24px', // override the cell padding for head cells
                paddingRight: '24px',
                fontSize: smallFont ? '12px' : '14px',
                fontWeight: 600,
                backgroundColor: theme.colors.interface[100],
                color: theme.colors.interface[600],
                textTransform: 'uppercase',
            },
        },
        cells: {
            style: {
                paddingLeft: '24px', // override the cell padding for data cells
                paddingRight: '24px',
            },
        },
    }

    return (
        <div>
            <div>
                <div
                    className={`base-table transition-all ${
                        noHeader ? 'hideHeader ' : ''
                    }${modification} ${smallFont ? 'table-font-small' : ''}`}
                >
                    {/* Table*/}
                    {isShown && data && (
                        <DataTable
                            columns={columns}
                            data={data}
                            customStyles={customStyles}
                            striped={true}
                            fixedHeader={fixedHeader}
                            fixedHeaderScrollHeight={fixedHeaderScrollHeight}
                            noDataComponent=""
                        />
                    )}
                    {isShown && !data.length && (
                        <div className="table-placeholder transition-all">
                            <DataTable
                                columns={columns}
                                data={dataPlaceholder}
                                customStyles={customStyles}
                                striped={true}
                                fixedHeader={fixedHeader}
                                fixedHeaderScrollHeight={
                                    fixedHeaderScrollHeight
                                }
                                noDataComponent=""
                            />
                        </div>
                    )}
                    {/* No record found*/}
                    {!data.length && (
                        <div
                            className={`flex items-center justify-center ${
                                noRecordHeight ? noRecordHeight : 'h-[255px]'
                            }`}
                        >
                            {/* <NoRecordFound imgWidth="w-[130px]" /> */}
                        </div>
                    )}
                    {loadMore && (
                        <div className="flex w-full items-center justify-center border-t border-interface-700 py-[6px]">
                            <Button
                                text={loadText}
                                variant="link"
                                labelSize="text-sm text-primary-500"
                                modification="p-0"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Table
