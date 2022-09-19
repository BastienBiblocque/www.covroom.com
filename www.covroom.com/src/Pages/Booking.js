import '../App.css';
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import React, {useState} from "react";
import Loading from "../Components/AddTravelForm/loading";
import TravelInformations from "../Components/Travelnformations";
import CarInformation from "../Components/CarInformation";
import {useNavigate} from "react-router-dom";

function Booking() {
    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

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
