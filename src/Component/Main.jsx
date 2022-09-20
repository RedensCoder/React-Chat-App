import React from "react";

import Chat from "./Chat";
import Aside from "./Aside";

const Main = () => {
    return (
        <>
            <Aside />
            <div className="wrapper">
                <h1>React Chat App</h1>
                <Chat />
            </div>
        </>
    );
}

export default Main;