import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './Pages';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./Pages/login";
import SignIn from "./Pages/signin";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            {/*<Route index element={<Home />} />*/}
            {/*<Route path="teams" element={<Teams />}>*/}
            {/*    <Route path=":teamId" element={<Team />} />*/}
            {/*    <Route path="new" element={<NewTeamForm />} />*/}
            {/*    <Route index element={<LeagueStandings />} />*/}
            {/*</Route>*/}
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
