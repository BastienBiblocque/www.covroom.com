import '../App.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TravelInformations from "../Components/Travelnformations";
import CarInformation from "../Components/CarInformation";
import UserPicture from "../Components/UserCard/UserPicture/userPicture";
import React, {useEffect, useState} from "react";
import axios from 'axios';

function MyBookings() {

    // const [travel, setTravel] =useState(null);

    // let { id } = useParams();

    // const getTravel = () =>{
    //     axios.get(`http://127.0.0.1:8000/travel/retrieve/${id}`)
    //         .then(res => {
    //             setTravel(res.data);
    //             const tmp = [];
    //             for (let i=0; i<res.data.seat.available; i++){
    //                 tmp.push(i+1);
    //                 console.log(i)
    //             }
    //             setSeat(tmp);
    //             setIsLoading(false);
    //         })
    // }

    // useEffect(()=>{
    //     getTravel();
    // },[])

    // const [seat, setSeat] = useState([]);

    // const [selectedSeat, setSelectedSeat] = useState(1);

    // const [isLoading, setIsLoading] = useState(true);

    const car = {
        model: "207",
        color: "Rouge"
    };

    const seat = {
        available: 4,
        max: 5
    };

    return(
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="flex">
                    <div className="mx-auto">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
                                    <div className="card-body text-center">
                                        <p className="text-xl text-primary">Metz - Nancy</p>
                                        <div className="border-b border-hr"/>
                                        <div className="items-left text-left py-5">
                                            <TravelInformations startCity="Metz" endCity="Nancy"/>
                                        </div>
                                        <div className="items-left text-left py-5">
                                            <CarInformation car={car} seat={seat} />
                                        </div>
                                        <div className="items-left text-left py-5">
                                            <UserPicture name={travel.user.name} firstname={travel.user.firstname}/>
                                        </div>
                                        <div className="grid md:grid-cols-2 md:gap-4">
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Place réservés</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <Footer />
        </>
    )

}

export default MyBookings;