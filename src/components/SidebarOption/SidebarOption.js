import React from 'react'

import classNames from 'classnames'

import "./SidebarOption.scss"

const sidebarClassGroup = (props) => {
    return classNames("sidebarOption", {
        "sidebarOption--active": props.selected
    })
}

export const SidebarOption = (props) => {
    const { Icon, title, number } = props
    return (
        <div className={sidebarClassGroup(props)}>
                <Icon />
                <h3>{title}</h3>
                <p>{number}</p>
        </div>
    )
}

export default SidebarOption
