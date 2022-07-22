import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Index from './Pages';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./Pages/login";
import SignIn from "./Pages/signin";
import Car from "./Pages/car";
import AddCar from "./Pages/car/addCar";
import Faq from "./Pages/faq";
import UpdateCar from "./Pages/car/updateCar";
import CreateTravel from "./Pages/create-travel";
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
            <Route path="/car/update" element={<UpdateCar />} />
            <Route path="/create-travel" element={<CreateTravel />} />
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
