import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import useTranslation from 'hooks/useTranslation'

import style from './Header.m.scss'

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
                            <Link className={style.link} to={url}>{t(title)}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navigation