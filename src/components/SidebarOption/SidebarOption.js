import React, { useContext } from 'react'

import classNames from 'classnames'

import "./SidebarOption.scss"
import { SidebarContext } from '../../context/SidebarContext'

const sidebarClassGroup = (props, open) => {
    return classNames("sidebarOption", {
        "sidebarOption--active": props.selected,
        "sidebarOption--hide": open
    })
}

export const SidebarOption = (props) => {
    const { Icon, title, number } = props
    const { open } = useContext(SidebarContext)


    return (
        <div className={sidebarClassGroup(props, open)}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
