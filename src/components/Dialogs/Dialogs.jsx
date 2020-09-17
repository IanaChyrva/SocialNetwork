import React from 'react'
import d from './Dialogs.module.css'
import DialogsBlock from './DialogItems/DialogsBlock'
import MessageBlock from './Message/MessageBlock'

const Dialogs = (props) => {

    let dialogs = props.dialogItems.map(dialog => <DialogsBlock name={dialog.name} id={dialog.id} />)

    let messages = props.messagesItems.map(message => <MessageBlock message={message.message} id={message.id} />)

    return (
        <>
            <div className={d.dialogWrapper}>
                <div className={d.dialogs}>
                    {dialogs}
                </div>
                <div className={d.messagges}>
                    {messages}
                </div>
            </div>
        </>
    )
}

export default Dialogs