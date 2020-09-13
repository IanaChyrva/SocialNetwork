import React from 'react'
import d from './Dialogs.module.css'
import DialogsBlock from './DialogItems/DialogItems'
import MessageBlock from './Message/Message'

const Dialogs = () => {
    const DialogsData = [
        {
            id: 1,
            name: "Julia"
        },
        {
            id: 2,
            name: "Petya"
        },
        {
            id: 3,
            name: "Iana"
        },
        {
            id: 4,
            name: "Sveta"
        },
        {
            id: 5,
            name: "Kate"
        },
        {
            id: 6,
            name: "Alex"
        },
    ]

    const messagesData = [
        {
            id: 1,
            message: "Hi there!"
        },
        {
            id: 2,
            message: "Yo"
        },
        {
            id: 3,
            message: "What's up!"
        },
    ]

    let dialogs = DialogsData.map(dialog => <DialogsBlock name={dialog.name} id={dialog.id} />)



    let messages = messagesData.map(message => <MessageBlock message={message.message} id={message.id} />)

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