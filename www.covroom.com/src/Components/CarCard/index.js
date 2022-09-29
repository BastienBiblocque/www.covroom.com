import { MdEventSeat } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import axios from "axios";
import {NotificationContainer, NotificationManager} from "react-notifications";
import React from 'react';

function CarCard(props) {
    function deleteCar() {
        axios.delete(`http://127.0.0.1:8000/car/delete/${props.car.id}`)
            .then(res => {
                props.getData();
            })
            .catch(err=>{
                NotificationManager.error('Impossible de supprimer cette voiture car elle est lié à un trajet', 'Erreur');
            })
    }

    return (
        <>
            <NotificationContainer/>
            <div className="card w-full shadow-xl">
                <div className="card-body">
                    <div className="flex">
                        <img className="h-[75px] w-[100px] rounded-md object-cover" src="https://api.lorem.space/image/car?w=150&h=150" alt="users pictures"/>
                        <div className="grid grid-cols-1 px-4">
                            <p className="card-title text-md">{props.car.model} - {props.car.year} - {props.car.numberplate}</p>
                            <p className="card-title text-sm">{props.car.seat}<MdEventSeat /></p>
                        </div>
                    </div>
                    <div>
                        {/*<button className="btn border-primary text-primary hover:bg-white" onClick={()=>{navigate('/car/update')}}>Modifier</button>*/}
                        <button className="btn border-primary text-primary hover:bg-white ml-4" onClick={deleteCar}><BsTrash /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CarCard;
