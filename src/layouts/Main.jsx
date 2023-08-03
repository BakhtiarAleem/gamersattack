import { useState } from 'react'
import { useRouter } from 'next/router'

import SideBar from '@/components/base/SideBar'
import Header from '@/components/base/Header'
import Footer from '@/components/base/Footer'
import LiveChat from '@/components/streaming/LiveChat'
import BaseModal from '@/components/base/Modal'
import Login from '@/components/modal/Login'
const Main = (props) => {
    const router = useRouter()
    const { query } = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [sidebarToggle, setSidebarToggle] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    const sidebarFunc = () => {
        setSidebarToggle(!sidebarToggle)
    }

    const dataSubmission = () => {
        setIsModalOpen(!isModalOpen)
        router.push('/my-profile')
    }
    return (
        <main className="relative flex">
            {/* Header */}
            <Header login={toggleModal} sidebarOpen={sidebarFunc} />
            {/* Sidebar */}
            <SideBar
                online={query.online}
                sidebarClick={sidebarToggle}
                sidebarClose={() => setSidebarToggle(false)}
            />
            {/* body */}
            <div className="mr-0 w-full ipad:w-full mobile:w-full">
                <div className="mt-[52px] flex">
                    <div className="w-full">
                        {props.children}
                        <Footer />
                    </div>
                    {router.pathname ===
                        '/streamer/[streamingslug]/live/[livestreamslug]' && (
                        <LiveChat online={query.online} login={toggleModal} />
                    )}
                </div>
            </div>
            <BaseModal
                ModalBody={Login}
                isModalOpen={isModalOpen}
                searchBank
                toggleModal={toggleModal}
                dataSubmission={dataSubmission}
                size="sm"
                modification=""
                hideButton
            />
        </main>
    )
}
export default Main
