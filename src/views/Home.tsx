import React, { FC } from 'react'

import useTranslation from 'hooks/useTranslation'

type Props = {
    text: string;
}

const Home: FC<Props> = ({text}: Props) => {

    const t = useTranslation()

    return <h1 style={{textAlign: 'center'}}>
        {text} <br/>
        { t('hello') }
    </h1>
}

export default Home