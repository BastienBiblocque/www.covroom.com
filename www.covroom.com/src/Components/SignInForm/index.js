import React from 'react';

function SignInForm() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-8">
            <div className="card-body text-center">
                <p className="text-xl text-primary">Rejoindre Covroom</p>
                <div className="border-b border-hr"/>
                <div className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Adresse Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Adresse Email"
                            className="input input-bordered input-primary w-full max-w-xs"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Prénom</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Prénom"
                                className="input input-bordered input-primary w-full max-w-xs"/>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Nom</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Nom"
                                className="input input-bordered input-primary w-full max-w-xs"/>
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Mot de passe</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </div>
                </div>
                <div className="card-actions justify-end my-4">
                    <button className="btn btn-primary">Je m&apos;inscris</button>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;
