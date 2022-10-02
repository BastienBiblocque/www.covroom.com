import '../App.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TravelInformations from "../Components/Travelnformations";
import UserPicture from "../Components/UserCard/UserPicture/userPicture";
import React, {useEffect, useState} from "react";
import axios from 'axios';

function MyBookings() {

    const [isLoading, setIsLoading] = useState(false);

    const [bookings, setBookings] = useState([]);

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

    return(
        <>
            <div id="container" className="md:min-h-screen">
                <Header />
                <div className="flex">
                    <div className="mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {bookings ? bookings.map((booking)=>
                                (
                                    <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
                                        <div className="card-body text-center">
                                            <p className="text-xl text-primary">{booking.start_city} - {booking.end_city}</p>
                                            <div className="border-b border-hr"/>
                                            <div className="items-left text-left py-5">
                                                <TravelInformations startAt={booking.startAt} endAt={booking.endAt} startCity={booking.start_city} endCity={booking.end_city}/>
                                            </div>
                                            <div className="items-left text-left py-5">
                                                <div className="font-bold mr-5 mt-5">{booking.car.model} - {booking.car.color}</div>
                                            </div>
                                            <div className="items-left text-left py-5">
                                                <UserPicture displayRate={false} name={booking.user.name} firstname={booking.user.firstname}/>
                                            </div>
                                            <div className="grid md:grid-cols-2 md:gap-4">
                                                <div>
                                                    <label className="label">
                                                        <span className="label-text">{booking.seat} Place réservés</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ) :null}
                        </div>
                    </div>
                </div>
            </div> 
            <Footer />
        </>
    )

}

export default MyBookings;