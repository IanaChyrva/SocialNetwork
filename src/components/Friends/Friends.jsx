import React from 'react';
import Friend from './Friend'
import f from './Friends.module.css'

const Friends = (props) => {
    let friends = props.state.FriendsPage.map(friend => <Friend id={friend.id} image={friend.image} name={friend.name} />)

    return (
        <div className={f.friendsBlock} >
            <span>Friends</span>
            <div className={f.friendsWrapper}>
                {friends}
            </div>
        </div >
    )
}

export default Friends