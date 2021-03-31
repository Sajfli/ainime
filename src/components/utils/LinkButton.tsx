import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

type LinkButtonProps = {
    to: string,
    children?: React.ReactNode,
    [key: string]: any
}

const LinkButton: FC<LinkButtonProps> = ({to, children, ...rest}: LinkButtonProps) => {

    const history = useHistory()

    const handleClick = () => {
        history.push(to)
    }

    return <button onClick={handleClick} {...rest}>
        {children && children}
    </button>
}

export default LinkButton