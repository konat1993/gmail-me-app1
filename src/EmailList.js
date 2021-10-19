import React from 'react'

import { IconButton } from '@material-ui/core'
import { Checkbox } from '@material-ui/core'

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import RedoIcon from '@material-ui/icons/Redo'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import InboxIcon from '@material-ui/icons/Inbox'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import PeopleIcon from '@material-ui/icons/People'

import Section from "./Section"
import EmailRow from "./EmailRow"

import "./EmailList.scss"
export const EmailList = () => {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="settings__left">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="settings__right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1a73e8"  />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green"  />
            </div>

            <div className="emailList__list">
                <EmailRow
                    id=""
                    title="Twitch"
                    subject="Hey fellow streamer!!!"
                    description="Test Description"
                    time="10pm"
                />
                <EmailRow
                    id=""
                    title="Twitch"
                    subject="Hey fellow streamer!!!"
                    description="Test Description"
                    time="10pm"
                />
            </div>
        </div>
    )
}

export default EmailList
