import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {NotificationContainer, NotificationManager} from "react-notifications";

function AddTravelCar(props) {

    const [car, setCar] = useState(null);
    const [seat, setSeat] = useState(null);
    const [seatMax, setSeatMax] = useState(null);


    const goNext = () => {
        if (seat && car) {
            props.setSelectedCar(car);
            props.setNumberOfSeat(seat);
            props.setType('travelPreferences');
        } else {
            NotificationManager.error('Veuillez selectionner un véhicule et un nombre de places', 'Selectionner une voiture', 3000);
            props.setType('travelPreferences');

        }
    }

    return (
        <div className="w-full w-auto">
            <NotificationContainer/>
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
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
                        <div className="card-body text-center">
                            <p className="text-xl text-primary">Avec quelle voiture ?</p>
                            <div className="border-b border-hr"/>
                            <div className="grid md:grid-cols-2 md:gap-4">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Veuillez choisir </span>
                                    </label>
                                    <select className="select select-primary w-full max-w-xs" onClick={(e)=>{
                                        setCar(e.target.value);
                                    }}>
                                        <option disabled selected>Veuillez choisir</option>
                                        {/*{car?.map((i)=>(*/}
                                        {/*    <option>{i}</option>*/}
                                        {/*))}*/}
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Veuillez choisir </span>
                                    </label>
                                    <select className="select select-primary w-full max-w-xs" onClick={(e)=>{
                                        setSeat(e.target.value);
                                    }}>
                                        <option disabled selected>Veuillez choisir</option>
                                        {/*{car?.map((i)=>(*/}
                                        {/*    <option>{i}</option>*/}
                                        {/*))}*/}
                                    </select>
                                </div>
                            </div>
                            <Link to="profil/car/add" className="text-sm">Ajouter un véhicules</Link>
                            <div className="card-actions justify-end my-4">
                                <button className="btn btn-primary" onClick={() => {goNext()}}>Suivant</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTravelCar;
