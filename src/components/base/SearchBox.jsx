import TextBox from '@/components/base/TextBox'
import styles from '@/styles/Input.module.css'

const SearchBox = ({ id, name, label, placeholder, variant }) => {
    return (
        <>
            <div className={styles.searchInput}>
                <TextBox
                    id={id}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    variant={variant}
                    type="text"
                    customcss="left-icon pl-10 pb-0 md text-sm"
                />
                <div
                    className={`${
                        label ? 'top-4' : 'top-0'
                    } absolute bottom-0 flex h-full items-center justify-center px-3.5 text-base text-interface-300`}
                >
                    <i className="icon-search"></i>
                </div>
            </div>
        </>
    )
}

export default SearchBox
