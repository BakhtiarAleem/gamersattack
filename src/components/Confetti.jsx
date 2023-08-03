import React from 'react'
import Confetti from 'react-confetti'

const ConfettiAnimation = () => {
    return (
        <div className="pointer-events-none fixed left-0  right-0 top-0  z-[999] h-full w-full">
            <Confetti
                gravity={0.1}
                width={1920}
                height={1080}
                numberOfPieces={400}
            />
        </div>
    )
}

export default ConfettiAnimation
