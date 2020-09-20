import React from 'react'
import d from './DialogItems.module.css'
import { NavLink } from 'react-router-dom'


const DialogsBlock = (props) => {
    return (
        <div className={d.dialog}>
            <div className={d.avatarWrapper}>
                <img src={props.image.src} alt="" className={d.avatar} />
            </div>
            <NavLink to={/dialogs/ + props.id} activeClassName={d.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsBlock
