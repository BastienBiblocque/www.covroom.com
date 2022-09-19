import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import './fonts/SharpSans/SharpSans-Medium.ttf';
import './index.css';

import Home from './pages/Home';
import Login from './pages/Account/Login';
import SignIn from './pages/Account/SigniIn';
import Faq from './pages/Annex/Faq';
import Car from './pages/Car/ListCar';
import AddCar from './pages/Car/AddCar';
import UpdateCar from './pages/Car/UpdateCar';
import SearchTravel from './pages/Travel/SearchTravel';
import CreateTravel from './pages/Travel/CreateTravel'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/car" element={<Car />} />
            <Route path="/car/add" element={<AddCar />} />
            <Route path="/search" element={<SearchTravel />} />
            <Route path="/car/update" element={<UpdateCar />} />
            <Route path="/create-travel" element={<CreateTravel />} />
            {/*<Route index element={<Home />} />*/}
            {/*<Route path="teams" element={<Teams />}>*/}
            {/*    <Route path=":teamId" element={<Team />} />*/}
            {/*    <Route path="new" element={<NewTeamForm />} />*/}
            {/*    <Route index element={<LeagueStandings />} />*/}
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
