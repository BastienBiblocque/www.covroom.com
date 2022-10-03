import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function AddTravelFinish(props) {
    let navigate = useNavigate();
    const [travelPreferences, setTravelPrefrences] = useState(null);

    const goNext = () => {
        props.setTravelPreferences(travelPreferences);
        props.setType('finish');
        props.createTravel();
    }

    return (
        <div className="w-full w-auto">
            <div className="mx-auto">
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
                                {/*<p>Préference de trajet : {props.travelPreferences}</p>*/}
                            </div>
                            <div className="card-actions justify-end my-4">
                                <button className="btn btn-primary" onClick={()=>{navigate("/myTravels");}}>
                                    Voir mes trajets
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTravelFinish;
