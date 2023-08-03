import { useRouter } from 'next/router'
import Button from '@/components/base/Button'

const GuestSession = (props) => {
    const router = useRouter()
    return (
        <div className="flex gap-4 ipad:items-center">
            <div className="ipad:hidden">
                <Button
                    click={props.click}
                    variant="outline-secondary"
                    text="Streaming Center"
                    size="sm"
                    icon="lightning-bolt"
                    modification="px-3"
                />
            </div>
            <i
                onClick={() => router.push('/streaming-center')}
                className="icon-lightning-bolt relative top-0 ml-4 -mr-3 hidden cursor-pointer text-2xl hover:text-primary-500 ipad:inline-block mobile:top-0"
            ></i>
            <div className="ipad:hidden">
                <Button
                    click={props.click}
                    variant="primary"
                    text="Log In"
                    size="sm"
                    modification="px-4"
                />
            </div>
            <div className="hidden text-2xl ipad:flex">
                <Button
                    click={props.click}
                    variant="link"
                    text=""
                    size="sm"
                    icon="avatar"
                    modification="px-4 pr-0"
                    iconStyle="text-3xl"
                />
            </div>
        </div>
    )
}

export default GuestSession
