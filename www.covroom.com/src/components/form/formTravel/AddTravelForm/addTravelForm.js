import React, {useState} from 'react';
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYmFiYWJpYmkiLCJhIjoiY2w1dXA2NWdyMDIxMjNicDd2OHB0eWpicyJ9.CJoF4voYHYvrY1EWBmw_Xw';
function AddTravelIndex(props) {
    const [departSelection, setDepartSelection] = useState(null);
    const [arriveSelection, setArriveSelection] = useState(null);
    const [departSelected, setDepartSelected] = useState(null);
    const [arriveSelected, setArriveSelected] = useState(null);


    const searchCity = async (city,isDepart) => {
        const resLocations = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`, {
            params: {
                access_token: 'pk.eyJ1IjoiYmFiYWJpYmkiLCJhIjoiY2w1dXA5eThlMDIwOTNpbnBhdXpzODN2bSJ9.nC1vliGUOsBf2BK6WQzm3g',
                country: ['FR'],
                limit: 5,
                types: 'poi,place',
                language: 'FR',
            },
        });
        if (isDepart) {
            setDepartSelection(resLocations.data.features);
        } else {
            setArriveSelection(resLocations.data.features);
        }
    };

    const goNext = () => {
        if (departSelected && arriveSelected) {
            props.setDepartCity(departSelected.text_FR);
            props.setDepartLat(departSelected.geometry.coordinates[0]);
            props.setDepartLong(departSelected.geometry.coordinates[1]);
            props.setArriveCity(arriveSelected.text_FR);
            props.setArriveLat(arriveSelected.geometry.coordinates[0]);
            props.setArriveLong(arriveSelected.geometry.coordinates[1]);
            props.setType('when');
        } else {
            NotificationManager.error('Choisis une ville ou jte goume', 'Selectionner les deux villes', 3000);
        }
    }

    return (
        <div className="w-full w-auto">
            <NotificationContainer/>
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <div>
                        <div>
                            map here
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
                        <div className="card-body text-center">
                            <p className="text-xl text-primary">Proposer un trajet</p>
                            <div className="border-b border-hr"/>
                            <div className="grid md:grid-cols-2 md:gap-4">
                                <div>
                                    <label className="label">
                                        <span className="label-text">D&apos;où partez vous ? </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Metz"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        onChange={(e)=>{
                                            searchCity(e.target.value,true).then()
                                        }}
                                        />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Veuillez choisir </span>
                                    </label>
                                    <select className="select select-primary w-full max-w-xs"
                                        onChange={(e)=>{
                                            setDepartSelected(departSelection.find(element=>element.id === e.target.value));
                                        }}>
                                        <option disabled selected>Veuillez choisir</option>
                                        {departSelection?.map((i)=>(
                                            <option value={i.id}>{i.text_FR}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Où allez-vous ?</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Nancy"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        onChange={(e)=>{
                                            searchCity(e.target.value,false).then()
                                        }}/>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Veuillez choisir </span>
                                    </label>
                                    <select className="select select-primary w-full max-w-xs" onClick={(e)=>{
                                        setArriveSelected(arriveSelection.find(element=>element.id === e.target.value));
                                    }}>
                                        <option disabled selected>Veuillez choisir</option>
                                        {arriveSelection?.map((i)=>(
                                            <option value={i.id}>{i.text_FR}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

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

export default AddTravelIndex;
