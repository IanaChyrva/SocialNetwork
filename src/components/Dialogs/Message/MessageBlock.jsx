import React from 'react'
import d from './Message.module.css'


const MessageBlock = (props) => {
    return (
        <div className={d.message}>{props.message}</div>
    )
}

export default MessageBlock
