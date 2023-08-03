import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/base/Button'
import map from 'lodash/map'
const CategoryDetail = (props) => {
    // const [moreInfo, setMoreInfo] = useState(false)

    return (
        <>
            <div className="mb-6 flex mobile:flex-col">
                {props.image && (
                    <div className="w-[150px] overflow-hidden rounded-md bg-interface-700 mobile:m-auto">
                        <Image
                            src={props.image}
                            alt={props.title}
                            layout="responsive"
                            width={150}
                            height={200}
                        />
                    </div>
                )}

                <div className="w-[calc(100%-150px)] pl-6 mobile:mt-[15px] mobile:w-full mobile:pl-0 mobile:text-center">
                    <h1 className="mb-3">{props.title}</h1>
                    <div className="flex mobile:justify-center">
                        <h6 className="mb-3 mr-[18px]">
                            {props.viewers} viewers
                        </h6>
                        <div className="relative mr-[22px]">
                            <span className="absolute top-[8px] block h-[5px] w-[5px] rounded-full bg-interface-400 text-[60px]"></span>
                        </div>
                        <ul className="flex">
                            {map(props.tags, (tag, index) => (
                                <li key={index} className="mr-1.5">
                                    <span className="flex h-5 items-center justify-center rounded bg-interface-700 px-1.5 text-xs font-medium">
                                        <Link href="/search">
                                            <a className="text-common-white">
                                                {tag.text}
                                            </a>
                                        </Link>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="max-w-[646px]">
                        <p className="mb-3 text-sm">
                            {props.description.length > 257 && (
                                <span
                                    className="cursor-pointer"
                                    // onClick={() => setMoreInfo(true)}
                                >
                                    {props.description.substring(0, 257)} ...
                                    <span className="text-sea-500 ml-[4px] inline-block cursor-pointer text-primary-400">
                                        more
                                    </span>
                                </span>
                            )}
                        </p>
                        <Button
                            variant="secondary"
                            text="Share"
                            size="sm"
                            icon="share"
                            iconStyle="mr-2 text-lg"
                            modification="w-[96px] h-[36px] rounded-md mobile:m-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryDetail
