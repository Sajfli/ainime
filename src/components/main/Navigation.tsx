import React, { FC } from 'react'

import useTranslation from 'hooks/useTranslation'

import style from './Navigation.m.scss'

const Navigation:FC = () => {

    const t = useTranslation()

    const elements = [
        {
            title: 'index',
            url: '#'
        }, {
            title: 'genres',
            url: '#'
        }, {
            title: 'new',
            url: '#'
        }, {
            title: 'popular',
            url: '#'
        }
    ]

    return(
        <nav className={style.nav}>
            <ul>
                {
                    elements.map(({title, url}) => (
                        <li key={title}>
                            <a className={style.link} href={url}>{t(title)}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navigation