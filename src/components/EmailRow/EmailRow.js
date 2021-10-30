import React from 'react'

import moment from 'moment';
import Moment from 'react-moment';
import 'moment/locale/pl'

import { useDispatch } from 'react-redux'
import { selectMail } from '../../features/mailSlice'

import { useHistory } from 'react-router'

import { Checkbox, IconButton } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'

import "./EmailRow.scss"

const calendarStrings = {
    lastDay: '[Yesterday at] LT',
    sameDay: '[Dzisiaj: ] LT',
    sameElse: 'DD MMM'
};

export const EmailRow = (props) => {
    const { id, title, subject, description, time } = props
    const dispatch = useDispatch()

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time
        }))
        history.push("/mail")
    }

    const history = useHistory()
    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <div className="emailRow__message">
                <h4>{subject}
                    <span> - {description}</span>
                </h4>
            </div>
            <p className="emailRow__time">
                <Moment locale="pl" calendar={calendarStrings}>
                    {moment(time).format()}
                </Moment>
            </p>
        </div>
    )
}

export default EmailRow
