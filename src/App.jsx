import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {observer} from "mobx-react-lite";

import Auth from "./Store/Auth";

import NonAuth from "./Component/NonAuth";
import Main from "./Component/Main";
import NoPage from "./NoPage";
import Profile from "./Component/Profile";

const App = observer(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={Auth.user != "" ? <Main /> : <NonAuth /> } />
                <Route path="/profile" element={Auth.user != "" ? <Profile /> : <NonAuth /> } />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
});

export default App;