import React, { createContext, useState } from 'react'

export const appContext = createContext()

const Appstore = ({children}) => {
    const [sidebar, setSidebar] = useState(false);

    const sidebarHandler = () => {
      setSidebar(!sidebar)
    }
    
  return (
    <appContext.Provider value = {{sidebarHandler, sidebar}}>{children}</appContext.Provider>
  )
}

export default Appstore