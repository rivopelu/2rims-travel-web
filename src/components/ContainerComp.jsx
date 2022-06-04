import React from 'react'

const ContainerComp = ({ children, className }) => {
    return (
        <div className={`max-w-7xl  w-full ${className}`}>
            {children}
        </div>
    )
}

export default ContainerComp