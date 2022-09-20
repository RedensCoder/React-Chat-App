import * as React from "react";
// @ts-ignore
import Chat from "./Chat.tsx";
// @ts-ignore
import Aside from "./Aside.tsx";

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