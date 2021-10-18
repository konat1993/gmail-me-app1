import React from 'react'

import SidebarOption from "./SidebarOption"

import { Button } from '@material-ui/core'
//import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'

import "./Sidebar.scss"
export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__buttonWrapper">
                <Button className="sidebar__compose"
                   /* startIcon={<AddIcon fontSize="large" />} */>
                        <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt="addImg" />
                        <span>Compose</span>
                </Button>
            </div>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
        </div>
    )
}

export default Sidebar
