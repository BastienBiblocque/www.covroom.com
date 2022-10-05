import '../App.css';
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import React, {useEffect, useState} from "react";
import Loading from "../Components/AddTravelForm/loading";
import TravelInformations from "../Components/Travelnformations";
import CarInformation from "../Components/CarInformation";
import UserPicture from "../Components/UserCard/UserPicture/userPicture";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useParams} from "react-router";
import CalendarButton from "../Components/CalendarButton";
import {ThreeDots} from "react-loader-spinner";

function BookingConfirmation() {
    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const [booking, setBooking] = useState(null);

    let { id } = useParams();

    const getTravel = () =>{
        axios.get(`http://127.0.0.1:8000/booking/retrieve/${id}`)
            .then(res => {
                setBooking(res.data);
                setIsLoading(false);
            })
    }

    useEffect(()=>{
        getTravel();
    },[])

    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="w-full w-auto">
                        <div className="w-full">
                            {isLoading ? (<div className="flex mx-auto">
                                    <ThreeDots
                                        height="150"
                                        width="150"
                                        color='#7D2ED3'
                                        ariaLabel='loading'
                                        wrapperClass="mx-auto"
                                    />
                                </div>) :
                                <div className="flex
                                ">
                                <div className="card mx-auto md:w-[800px] bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
                                    <div className="card-body text-center">
                                        <p className="text-xl text-primary">Vous partez pour {booking.end_city} !</p>
                                        <div className="border-b border-hr"/>
                                        <div className="items-left text-left pt-5">
                                            <TravelInformations startAt={booking.startAt} endAt={booking.endAt} startCity={booking.start_city} endCity={booking.end_city}/>
                                            <div className="items-left text-left pb-5 mt-4">
                                                <UserPicture name={booking.user.name} firstname={booking.user.firstname} displayRate={false}/>
                                            </div>
                                        </div>
                                        <div className="items-left text-left pb-5">
                                            <div className="font-bold mr-5 mt-5">{booking.car.model} - {booking.car.color}</div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <CalendarButton startAt={booking.startAt} endAt={booking.endAt}/>

                                            <a href={`tel:${booking.user.phoneNumber}`} className="btn btn-primary">Contacter</a>
                                            <button className="btn btn-primary" onClick={()=>{navigate('/myBookings')}}>
                                                Voir mes réservations
                                            </button>
                                        </div>
                                    </div>
                                </div></div>}
                        </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BookingConfirmation;
