import Link from 'next/link'
import Image from 'next/image'

const Logo = ({ width = 80, height = 76, link = '/' }) => {
    return (
        <div className="logo">
            <Link href={link}>
                <a>
                    <Image
                        src="/logo.svg"
                        alt={process.env.NEXT_PUBLIC_APP_NAME}
                        layout="responsive"
                        width={width}
                        height={height}
                    />
                </a>
            </Link>
        </div>
    )
}

export default Logo
