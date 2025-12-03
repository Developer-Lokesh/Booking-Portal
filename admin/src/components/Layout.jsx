import React from 'react'
import style from "../styles/layout.module.css"
import Header from './Header'
import Sidebar from './Sidebar'
import Desktopsidebar from './Desktopsidebar'
import Mobilesidebar from './Mobilesidebar'

const Layout = ({ children }) => {
    return (
        <div className={style.topBody}>
            <Header />
            <div className={style.layout}>
                {/* <Sidebar /> */}
                    <Desktopsidebar className={style.Desktop}/>
                <div className={style.sidebar}>
                    <Mobilesidebar className={style.Mobile}/>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Layout;