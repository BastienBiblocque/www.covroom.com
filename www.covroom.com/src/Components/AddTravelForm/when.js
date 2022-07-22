import React, {useState} from 'react';

function AddTravelWhere(props) {

    const [day, setDay] = useState(null);
    const [hours, setHours] = useState(null);

    const [travelTimeH] = useState(1);
    const [travelTimeM] = useState(30);

    const goNext = () => {
        const startAt = new Date(day + ' ' + hours);
        const endAt = startAt;
        endAt.setHours(endAt.getHours() + travelTimeH);
        endAt.setMinutes(endAt.getMinutes() + travelTimeM);
        props.setStartDay(startAt);
        props.setEndDay(endAt);
        props.setType('car');
    }

    return (
        <div className="w-full w-auto">
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
                        <div className="card-body text-center">
                            <p className="text-xl text-primary">Votre trajet</p>
                            <div className="border-b border-hr"/>
                            <div className="text-left">
                                <p>Depart : {props.departCity}</p>
                                <p>Arrivée : {props.arriveCity}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
                        <div className="card-body text-center">
                            <p className="text-xl text-primary">Quand partez vous ?</p>
                            <div className="border-b border-hr"/>
                            <div className="grid md:grid-cols-2 md:gap-4">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Quel jour ?</span>
                                    </label>
                                    <input
                                        type="date"
                                        placeholder="Metz"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        onChange={(e)=>{
                                            setDay(e.target.value);
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Quel heure ? </span>
                                    </label>
                                    <input
                                        type="time"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        onChange={(e)=>{
                                            setHours(e.target.value);
                                        }}/>
                                </div>
                            </div>
                            <p className="text-sm">Temps de trajet estimé : {travelTimeH}h{travelTimeM}</p>

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

export default AddTravelWhere;
