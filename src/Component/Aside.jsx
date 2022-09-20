import React from 'react';
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";

import "../CSS/ChatCSS.css";

import Auth from "../Store/Auth";

const Aside = observer(() => {
    return (
        <>
            <aside>
                <p className="aside__username">{Auth.user}</p>
                <ul>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/">Chat</NavLink></li>
                    <li><NavLink onClick={() => Auth.user = ""} to="/">Quit</NavLink></li>
                </ul>
            </aside>
        </>
    );
});

export default Aside;