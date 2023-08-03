import Image from 'next/image'
const CustomTabRadio = (props) => {
    return (
        <div className="relative" onClick={props.close}>
            <input
                type="radio"
                name={props.name}
                id={props.id}
                className="input-thumbnail"
            />
            <div
                className={`default-card sticker-card mb-0 flex w-full cursor-pointer flex-col items-center justify-center ${
                    props.amount ? 'h-[85px]' : ''
                }`}
            >
                <label htmlFor={props.id} className="w-full">
                    {props.amount && (
                        <h5 className="amount mb-0 flex flex-col text-center text-lg">
                            <span className="text-sm font-normal text-interface-300">
                                PKR
                            </span>
                            {props.amount}
                        </h5>
                    )}
                    {props.src && (
                        <Image
                            alt={props.name}
                            src={props.src}
                            layout="responsive"
                            width={120}
                            height={120}
                        />
                    )}
                </label>
            </div>
        </div>
    )
}

export default CustomTabRadio
