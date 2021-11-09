import React from "react"
export const SidebarContext = React.createContext(null)

export const SidebarContextProvider = ({ children }) => {
    const [open, setOpen] = React.useState(false)

    const activate = () => {
        document.body.classList.toggle("sidebar-vp--hidden")
        setOpen(!open)
    }
    return (
        <SidebarContext.Provider value={{ activate, open }}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarContextProvider