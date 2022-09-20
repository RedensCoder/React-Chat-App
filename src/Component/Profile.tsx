import {useState} from 'react';
// @ts-ignore
import Auth from "../Store/Auth.ts";
// @ts-ignore
import Aside from "./Aside.tsx";

const Profile = () => {
    const [userName, setUserName] = useState("");

    return (
        <>
            <Aside />
            <div className="wrapper">
                <h1>React Chat App</h1>
                <div className="content">
                    <p className="userName">Hello, {Auth.user}!</p>
                    <div className="settings">
                        <p>Change name</p>
                        <input
                            onChange={(event) => setUserName(event.target.value)} value={userName}
                            name="message" type="text" placeholder="Enter your new name" autoComplete="off" />
                        <button onClick={() => {Auth.addUser(userName); setUserName("")}} className="chat__button_send">Change</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;