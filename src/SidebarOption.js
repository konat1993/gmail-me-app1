import { IconButton } from '@material-ui/core'
import React from 'react'

import "./SidebarOption.scss"
export const SidebarOption = (props) => {
    const { Icon, title, number } = props
    return (
        <div className="sidebarOption">
                <Icon />
                <h3>{title}</h3>
                <p>{number}</p>
        </div>
    )
}

export default SidebarOption
