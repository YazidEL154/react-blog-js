import React from 'react'
import './header.css'
import { HeaderItem } from './HeaderItem'

export const HeaderBar = () => {
    return <div className="header-bar">
        <HeaderItem titre="Home 1" bgColor="lightgray" link="/" />
        <HeaderItem titre="Liste de nos articles" bgColor="lightgray" link="/articles" />
        <HeaderItem titre="Créer un nouvel article" bgColor="lightgray" link="/articles/new" />
    </div>
}

