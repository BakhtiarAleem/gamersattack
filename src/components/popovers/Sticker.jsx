import map from 'lodash/map'
import CustomTabRadio from '@/components/base/CustomTabRadio'
const StickerPopover = (props) => {
    const stickers = [
        {
            image: '/storage/stickers/1.png',
        },
        {
            image: '/storage/stickers/2.png',
        },
        {
            image: '/storage/stickers/3.png',
        },
        {
            image: '/storage/stickers/4.png',
        },
        {
            image: '/storage/stickers/5.png',
        },
        {
            image: '/storage/stickers/6.png',
        },
        {
            image: '/storage/stickers/7.png',
        },
        {
            image: '/storage/stickers/8.png',
        },
        {
            image: '/storage/stickers/9.png',
        },
        {
            image: '/storage/stickers/10.png',
        },
        {
            image: '/storage/stickers/11.png',
        },
        {
            image: '/storage/stickers/12.png',
        },
        {
            image: '/storage/stickers/13.png',
        },
        {
            image: '/storage/stickers/14.png',
        },
        {
            image: '/storage/stickers/15.png',
        },
        {
            image: '/storage/stickers/16.png',
        },
        {
            image: '/storage/stickers/17.png',
        },
        {
            image: '/storage/stickers/18.png',
        },
    ]

    return (
        <div
            className={`absolute bottom-[97px] right-0 h-[calc(100vh-150px)] w-full bg-interface-700 ${
                props.viewchat ? 'bottom-[79px] h-[calc(100vh-130px)]' : ''
            }`}
        >
            <div>
                <h5 className="sticker-title">Send a sticker to IamKhaleel</h5>
                <div
                    onClick={props.close}
                    className="absolute right-4 top-[8px] flex h-[27px] w-[27px] cursor-pointer items-center justify-center rounded-full bg-theme-dark-900"
                >
                    <i className="icon-close"></i>
                </div>
                <div className={`scrollable max-h-[calc(100vh-200px)] p-4`}>
                    <div
                        className="grid grid-cols-3 gap-4"
                        onClick={props.close}
                    >
                        {map(stickers, (item, index) => (
                            <CustomTabRadio
                                key={index}
                                src={item.image}
                                id={index}
                                name="sticker"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StickerPopover
