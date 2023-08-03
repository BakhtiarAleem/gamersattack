import { useState } from 'react'
import TextBox from '@/components/base/TextBox'
import StickerPopover from '@/components/popovers/Sticker'
import styles from '@/styles/Livechat.module.css'

import map from 'lodash/map'
const ViewChat = (props) => {
    const chat = [
        {
            color: '#F43F5E',
            player: 'arsalanakhtar',
            comment:
                'message will be place here and can display in multiple lines',
        },
        {
            color: '#F97316',
            player: 'kristyHoney',
            comment: 'I like to creep around my home and act like a goblin',
        },
        {
            color: '#14B8A6',
            player: 'hippophobia',
            comment: '👉🏿👉🏾👉🏽👉🏼👇🏻👇🏻👇🏻👈🏼👈🏽👈🏾👈🏿',
        },
        {
            color: '#6366F1',
            player: 'UltimateBeast',
            comment: 'Here the thing. You said a "jackdaw is a crow."',
        },
        {
            color: '#84CC16',
            player: 'SteelTitan',
            comment: "Is it in the same family? Yes. No one's arguing that.",
        },
        {
            color: '#0EA5E9',
            player: 'FatalDestiny',
            comment: '”Joe Momma…” the creature whispered.',
        },
        {
            color: '#EC4899',
            player: 'MaskedTitan',
            comment: 'Why is six afraid of seven?',
        },
        {
            color: '#3B82F6',
            player: 'DarkCarnage',
            comment:
                'Ah yes, the sweet memories of my first time on one of these.',
        },
        {
            color: '#F59E0B',
            player: 'IronMerc',
            comment: 'Traveled the entire galaxy trying to find out who asked',
        },
        {
            color: '#A855F7',
            player: 'TurboSlayer',
            comment:
                "I hear there is a gaming retirement home if you're looking for round the clock support. It's called TSM house",
        },
    ]
    const [popoverType, setPopoverType] = useState(null)

    return (
        <div
            className={`${styles.livechatcontainer} ${styles.viewchatcontainer}`}
        >
            <div className="fixed bottom-0 right-0 w-[340px] shadow-live-chat-shadow ipad:w-full">
                <div className="relative">
                    <div className={styles.livechatheader}>Live Chat</div>
                    <div
                        onClick={props.close}
                        className="absolute right-4 top-[8px] flex h-[27px] w-[27px] cursor-pointer items-center justify-center rounded-full bg-theme-dark-900 text-xs"
                    >
                        <i className="icon-close"></i>
                    </div>
                </div>
                <div
                    className={`${
                        props.online ? styles.livechatbodyonline : ''
                    } ${styles.livechatbody} ${styles.viewchatbody} `}
                >
                    <ul>
                        {map(chat, (item, index) => (
                            <li id={index}>
                                <p>
                                    <span
                                        style={{
                                            color: item.color,
                                        }}
                                    >
                                        {item.player}:
                                    </span>
                                    {item.comment}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.livechatfooter}>
                    <div
                        className={`${'live-chat-message pointer-events-auto relative mt-[6px]'} ${
                            props.online ? 'live-chat-online' : ''
                        }`}
                    >
                        <TextBox
                            name="send-message"
                            placeholder="Send a message"
                            type="text"
                            noSpace
                            customcss="live-chat-input border-none bg-interface-700 text-sm"
                        />
                        <div className="absolute top-0 right-[8px] flex h-full items-center text-interface-400 ">
                            <span
                                onClick={() => setPopoverType('sticker')}
                                className={`mr-[10px] cursor-pointer ${
                                    popoverType == 'sticker'
                                        ? 'text-primary-500'
                                        : ''
                                }`}
                            >
                                <i className="icon-sticker"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    {popoverType === 'sticker' && (
                        <StickerPopover
                            close={() => setPopoverType()}
                            viewchat
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ViewChat
