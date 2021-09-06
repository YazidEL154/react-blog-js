import React from 'react'
import './header.css'
import { HeaderItem } from './HeaderItem'

export const HeaderBar = () => {
    return <div className="header-bar">
        <HeaderItem titre="Home 1" bgColor="green"/>
        <HeaderItem titre="Infos" bgColor="blue"/>
        <HeaderItem titre="Truc Machin" bgColor="yellow"/>
    </div>
}

