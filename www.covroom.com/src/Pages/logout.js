import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Loading from "../Components/AddTravelForm/loading";

function Logout() {
    let navigate = useNavigate();

    useEffect(()=>{
        const userId = localStorage.getItem('userId');
        if (userId){
            localStorage.removeItem('userId');
            navigate('/');

        } else {
            navigate('/');

        }
    },[])
    return (
        <Loading/>
    );
}

export default Logout;
