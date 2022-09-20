import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {observer} from "mobx-react-lite";
// @ts-ignore
import Auth from "./Store/Auth.ts";

// @ts-ignore
import NonAuth from "./Component/NonAuth.tsx";
// @ts-ignore
import Main from "./Component/Main.tsx";
// @ts-ignore
import NoPage from "./NoPage.tsx";
// @ts-ignore
import Profile from "./Component/Profile.tsx";

const App = observer(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Auth.user !== "" ? <Main /> : <NonAuth /> } />
                <Route path="/profile" element={Auth.user !== "" ? <Profile /> : <NonAuth /> } />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
});

export default App;