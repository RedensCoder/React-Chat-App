import {useState} from 'react';
import {observer} from "mobx-react-lite";

import "../CSS/ChatCSS.css";
// @ts-ignore
import Auth from "../Store/Auth.ts";

const NonAuth = observer(() => {
    const [userName, setUserName] = useState("");

    return (
        <div className="wrapper">
            <h1>React Chat App</h1>
            <p className="wrapper__title">LOGIN</p>
            <div className="nonauth__input">
                <input
                    onChange={(event) => setUserName(event.target.value)} value={userName}
                    name="message" type="text" placeholder="Enter your name" autoComplete="off" />
                <button onClick={() => Auth.addUser(userName)} className="chat__button_send">Login</button>
            </div>
        </div>
    );
});

export default NonAuth;