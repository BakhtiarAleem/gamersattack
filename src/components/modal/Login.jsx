import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/base/Button'
import EmailConnect from '@/components/login/email/Connect'
import MobileConnect from '@/components/login/mobile/Connect'
import EmailOtp from '@/components/login/email/Otp'
import MobileOtp from '@/components/login/mobile/Otp'
import CompleteProfile from '@/components/login/CompleteProfile.jsx'
const Login = (props) => {
    const [auth, setAuth] = useState('create new account')
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url("/storage/login-cover.png")`,
                }}
                className="relative h-[190px] w-full overflow-hidden bg-cover bg-center"
            >
                <Image
                    layout="responsive"
                    className="hidden opacity-0"
                    width="100%"
                    height="190px"
                    alt="login"
                    src="/storage/login-cover.png"
                />
            </div>
            {auth === 'create new account' && (
                <div className="p-[42px] mobile:p-[24px]">
                    <h3 className="mb-3 text-center text-xl">
                        Login or create a new account
                    </h3>
                    <p className="mb-6 text-center text-base text-interface-300 mobile:text-sm">
                        Login now to connect with your favourite streamers
                    </p>
                    <div>
                        <Button
                            click={() => setAuth('completeProfile')}
                            variant="secondary"
                            text="Continue with Google"
                            size="md"
                            modification="w-full pl-[25px] justify-start mb-4"
                            image="/storage/google.svg"
                            labelSize="text-base mobile:text-sm"
                            imageModification="absolute right-[25px]"
                        />
                        <Button
                            click={() => setAuth('mobileConnect')}
                            variant="secondary"
                            text="Continue with Mobile Number"
                            size="md"
                            modification="w-full pl-[25px] justify-start mb-4"
                            icon="telephone"
                            labelSize="text-base mobile:text-sm"
                            iconStyle="absolute right-[25px] text-2xl"
                        />
                        <Button
                            click={() => setAuth('emailConnect')}
                            variant="secondary"
                            text="Continue with Email Address"
                            size="md"
                            modification="w-full pl-[25px] justify-start"
                            icon="envelope"
                            labelSize="text-base mobile:text-sm"
                            iconStyle="absolute right-[20px] text-3xl"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-interface-300">
                            By clicking on the button above, you agree to the{' '}
                            <br></br>
                            <Link href="/terms-of-use">
                                <a>Terms of Use </a>
                            </Link>{' '}
                            and{' '}
                            <Link href="/privacy-policy">
                                <a>Privacy Policy</a>
                            </Link>
                        </p>
                    </div>
                </div>
            )}

            {auth === 'mobileConnect' && (
                <MobileConnect
                    request={() => setAuth('mobileOtp')}
                    back={() => setAuth('create new account')}
                />
            )}

            {auth === 'mobileOtp' && (
                <MobileOtp otpContinue={() => setAuth('completeProfile')} />
            )}

            {auth === 'emailConnect' && (
                <EmailConnect
                    request={() => setAuth('emailOtp')}
                    back={() => setAuth('create new account')}
                />
            )}
            {auth === 'emailOtp' && (
                <EmailOtp otpContinue={() => setAuth('completeProfile')} />
            )}

            {auth === 'completeProfile' && (
                <CompleteProfile finish={props.dataSubmission} />
            )}
        </div>
    )
}

export default Login
// Hook
