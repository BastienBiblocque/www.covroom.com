import React from 'react';

function UpdateCarForm(props) {
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
            <div className="card-body text-center">
                <p className="text-xl text-primary">Modifier les informations</p>
                <div className="border-b border-hr"/>
                <div className="grid md:grid-cols-2 md:gap-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Couleur</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Couleur"
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
                </div>
                <div>
                    <input type="file" id="pictures" className="hidden" />
                    <label
                        htmlFor="pictures"
                        className="text-primary">Modifier la photo</label>
                </div>
                <div className="card-actions justify-end my-4">
                    <button className="btn btn-primary" onClick={() => {props.setType('moreInformation')}}>Suivant</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateCarForm;
