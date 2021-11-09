import React, { useContext, useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { openSendMessage } from '../../features/mailSlice'

import SidebarOption from "../SidebarOption/SidebarOption"

import { Button, IconButton } from '@material-ui/core'
//import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { SidebarContext } from '../../context/SidebarContext'
import classNames from 'classnames'
import "./Sidebar.scss"

const sidebarClassGroup = (props, open) => {
    return classNames(props.mobileClassName ? props.mobileClassName : "sidebar", {
        'sidebar-activate': open
    })
}

export const Sidebar = (props) => {
    const { activate, open } = useContext(SidebarContext)

    const [scroll, setScroll] = useState(false)

    const dispatch = useDispatch()

    const handleClickOpen = () => {
        dispatch(openSendMessage())
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleScroll = (e) => {
        if (e.target.scrollTop > 0) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    return (
        <div
            className={sidebarClassGroup(props, open)}
            onClick={(e) => activate(e)}
        >
            <div onScroll={handleScroll} className="sidebarWrapper" onClick={stopPropagation}>
                <div className="sidebarMobileHeader">
                    <span>
                        Gmail
                    </span>
                    <ArrowBackIcon onClick={(e) => activate(e)} />
                </div>
                <div className={`${scroll ? 'sidebar-scroll' : ''}`}>

                    <Button className="sidebar__compose"
                        onClick={handleClickOpen}
                    >
                        <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt="addImg" />
                        <span className="compose__text">Compose</span>
                    </Button>
                </div>
                <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
                <SidebarOption Icon={StarIcon} title="Starred" number={28} selected={false} />
                <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={4} selected={false} />
                <SidebarOption Icon={LabelImportantIcon} title="Important" number={33} selected={false} />
                <SidebarOption Icon={NearMeIcon} title="Sent" number={""} selected={false} />
                <SidebarOption Icon={NoteIcon} title="Drafts" number={9} selected={false} />
                <SidebarOption Icon={ExpandMoreIcon} title="More" number={1} selected={false} />

                <div className="sidebar__footer">
                    <div className="sidebar__footerIcon">
                        <IconButton>
                            <PersonIcon />
                        </IconButton>
                        <IconButton>
                            <DuoIcon />
                        </IconButton>
                        <IconButton>
                            <PhoneIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar
