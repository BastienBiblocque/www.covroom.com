import React from 'react';
import {useNavigate} from "react-router-dom";

function MoreInformation() {
    let navigate = useNavigate();

    return (
        <div className="card bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
            <div className="card-body text-center">
                <p className="text-xl text-primary">Completer les informations</p>
                <div className="border-b border-hr"/>
                <div className="grid md:grid-cols-2 md:gap-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Marque</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Marque"
                            className="input input-bordered input-primary w-full max-w-xs"/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Modèle</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Modèle"
                            className="input input-bordered input-primary w-full max-w-xs"/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Année</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Année"
                            className="input input-bordered input-primary w-full max-w-xs"/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Nombre de place</span>
                        </label>
                        <input
                            type="number"
                            placeholder="2"
                            className="input input-bordered input-primary w-full max-w-xs"/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Couleur</span>
                        </label>
                        <input
                            type="text"
                            placeholder="couleur"
                            className="input input-bordered input-primary w-full max-w-xs"/>
                    </div>
                </div>
                <div>
                    <input type="file" id="pictures" className="hidden" />
                    <label
                        htmlFor="pictures"
                        className="text-primary">Ajouter une photo</label>
                </div>
                <div className="card-actions justify-end my-4">
                    <button className="btn btn-primary" onClick={()=>{navigate("/car");}}>Suivant</button>
                </div>
            </div>
        </div>
    );
}

export default MoreInformation;
