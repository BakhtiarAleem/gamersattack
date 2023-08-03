import Navigation from '@/components/base/Navigation'
const Footer = () => {
    const navigation = [
        {
            label: 'About',
            route: '/about',
        },
        {
            label: 'FAQs',
            route: '/faqs',
        },
        {
            label: 'Contact Us',
            route: '/contact',
        },
        {
            label: 'Terms of Use',
            route: '/terms-of-use',
        },
        {
            label: 'Privacy Policy',
            route: '/privacy-policy',
        },
    ]
    return (
        <div className="mx-6 border-t border-interface-700 py-11 text-center mobile:py-6">
            <Navigation items={navigation} />
            <ul className="mt-6 mb-[26px] flex items-center justify-center">
                <li className="mr-[26px]">
                    <a href="#" target="_blank" className="text-interface-400">
                        <i className="icon-facebook text-[22px]" />
                    </a>
                </li>
                <li className="mr-[26px]">
                    <a href="#" target="_blank" className="text-interface-400">
                        <i className="icon-instagram text-[22px]" />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" className="text-interface-400">
                        <i className="icon-twitter text-[22px]" />
                    </a>
                </li>
            </ul>
            <p className="mb-0 text-interface-400">
                &copy; {new Date().getFullYear()} Raptr Games, Inc. All rights
                reserved.
            </p>
        </div>
    )
}

export default Footer
