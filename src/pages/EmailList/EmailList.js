import React, { useState, useEffect } from 'react'

import { db } from '../../services/firebase'

import { Button, IconButton } from '@material-ui/core'
import { Checkbox } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
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

import Section from "../../components/Section/Section"
import EmailRow from "../../components/EmailRow/EmailRow"

import "./EmailList.scss"
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../../features/mailSlice'

export const EmailList = () => {
    const [emails, setEmails] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        db.collection("emails")
            .orderBy('timestamp', "desc")
            .onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }))))
    }, [])

    const handleClickOpen = () => {
        dispatch(openSendMessage())
    }
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="settings__left">
                    <Checkbox />
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

            <div className="emailList__list">
                <div className="emailList__sections">
                    <Section Icon={InboxIcon} title="Primary" color="red" selected />
                    <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
                    <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
                </div>
                {
                    emails.map(({ id, data: { to, subject, message, timestamp } }) => (
                        <EmailRow
                            key={id}
                            id={id}
                            title={to}
                            subject={subject}
                            description={message}
                            time={timestamp?.seconds * 1000}
                        />
                    ))
                }
            </div>

            <div className="email__composeBtn">
                <Button className="composeBtn"
                    onClick={handleClickOpen}
                >

                    <CreateIcon />
                    <span className="compose__text">Compose</span>
                </Button>
            </div>
        </div>
    )
}

export default EmailList
