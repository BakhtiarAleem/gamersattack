import React from 'react'

const LinkButton = ({ label, onClick, icon, disabled }) => {
    return (
        <span
            className={`cursor-pointer text-sm font-normal uppercase text-common-white ${
                disabled ? 'pointer-events-none text-interface-500' : ''
            }`}
            onClick={onClick}
        >
            <i className={`mr-1.5 ${icon ? icon : 'icon-plus'}`}></i>
            {label}
        </span>
    )
}

export default LinkButton
