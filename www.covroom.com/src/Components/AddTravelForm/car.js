import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {NotificationContainer, NotificationManager} from "react-notifications";
import axios from "axios";

function AddTravelCar(props) {

    const [car, setCar] = useState(null);
    const [seat, setSeat] = useState(null);

    const [cars, setCars] = useState(null);

    const getCar = () =>{
        axios.get(`http://127.0.0.1:8000/car/user/${1}`)
            .then(res => {
                setCars(res.data);
            })
    }

    useEffect(()=>{
        getCar();
    },[])

    const [potentialSeat, setPotentialSeat] = useState([]);

    useEffect(()=>{
        if (car) {
            potentialSeat.length = 0;
            const tmp = [];
            cars.forEach((element)=>{
                if (element.id.toString() === car.toString()) {
                    for (let i = 0; i< element.seat;i++) {
                        tmp.push(i+1);
                    }
                }
            })
            setPotentialSeat(tmp);
        }
    },[car])

    const goNext = () => {
        if (seat && car) {
            props.setSelectedCar(car);
            props.setNumberOfSeat(seat);
            props.setType('travelPreferences');
        } else {
            NotificationManager.error('Veuillez selectionner un véhicule et un nombre de places', 'Selectionner une voiture', 3000);
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
                                        {cars?.map((car)=>(
                                            <option value={car.id}>{car.model}</option>
                                        ))}
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
                                        {potentialSeat?.map((i)=>(
                                            <option value={i}>{i}</option>
                                        ))}
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
