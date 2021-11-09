import React, { useEffect } from 'react'

import moment from 'moment';
import 'moment/locale/pl'

import { useSelector } from 'react-redux'
import { selectOpenMail } from '../../features/mailSlice'

import { useHistory } from 'react-router'

import { IconButton } from '@material-ui/core'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import ErrorIcon from '@material-ui/icons/Error'
import DeleteIcon from '@material-ui/icons/Delete'
import EmailIcon from '@material-ui/icons/Email'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import PrintIcon from '@material-ui/icons/Print'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import "./MailDetails.scss"



export const Mail = () => {

    const selectedMail = useSelector(selectOpenMail)

    const history = useHistory()

    useEffect(() => {
        !selectedMail && history.push("/")
    }, [selectedMail])
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="tools__left">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="tools__right">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <p className="mail__time">
                    {moment(selectedMail?.time).format('llll')}
                    {' '}
                    ({moment(selectedMail?.time).startOf('seconds').fromNow()})
                </p>
                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <div className="mail__important">
                        <LabelImportantIcon />
                    </div>
                    <p className="mail__title">{`<${selectedMail?.title}>`}</p>
                </div>

                <div className="mail__message">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
