import React, {useState} from 'react';

function SignInForm(props) {

    const [mail, setMail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    function goNext() {
        if (mail && firstName && name && password) {
            props.setMail(mail);
            props.setFirstName(firstName);
            props.setName(name);
            props.setPassword(password);
            props.setType("moreInformation");
        }
    }

    return (
        <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
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
                            className="input input-bordered input-primary w-full max-w-xs"
                            onChange={(e)=>{setMail(e.target.value)}}
                        />
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Prénom</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Prénom"
                                className="input input-bordered input-primary w-full max-w-xs"
                                onChange={(e)=>{setFirstName(e.target.value)}}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Nom</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Nom"
                                className="input input-bordered input-primary w-full max-w-xs"
                                onChange={(e)=>{setName(e.target.value)}}
                            />
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
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                </div>
                <div className="card-actions justify-end my-4">
                    <button className="btn btn-primary" onClick={() => {
                        goNext();
                    }}>Je m&apos;inscris</button>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;
