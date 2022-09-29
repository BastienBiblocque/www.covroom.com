import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function LoginForm() {
    let navigate = useNavigate();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    async function login() {
        if (email && password) {
            await axios.post('http://127.0.0.1:8000/user/login', {
                email: email,
                password: password,
            }).then((res) => {
                localStorage.setItem('userId', res.data.id);
                localStorage.setItem('userName', res.data.name + ' - ' + res.data.firstName);
                navigate('/');
            });
        }
    }

    useEffect(()=>{
        const userId = localStorage.getItem('userId');
        if (userId){
            navigate('/');
        }
    },[])

    return (
        <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
            <div className="card-body text-center">
                <p className="text-xl text-primary">Connexion</p>
                <div className="border-b border-hr"/>
                <div className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Adresse Email</span>
                        </label>
                        <input type="text" placeholder="Adresse Email"
                               className="input input-bordered input-primary w-full max-w-xs"
                                onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Mot de passe</span>
                        </label>
                        <input type="password" placeholder="Mot de passe"
                               className="input input-bordered input-primary w-full max-w-xs"
                               onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="card-actions justify-end my-4">
                    <button className="btn btn-primary" onClick={()=>login()}>Je me connecte</button>
                </div>
                <div className="border-b border-hr"/>
                <div className="text-xs">
                    Pas encore de compte ? <Link to="/signin" className="text-primary">Cliquer ici</Link>
                </div>

            </div>
        </div>
    );
}

export default LoginForm;
