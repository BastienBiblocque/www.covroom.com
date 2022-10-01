import '../App.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function MyProfile() {
    let navigate = useNavigate();

    const [profile, setProfile] = useState(null);

    const getData = () =>{
        const userId = localStorage.getItem('userId');
        if (!userId){
            navigate('/');
        }
        axios.get(`http://127.0.0.1:8000/user/retrieve/${userId}`)
            .then(res => {
                setProfile(res.data);
            })
    }

    useEffect(()=>{
        getData();
    },[])

    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
            </div>
            <Footer />
        </>
    );
}

export default MyProfile;
