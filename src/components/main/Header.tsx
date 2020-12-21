import React, { FC } from 'react'

import style from './Header.m.scss'

import Navigation from './Navigation'

const Header:FC = () => {
    return(
        <header className={style.header}>

            <div className={style.left}>

                <div className={style.logo}>
                    <h1>Ainime</h1>
                </div>

                <Navigation />
            </div>

            <div>User</div>

        </header>
    )
}

export default Header