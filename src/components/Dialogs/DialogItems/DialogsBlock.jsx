import React from 'react'
import d from './DialogItems.module.css'
import { NavLink } from 'react-router-dom'


const DialogsBlock = (props) => {
    return (
        <div className={d.dialog}>
            <NavLink to={/dialogs/ + props.id} activeClassName={d.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsBlock
