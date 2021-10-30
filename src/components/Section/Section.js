import React from 'react'

import "./Section.scss"

const styles = (props) => {
    return {
        borderBottom: `3px solid ${props.color}`,
        color: `${props.selected && props.color}`,
        paddingBottom: `${props.selected && "12px"}`
    }
}
export const Section = (props) => {
    const {Icon, title, selected} = props
    return (
        <div className={`section ${selected && "section--selected"}`} style={styles(props)}>
            <Icon />
            <h4>{title}</h4>
        </div>
    )
}

export default Section
