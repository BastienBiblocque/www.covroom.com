import '../../App.css';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import React, {useEffect, useState} from "react";
import UserPicture from "../../Components/UserCard/UserPicture/userPicture";
import TravelInformations from "../../Components/Travelnformations";
import CarInformation from "../../Components/CarInformation";
import Loading from "../../Components/AddTravelForm/loading";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useParams} from "react-router";

function Travel() {
    let navigate = useNavigate();

    function goNext() {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            navigate('/login');
        }

        axios.post(`http://127.0.0.1:8000/booking/new`,{
            idTravel:id,
            idUser: userId,
            seat:selectedSeat,
        })
            .then(res => {
                navigate(`/bookingConfirmation/${res.data.id}`);
            })
    }

    const [travel, setTravel] =useState(null);

    let { id } = useParams();

    const getTravel = () =>{
        axios.get(`http://127.0.0.1:8000/travel/retrieve/${id}`)
            .then(res => {
                setTravel(res.data);
                const tmp = [];
                for (let i=0; i<res.data.seat.available; i++){
                    tmp.push(i+1);
                }
                setSeat(tmp);
                setIsLoading(false);
            })
    }

    useEffect(()=>{
        getTravel();
    },[])

    const [seat, setSeat] = useState([]);

    const [selectedSeat, setSelectedSeat] = useState(1);

    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="w-full w-auto">
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <div>
                                <div>
                                    map here
                                </div>
                            </div>
                        </div>
                        <div>
                            {isLoading ? (<div>
                                <Loading/>
                            </div>) :
                            <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
                                <div className="card-body text-center">
                                    <p className="text-xl text-primary">{travel.start_city} - {travel.end_city}</p>
                                    <div className="border-b border-hr"/>
                                    <div className="items-left text-left py-5">
                                        <TravelInformations startCity={travel.start_city} endCity={travel.end_city}/>
                                    </div>
                                    <div className="items-left text-left py-5">
                                        <CarInformation car={travel.car} seat={travel.seat} />
                                    </div>
                                    <div className="items-left text-left py-5">
                                        <UserPicture name={travel.user.name} firstname={travel.user.firstname}/>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-4">
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Place réservés</span>
                                            </label>
                                            <select className="select select-primary w-full max-w-xs"
                                                    onChange={(e)=>{
                                                        setSelectedSeat(e.target.value);
                                                    }}>
                                                {seat?.map((i)=>(
                                                    <option value={i}>{i}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="card-actions justify-end my-auto">
                                            <button className="btn btn-primary" onClick={() => {goNext()}}>Réserver</button>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Travel;
