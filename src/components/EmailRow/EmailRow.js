import React from 'react'

import moment from 'moment';
import Moment from 'react-moment';
import 'moment/locale/pl'

import { useDispatch } from 'react-redux'
import { selectMail } from '../../features/mailSlice'

import { useNavigate } from 'react-router'

import { Avatar } from '@material-ui/core'
import { Checkbox, IconButton } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'

import "./EmailRow.scss"

const calendarStrings = {
    lastDay: '[Wczoraj: ] LT',
    sameDay: '[Dzisiaj: ] LT',
    lastWeek: 'DD MMM',
    sameElse: 'DD MMM'
};

const randomColorStyle = () => {
    const getHexNumber = Math.floor(Math.random() * 16777215).toString(16);
    const getColor = `#${getHexNumber}a6`
    return { backgroundColor: getColor }
}
export const EmailRow = (props) => {
    const { id, title, subject, description, time } = props
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time
        }))
        navigate("/mail")
    }
    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__avatar">
                <Avatar style={randomColorStyle()}>
                    {title[0].toUpperCase()}
                </Avatar>
            </div>
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
                <h4>
                    <span>{subject}</span>
                    <span> - </span>
                    <span> {description}</span>
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
