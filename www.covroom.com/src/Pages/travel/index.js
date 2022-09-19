import '../../App.css';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import React, {useState} from "react";
import UserPicture from "../../Components/UserCard/UserPicture/userPicture";
import TravelInformations from "../../Components/Travelnformations";
import CarInformation from "../../Components/CarInformation";
import {ThreeDots} from "react-loader-spinner";
import Loading from "../../Components/AddTravelForm/loading";
import {useNavigate} from "react-router-dom";

function Travel() {
    let navigate = useNavigate();

    function goNext() {
        console.log('go next');
        navigate('/bookingConfirmation/25');
    }

    const [seat, setSeat] = useState([1,2,3]);

    const [selectedSeat, setSelectedSeat] = useState(1);

    const [isLoading, setIsLoading] = useState(false);

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
                                    <p className="text-xl text-primary">Metz - Thionville</p>
                                    <div className="border-b border-hr"/>
                                    <div className="items-left text-left py-5">
                                        <TravelInformations/>
                                    </div>
                                    <div className="items-left text-left py-5">
                                        <CarInformation/>
                                    </div>
                                    <div className="items-left text-left py-5">
                                        <UserPicture/>
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
