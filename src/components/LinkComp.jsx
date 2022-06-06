import React from 'react'

const LinkComp = ({ children, className }) => {
    return (
        <div className={`bg-blue-400/20 px-3 py-1 rounded-lg text-blue-600 flex items-center gap-2 hover:bg-blue-400/30 duration-200 cursor-pointer ${className}`}>
            {children}
        </div>
    )
}

export default LinkComp