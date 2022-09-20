import React, {useState} from 'react';
import { observer} from "mobx-react-lite";

import "../CSS/ChatCSS.css";

import Messages from "../Store/Messages";
import Auth from "../Store/Auth";

const Chat = observer(() => {
    const [message, setMessage] = useState("");

    return (
        <>
            <div className="chat">
                <div className="chat__name">
                    <img src="https://otkritkis.com/wp-content/uploads/2022/06/pdtrp.jpg" alt="avatar" />
                    <p>Andrew</p>

                </div>
                <div className="chat__chat">
                    {Messages.messages.length > 0 ? Messages.messages.map(m =>
                            Auth.user == m.sender ?
                                <p key={m.id} onClick={() => Messages.removeMessage(m.id, Auth.user)} className="chat__message recipient">{m.message}</p>
                                : <p key={m.id} onClick={() => Messages.removeMessage(m.id, Auth.user)} className="chat__message sender">{m.message}</p>) :
                    <p className="noMessage">No message :(</p> }
                    <div className="chat__input">
                        <input
                            onChange={(event) => setMessage(event.target.value)} value={message}
                            name="message" type="text" placeholder="Enter your message..." autoComplete="off" />
                        <button onClick={() => {Messages.addMessage(Auth.user, message); setMessage("");}} className="chat__button_send">Send</button>
                    </div>
                </div>
            </div>
        </>
    );
})

export default Chat;