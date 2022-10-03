import Footer from '../../Components/Footer';
import Header from "../../Components/Header";
import UserPicture from "../../Components/UserCard/UserPicture/userPicture";
import {Link, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Loading from "../../Components/AddTravelForm/loading";
import {NotificationContainer, NotificationManager} from "react-notifications";

function TravelNotation() {
    let navigate = useNavigate();

    const [rate, setRate] = useState(5);
    const [comment, setComment] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const [travel, setTravel] = useState(null);
    const [user, setUser] = useState(null);

    const getTravel = () =>{
        const url = window.location.href;
        const splitUrl = url.split('/');

        axios.get(`http://127.0.0.1:8000/travel/retrieve/${splitUrl[4]}`)
            .then(res => {
                setTravel(res.data);
            })
    }

    const getUser = () =>{
        const url = window.location.href;
        const splitUrl = url.split('/');

        axios.get(`http://127.0.0.1:8000/user/retrieve/${splitUrl[6]}`)
            .then(res => {
                setUser(res.data);
            })
    }

    useEffect(()=>{
        if (user && travel) {
            setIsLoading(false);
        }
    },[user, travel])

    useEffect(()=>{
        getTravel();
        getUser();
    },[])

    function doRate() {
        const url = window.location.href;
        const splitUrl = url.split('/');
        const userId = localStorage.getItem('userId');

        axios.post(`http://127.0.0.1:8000/rate/new`,{
            rate:rate,
            comment:comment,
            idFrom:userId,
            idTo:splitUrl[6],
            travelId:splitUrl[4],
        })
        .then(res => {
            console.log(res.data.code)
            if (res.data.code === '0') {
                NotificationManager.error('Vous avez déja envoyer un avis pour ce trajet', '', 3000);
            } else {
                navigate('/myTravels');
            }
        })
    }

    return (
        <>
            <div id="container" className="md:h-screen">
                <NotificationContainer/>
                <Header />
                <div className="pt-10 mx-auto w-96 m-10">
                {isLoading ? (<Loading/>) :(
                        <div className="card bg-base-100 border border-primary rounded-md w-96 m-10 py-4">
                            <UserPicture
                                firstname={user.firstName}
                                name={user.name}
                                displayRate={false}/>
                            <div className='flex justify-center mt-5'>
                                <span className='font-bold'>Detail du trajet</span>
                            </div>
                            <p className='flex justify-center'>{travel.start_city} - {travel.end_city}</p>
                            <div className='p-10 flex justify-center'>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Note</span>
                                    </label>
                                    <select className="select select-primary w-full max-w-xs"
                                            onChange={(e)=>{setRate(e.target.value)}}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5" selected>5</option>
                                    </select>
                                    <label className="label">
                                        <span className="label-text">Commentaire</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Commentaire"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        onChange={(e)=>{setComment(e.target.value)}}
                                    />
                                </div>
                            </div>
                            <button
                                className="btn color-primary bg-primary text-[#ffffff] hover:bg-secondary border-none w-12/12 self-center rounded-full" onClick={doRate}>Noter
                            </button>
                        </div>
                )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TravelNotation;
