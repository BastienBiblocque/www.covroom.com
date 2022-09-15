import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Index from './pages/Home';
import reportWebVitals from './reportWebVitals';
import './fonts/SharpSans/SharpSans-Medium.ttf';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./pages/login";
import SignIn from "./pages/Account/SigniIn";
import Car from "./pages/Car/ListCar";
import AddCar from "./pages/Car/AddCar";
import Faq from "./pages/Annex/Faq";
import SearchTravel from './pages/Travel/SearchTravel';
import UpdateCar from "./pages/Car/UpdateCar";
import CreateTravel from "./pages/create-travel";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
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
