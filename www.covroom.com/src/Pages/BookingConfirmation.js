import '../App.css';
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import React, {useState} from "react";
import Loading from "../Components/AddTravelForm/loading";
import TravelInformations from "../Components/Travelnformations";
import CarInformation from "../Components/CarInformation";
import UserPicture from "../Components/UserCard/UserPicture/userPicture";
import {useNavigate} from "react-router-dom";

function BookingConfirmation() {
    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="w-full w-auto">
                        <div>
                            {isLoading ? (<div>
                                    <Loading/>
                                </div>) :
                                <div className="card md:w-[800px] bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
                                    <div className="card-body text-center">
                                        <p className="text-xl text-primary">Vous partez pour Thionville !</p>
                                        <div className="border-b border-hr"/>
                                        <div className="items-left text-left py-5">
                                            <TravelInformations/>
                                        </div>
                                        <div className="items-left text-left py-5">
                                            <CarInformation/>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <button className="btn btn-white">
                                                Ajouter au calendrier
                                            </button>
                                            <button className="btn btn-white">
                                                Contacter
                                            </button>
                                            <button className="btn btn-primary" onClick={()=>{navigate('/booking')}}>
                                                Voir mes réservations
                                            </button>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BookingConfirmation;
