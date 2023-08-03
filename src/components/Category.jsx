import Link from 'next/link'
import Image from 'next/image'
const Category = (props) => {
    return (
        <>
            <div
                className={` relative mb-6 ${
                    props.placeholder ? 'animate-pulse' : ''
                } ${props.hideZoomEffect ? '' : 'zoom-effect'} `}
            >
                {!props.placeholder && (
                    <Link href="/category/_id">
                        <a className="absolute left-0 right-0 z-[9] h-full w-full"></a>
                    </Link>
                )}
                <div className="w-full overflow-hidden rounded-md bg-interface-700 shadow-thumnails">
                    <Image
                        src={props.image}
                        alt={props.title}
                        layout="responsive"
                        width={540}
                        height={720}
                    />
                </div>
                <h6
                    className={`mt-2 mb-0.5 font-semibold text-common-white  ${
                        props.placeholder
                            ? 'font-redacted text-interface-500'
                            : ''
                    }`}
                >
                    {props.title}
                </h6>
                <p
                    className={`text-sm  ${
                        props.placeholder
                            ? 'font-redacted text-interface-500'
                            : 'text-interface-400'
                    }`}
                >
                    {props.viewers}
                </p>
            </div>
        </>
    )
}

export default Category
