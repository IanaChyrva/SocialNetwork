import React from 'react'
import f from './Friends.module.css'

const Friend = (props) => {
    return (
        <div className={f.Friend}>
            <div className={f.avatarWrapper}>
                <img src={props.image.src} alt={props.image.alt} className={f.friendAvatar} />
            </div>
            <span>{props.name}</span>
        </div>
    )
}

export default Friend