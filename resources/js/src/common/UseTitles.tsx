import React, { FC } from 'react'
interface UseTitlesProps {
    style?: React.CSSProperties
    className?: string
    title: string
}
const UseTitles: FC<UseTitlesProps> = (
    { className, title, style }
) => {
    return (
        <div className={className}  style={style} >

            <span>{title}</span>

        </div>
    )
}

export default UseTitles