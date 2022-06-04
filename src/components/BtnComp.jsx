import React from 'react'

const BtnComp = ({ children, className }) => {
    return (
        <button className={`bg-violet-500 px-3 py-1 rounded-lg hover:bg-violet-700 duration-200  outline-offset-1 active:outline active:outline-violet-300 ${className}`}>
            {children}
        </button>
    )
}

export default BtnComp