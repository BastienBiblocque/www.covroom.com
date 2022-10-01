import '../App.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TravelInformations from "../Components/Travelnformations";
import CarInformation from "../Components/CarInformation";
import UserPicture from "../Components/UserCard/UserPicture/userPicture";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function MyTravels() {
    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [travels, setTravels] = useState([]);

    const getTravels = () =>{
        const userId = localStorage.getItem('userId');

        axios.get(`http://127.0.0.1:8000/travel/retrieve/user/${userId}`)
            .then(res => {
                setTravels(res.data.reverse());
                setIsLoading(false);
            })
    }

    useEffect(()=>{
        getTravels();
    },[])

    return(
        <>
            <div id="container" className="md:min-h-screen">
                <Header />
                <div className="flex">
                    <div className="mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {travels ? travels.map((travel)=>
                                (
                                    <div className={`card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0 ${travel.isFuture ? 'border border-primary':null}`}>
                                        <div className="card-body text-center">
                                            <p className="text-xl text-primary">{travel.startCity} - {travel.endCity}</p>
                                            <div className="border-b border-hr"/>
                                            <div className="items-left text-left py-5">
                                                <TravelInformations startAt={travel.startAt} endAt={travel.endAt} startCity={travel.startCity} endCity={travel.endCity}/>
                                            </div>
                                            <div className="items-left text-left py-5">
                                                <div className="font-bold mr-5 mt-5">{travel.car.model} - {travel.car.color}</div>
                                                <div className="font-medium">{travel.seats.available} réservé sur {travel.seats.max}</div>
                                            </div>
                                            <div className="items-left text-left py-5">
                                                <ul>
                                                    {travel.seat.map((seat)=>
                                                        seat.firstname ?(<li className="text-primary hover:cursor-pointer"><a>{seat.name} - {seat.firstname}</a></li>) :null
                                                    )}
                                                </ul>
                                            </div>
                                            {!travel.isFuture && travel.seats.available > 0 ? (
                                                <div className="items-left text-left py-5">
                                                    <button className="btn btn-primary" onClick={() => {navigate()}}>Noter</button>
                                                </div>
                                            ) :null}
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

export default MyTravels;