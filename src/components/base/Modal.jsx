import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
const Modal = ({
    ModalBody,
    props,
    isModalOpen,
    toggleModal,
    title,
    modification,
    noSpacing,
    size,
    scrollHeight,
    dataSubmission,
    secondaryModal,
    panelModification,
    titleLeft,
}) => {
    return (
        <>
            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog
                    className="relative z-[9999] w-[640px]"
                    onClose={() => {
                        isModalOpen = false
                    }}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-common-black bg-opacity-80" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div
                            className={`mx-auto flex min-h-full items-center justify-center py-[25px] mobile:py-0 ${
                                size == 'sm'
                                    ? 'w-[480px]  mobile:w-full'
                                    : size == 'xs'
                                    ? '348px'
                                    : 'w-[680px]  mobile:w-full'
                            } ${modification}`}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className={`relative w-full rounded-lg bg-theme-dark-900 text-common-white mobile:h-screen mobile:rounded-none ${panelModification}`}
                                >
                                    <div
                                        className={`${
                                            secondaryModal
                                                ? 'secondary-modal'
                                                : ''
                                        }`}
                                    >
                                        {/* Title */}
                                        {title && (
                                            <Dialog.Title className="relative mb-6 text-base font-semibold leading-6">
                                                <span
                                                    className={`${
                                                        titleLeft
                                                            ? 'body-padding mt-2 block text-left'
                                                            : 'block text-center'
                                                    }`}
                                                >
                                                    {title}
                                                </span>
                                            </Dialog.Title>
                                        )}
                                        <div
                                            onClick={toggleModal}
                                            className={`btnClose absolute top-[24px] right-[24px] z-10 cursor-pointer overflow-hidden rounded-full bg-body-bg px-[11px] py-[9px]`}
                                        >
                                            <i className="icon-close"></i>
                                        </div>
                                        {/* Body */}
                                        <div
                                            className={`${noSpacing}  ${
                                                scrollHeight ? scrollHeight : ''
                                            }`}
                                        >
                                            <ModalBody
                                                {...props}
                                                dataSubmission={dataSubmission}
                                            />
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal
