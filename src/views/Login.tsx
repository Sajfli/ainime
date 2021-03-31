import React, { FC, useState } from 'react'

import request from 'services/request'

// import useTranslation from 'hooks/useTranslation'

type InputPartProps = {
    children: React.ReactNode,
    name: string
}
const InputPart: FC<InputPartProps> = ({children, name}: InputPartProps) => {
    return(
        <label>

            <div>{name}</div>
            <div>{children}</div>

        </label>
    )
}

const Login: FC = () => {

    const [ username, setUsername ] = useState('')

    const handleUsernameInput = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement
        setUsername(target.value)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const pass= document.getElementById('user_password') as HTMLInputElement

        const resp = await request.post('/auth/login', false, {
            username,
            password: pass.value
        })

        console.log(resp)

    }

    return <div>


        <form onSubmit={handleSubmit}>

            <InputPart name='Username'>
                <input value={username} onInput={handleUsernameInput} type='text'/>
            </InputPart>

            <InputPart name='Password'>
                <input type='password' id='user_password'/>
            </InputPart>

            <button type="submit">Submit</button>

        </form>

    </div>
}

export default Login