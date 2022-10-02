import '../../App.css';
import {AiFillStar} from "react-icons/ai";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import NoteCard from '../../Components/NoteCard';
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {ThreeDots} from "react-loader-spinner";


function MyProfileUpdate() {

    let navigate = useNavigate();

    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [mail, setMail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [description, setDescription] = useState(null);

    const userId = localStorage.getItem('userId');

    const getData = () =>{
        if (!userId){
            navigate('/');
        }
        axios.get(`http://127.0.0.1:8000/user/retrieve/${userId}`)
            .then(res => {
                setProfile(res.data);
                setMail(res.data.email);
                setPhone(res.data.phoneNumber);
                setDescription(res.data.description);
                setIsLoading(false);
            })
    }

    useEffect(()=>{
        getData();
    },[])

    function update() {
        setIsLoading(true)
        axios.patch(`http://127.0.0.1:8000/user/update/${userId}`,{
            email:mail,
            phoneNumber:phone,
            description:description,
        })
            .then(() => {
                navigate('/myProfile');
            })
    }

    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="flex">
                    <div className="mx-auto">
                        {isLoading ? (<ThreeDots
                            height="150"
                            width="150"
                            color='#7D2ED3'
                            ariaLabel='loading'
                            wrapperClass="mx-auto"
                        />):(
                            <div className="grid grid-cols-10 gap-10 mx-10">
                                <div className="col-span-3 h-full">
                                    <div className="card md:w-72 bg-[#eff0f2] shadow-xl my-8 mx-4 md:mx-0 h-full">
                                        <div className="card-body text-center">
                                            <div className="avatar m-5">
                                                <div className="w-28 mx-auto rounded-full">
                                                    <img src="https://placeimg.com/192/192/people" alt="users-pictures"/>
                                                </div>
                                            </div>
                                            <div className="items-center text-center py-5">
                                                <p className="font-bold">{profile.name} {profile.firstName}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-7 px-5">
                                    <div className="grid grid-row-3 gap-8">
                                        <div className="row-span-1">
                                            <div className="grid grid-cols-2">
                                                <div className="items-left text-left py-5">
                                                    <p className="font-bold text-[#7d2ed3] pt-5 text-2xl">Bonjour {profile.firstName}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="items-left text-left my-5 mr-10">
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="label-text">Nouveau mail</span>
                                                </label>
                                                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" defaultValue={mail} onChange={(e)=>{setMail(e.target.value)}} />
                                            </div>
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="label-text">Numéro de téléphone</span>
                                                </label>
                                                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" defaultValue={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                                            </div>
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="label-text">Description</span>
                                                </label>
                                                <input placeholder="Type here" className="input input-bordered input-primary w-full" defaultValue={description} onChange={(e)=>{setDescription(e.target.value)}} />
                                            </div>
                                            <div className="grid grid-row-1 py-2">
                                                <div className="grid grid-cols-5 ">
                                                    <div className="col-span-3">
                                                        {/* <button className="btn btn-outline btn-error">Supprimer le compte</button> */}
                                                    </div>
                                                    <div className="items-right text-right"><button className="btn btn-outline btn-primary" onClick={()=>{navigate('/myProfile')}}>Annuler</button></div>
                                                    <div className="items-right text-right"><button className="btn btn-primary" onClick={update}>Valider</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MyProfileUpdate;
