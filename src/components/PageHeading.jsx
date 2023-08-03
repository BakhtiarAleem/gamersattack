import Link from 'next/link'
const PageHeading = (props) => {
    return (
        <>
            <div className="flex">
                <div>
                    <h2
                        className="page-heading mb-6 text-base font-semibold mobile:mb-3"
                        dangerouslySetInnerHTML={{
                            __html: props.heading,
                        }}
                    ></h2>
                </div>
                <div className="ml-auto text-common-white">
                    {props.linkName && (
                        <Link href={props.link}>
                            <a className="text-common-white">
                                {props.linkName}
                                <i className="icon-double-arrow relative top-[2px] pl-1 text-sm" />
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}

export default PageHeading
