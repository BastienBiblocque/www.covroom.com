import '../App.css';
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import React, {useEffect, useState} from "react";
import Loading from "../Components/AddTravelForm/loading";
import TravelInformations from "../Components/Travelnformations";
import CarInformation from "../Components/CarInformation";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Booking() {
    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [bookings, setBookings] = useState(null);

    const getBooking = () =>{
        const userId = localStorage.getItem('userId');

        axios.get(`http://127.0.0.1:8000/booking/retrieve/user/${userId}`)
            .then(res => {
                setBookings(res.data);
                setIsLoading(false);
            })
    }

    useEffect(()=>{
        getBooking();
    },[])

    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="w-full w-auto">
                    <div>
                        Toutes vos réservations
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Booking;
