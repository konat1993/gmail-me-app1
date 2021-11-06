import React, { useContext } from 'react'

import { auth } from '../../services/firebase';

import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';

import { Avatar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { SidebarContext } from '../../context/SidebarContext';

import "./Header.scss"
export const Header = () => {
    const { activate } = useContext(SidebarContext)
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton onClick={() => activate()}>
                    <MenuIcon />
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="gmailImg" />
            </div>
            <div className="header__middle">
                <label>
                    <SearchIcon className="searchIcon" />
                    <input type="text" placeholder="Search mail" />
                </label>
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header
