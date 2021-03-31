import React, { FC } from 'react'


import useTranslation from 'hooks/useTranslation'
import LinkButton from 'components/utils/LinkButton'

import style from './Header.m.scss'

// import Navigation from './Navigation'

const Header:FC = () => {

    const t = useTranslation()

    return(
        <header className={style.header}>

            <div className={style.left}>

                <div className={style.logo}>

                    <LinkButton to='/' className={style.btn}>
                        <h1>Ainime</h1>
                    </LinkButton>

                </div>

                {/* <Navigation /> */}
            </div>

            <LinkButton
                to='/Sign-In'
                className={style.btn}
            >
                {t('login')}
            </LinkButton>

        </header>
    )
}

export default Header