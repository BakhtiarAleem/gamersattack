import Link from 'next/link'
import { useRouter } from 'next/router'
import map from 'lodash/map'

import styles from '@/styles/Navigation.module.css'

const Navigation = (props) => {
    const router = useRouter()

    return (
        <div
            className={`${styles.navigation} ${
                props.tabList ? styles.tabList : ''
            }`}
        >
            <ul>
                {map(props.items, (item, index) => (
                    <li
                        key={index}
                        className={
                            router.asPath === item.route ? styles.active : ''
                        }
                    >
                        <Link href={item.route}>
                            <a
                                className={
                                    router.asPath === item.route
                                        ? styles.active
                                        : ''
                                }
                            >
                                {item.label}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navigation
