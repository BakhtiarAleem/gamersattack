/* eslint-disable max-lines-per-function */
import { useState } from 'react'
import Image from 'next/image'
import { Menu } from '@headlessui/react'
import Button from '@/components/base/Button'
import TextBox from '@/components/base/TextBox'
import StickerPopover from '@/components/popovers/Sticker'
import AmountPopover from '@/components/popovers/Amount'
import BaseModal from '@/components/base/Modal'
import DebitCard from '@/components/modal/DebitCard'
import ZindigiWallet from '@/components/modal/ZindigiWallet'
import ReportModal from '@/components/modal/ReportLiveStream'
import Confetti from '@/components/Confetti'
import styles from '@/styles/Livechat.module.css'
import map from 'lodash/map'

const chat = [
    {
        color: '#F43F5E',
        player: 'arsalanakhtar',
        comment: 'message will be place here and can display in multiple lines',
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
        comment: 'Ah yes, the sweet memories of my first time on one of these.',
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

const LiveChat = (props) => {
    const [popoverType, setPopoverType] = useState(null)
    const [debitCard, setDebitCard] = useState(false)
    const [zindigiCard, setZindigiCard] = useState(false)
    const [showChat, setShowChat] = useState(false)
    const [reportModal, setReportModal] = useState(false)
    const [paymentSuccessfull, setPaymentSuccessfull] = useState(false)

    const confettiAnimation = () => {
        setPaymentSuccessfull(true)
        const timer = setTimeout(() => setPaymentSuccessfull(false), 6000)
        return () => clearTimeout(timer)
    }

    return (
        <div
            className={`${styles.livechatcontainer} ${
                showChat ? styles.expand : ''
            }`}
        >
            {/* Celebration animation */}
            {paymentSuccessfull && <Confetti />}
            <div className={styles.inner}>
                <Menu as="div" className="relative">
                    <div className="w-full">
                        <div className={styles.livechatheader}>Live Chat</div>
                        <Menu.Button className="dropdown-button items-center text-common-white">
                            <div
                                onClick={props.close}
                                className="absolute right-8 top-[5px] cursor-pointer text-lg text-common-white ipad:right-16"
                            >
                                <i className="icon-kebab"></i>
                            </div>
                        </Menu.Button>
                        <Menu.Items className="dropdown-menu right-4 top-[28px] z-50 flex w-auto flex-col">
                            <Menu.Item>
                                <Button
                                    variant="link"
                                    type="button"
                                    text="Report live stream"
                                    icon="flag"
                                    size="link-sm"
                                    modification="dropdown-link"
                                    click={() => setReportModal(true)}
                                />
                            </Menu.Item>
                        </Menu.Items>
                    </div>
                </Menu>
                <div
                    className={`${
                        props.online ? styles.livechatbodyonline : ''
                    } ${styles.livechatbody} `}
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
                    {!props.online && (
                        <div className="flex">
                            <div className="mr-2">
                                <i className="icon-info-circle"></i>
                            </div>

                            <p className="text-sm font-semibold">
                                <span
                                    onClick={props.login}
                                    className="mr-1 cursor-pointer text-primary-500"
                                >
                                    Sign up{' '}
                                </span>{' '}
                                or
                                <span
                                    onClick={props.login}
                                    className="cursor-pointer text-primary-500"
                                >
                                    {' '}
                                    login{' '}
                                </span>{' '}
                                now to chat
                            </p>
                        </div>
                    )}
                    <div
                        className={`${'live-chat-message pointer-events-auto relative my-[6px]'} ${
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
                            <span
                                onClick={() => setPopoverType('amount')}
                                className={`cursor-pointer ${
                                    popoverType == 'amount'
                                        ? 'text-primary-500'
                                        : ''
                                }`}
                            >
                                <i className="icon-gift"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    {popoverType === 'sticker' && (
                        <StickerPopover close={() => setPopoverType()} />
                    )}
                    {popoverType === 'amount' && (
                        <AmountPopover
                            close={() => setPopoverType()}
                            payDebit={() => setDebitCard(true)}
                            payZindigiWallet={() => setZindigiCard(true)}
                        />
                    )}
                </div>
            </div>
            <BaseModal
                ModalBody={DebitCard}
                isModalOpen={debitCard}
                toggleModal={() => setDebitCard(false)}
                dataSubmission={() => {
                    setDebitCard(false)
                    confettiAnimation()
                }}
                size="sm"
                modification=""
                hideButton
            />
            <BaseModal
                ModalBody={ZindigiWallet}
                isModalOpen={zindigiCard}
                toggleModal={() => setZindigiCard(false)}
                dataSubmission={() => {
                    setZindigiCard(false)
                    confettiAnimation()
                }}
                size="sm"
                modification=""
                hideButton
            />
            <BaseModal
                ModalBody={ReportModal}
                isModalOpen={reportModal}
                toggleModal={() => setReportModal(false)}
                dataSubmission={() => setReportModal(false)}
                size="sm"
                button="Submit"
            />
            {!showChat && (
                <span
                    className={styles.chatIcon}
                    onClick={() => {
                        setShowChat(true)
                    }}
                >
                    <Image
                        src="/chat-icon.svg"
                        alt={process.env.NEXT_PUBLIC_APP_NAME}
                        layout="responsive"
                        width={197}
                        height={200}
                    />
                </span>
            )}
            {showChat && (
                <span
                    className="absolute  top-0 right-2 flex h-[38px] w-[38px] items-center justify-center text-common-white"
                    onClick={() => {
                        setShowChat(false)
                    }}
                >
                    <i className="icon-close"></i>
                </span>
            )}
        </div>
    )
}

export default LiveChat
