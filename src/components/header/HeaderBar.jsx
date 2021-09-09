import React from 'react'
import './header.css'
import { HeaderItem } from './HeaderItem'

export const HeaderBar = () => {
    return <div className="header-bar">
        <HeaderItem titre="Home 1" bgColor="green" link="/" />
        <HeaderItem titre="Infos" bgColor="blue" link="/articles" />
    </div>
}

