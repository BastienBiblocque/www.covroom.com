import React from 'react';
import { useNavigate } from "react-router-dom";

function SignInMoreInformations() {
    let navigate = useNavigate();

    return (
        <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
            <div className="card-body text-center">
                <p className="text-xl text-primary">Pour mieux vous connaître...</p>
                <div className="border-b border-hr"/>
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 md:gap-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Téléphone</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Téléphone"
                                className="input input-bordered input-primary w-full max-w-xs"/>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Genre</span>
                            </label>
                            <select className="select select-primary w-full max-w-xs">
                                <option disabled selected>Genre</option>
                                <option>Femme</option>
                                <option>Homme</option>
                                <option>Autre</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Date de naissance</span>
                            </label>
                            <input
                                type="date"
                                className="input input-bordered input-primary w-full max-w-xs"/>
                        </div>
                    </div>
                    <div>
                        <input type="file" id="pictures" className="hidden" />
                        <label
                            htmlFor="pictures"
                            className="text-primary">Ajouter une photo</label>
                    </div>
                </div>
                <div className="card-actions justify-end my-4">
                    <button className="btn btn-primary" onClick={() => {
                        navigate("/");
                    }}>Je m&apos;inscris</button>
                </div>
            </div>
        </div>
    );
}

export default SignInMoreInformations;
