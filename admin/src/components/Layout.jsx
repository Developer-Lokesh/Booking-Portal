import React from 'react'
import style from "../styles/layout.module.css"
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div className={style.topBody}>
            <Header />
            <div className={style.layout}>
                <Sidebar />
                {children}
            </div>
        </div>
    )
}

export default Layout