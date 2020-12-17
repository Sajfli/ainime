import React, { FC } from 'react'

type Props = {
    text: string;
}

const Index: FC<Props> = ({text}: Props) => (
    <h1 style={{textAlign: 'center'}}>
        {text}
    </h1>
)

export default Index