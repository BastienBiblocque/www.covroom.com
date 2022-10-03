import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loading from "./loading";

function AddTravelPrefrences(props) {

    const [travelPreferences, setTravelPrefrences] = useState(null);
    const [selectedTP, setSelectedTP] = useState([]);

    const [isLoading, setIsLoading] = useState(true)

    const getCar = () =>{
        axios.get(`http://127.0.0.1:8000/travel_preference`)
            .then(res => {
                setTravelPrefrences(res.data);
                setIsLoading(false);
            })
    }

    useEffect(()=>{
        getCar();
    },[])

    const goNext = () => {
        props.setTravelPreferenceprops('travelPreferences');
        props.setType('finish');
        props.createTravel();
    }

    return (
        <div className="w-full w-auto">
            {isLoading ? (<Loading/>) : (
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
                        <div className="card-body text-center">
                            <p className="text-xl text-primary">Votre trajet</p>
                            <div className="border-b border-hr"/>
                            <div className="text-left">
                                <p>Depart : {props.departCity}</p>
                                <p>Arrivée : {props.arriveCity}</p>
                                <p>Date d&apos;arrivée : {props.startDay.toLocaleDateString()}</p>
                                <p>Date de départ : {props.endDay.toLocaleDateString()}</p>
                                <p>Voiture selectionnée : {props.selectedCar}</p>
                                <p>Nombre de place : {props.numberOfSeat}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
                        <div className="card-body">
                            <p className="text-xl text-primary mx-auto">Récapitulatif</p>

                            {/*<div>*/}
                            {/*    <div className="text-primary text-xl">Fumeur</div>*/}
                            {/*    <div className="grid grid-cols-2 gap-8 pt-4">*/}
                            {/*        {travelPreferences.map((travelPreference)=>(*/}

                            {/*            <div className={`p-4 border rounded-xl cursor-pointer ${selectedTP.includes(travelPreference.id) ? "border-primary" :"border-grey" }`} onClick={()=>{*/}
                            {/*                if (selectedTP.includes(travelPreference.id)) {*/}
                            {/*                    selectedTP.splice(selectedTP.indexOf(travelPreference.id), 1);*/}
                            {/*                } else {*/}
                            {/*                    selectedTP.push(travelPreference.id);*/}
                            {/*                }*/}
                            {/*                setSelectedTP(selectedTP);*/}
                            {/*            }}>*/}
                            {/*                {travelPreference.name}*/}
                            {/*            </div>*/}
                            {/*        ))}*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="card-actions mx-auto my-4">
                                <button className="btn btn-primary" onClick={() => {goNext()}}>Créer mon trajet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}</div>
    );
}

export default AddTravelPrefrences;
