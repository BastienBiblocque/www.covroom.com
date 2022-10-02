import '../../App.css';
import {AiFillStar} from "react-icons/ai";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import NoteCard from '../../Components/NoteCard';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {ThreeDots} from "react-loader-spinner";


function MyProfile() {

    const isUser = true;

    let navigate = useNavigate();

    const [profile, setProfile] = useState(null);
    const [rate, setRate] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [moreFromDisplay, setMoreFromDisplay] = useState(false);
    const [moreToDisplay, setMoreToDisplay] = useState(false);

    const getData = () =>{
        const userId = localStorage.getItem('userId');
        if (!userId){
            navigate('/');
        }
        axios.get(`http://127.0.0.1:8000/user/retrieve/${userId}`)
            .then(res => {
                setProfile(res.data);
            })
        axios.get(`http://127.0.0.1:8000/rate/user/${userId}`)
            .then(res => {
                setRate(res.data);
            })
    }

    useEffect(()=>{
        if (profile && rate) {
            setIsLoading(false);
        }
    },[profile && rate])

    useEffect(()=>{
        getData();
    },[])

    return (
        <>
            <div id="container" className="md:min-h-screen">
                <Header />
                <div className="flex">
                    <div className="mx-auto">
                        {isLoading ? (<ThreeDots
                            height="150"
                            width="150"
                            color='#7D2ED3'
                            ariaLabel='loading'
                            wrapperClass="mx-auto"
                        />) : (
                        <div className="grid grid-cols-10 gap-8">
                            <div className="col-span-3">
                                <div className="card md:w-72 bg-[#eff0f2] shadow-xl my-8 mx-4 md:mx-0">
                                    <div className="card-body text-center">
                                        <div class="avatar m-5">
                                            <div class="w-28 mx-auto rounded-full">
                                                <img src="https://placeimg.com/192/192/people" alt="users-pictures"/>
                                            </div>
                                        </div>
                                        <div className="items-center text-center py-5">
                                            <p class="font-bold">{profile.name} {profile.firstName}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-7">
                                <div className="grid grid-row-3 gap-8">
                                    <div className="row-span-1">
                                        <div className="grid grid-cols-2">
                                            <div className="items-left text-left py-5">
                                                <p class="font-bold text-[#7d2ed3] pt-5">{profile.name} {profile.firstName}</p>
                                            </div>
                                            <div className="items-right text-right py-5">
                                                {isUser ? (<button className="btn btn-primary" onClick={()=>{navigate('/myProfile/update')}}>Modifier</button>) : null }
                                            </div>
                                            <div className="pt-5 mb-4">
                                                <span class="flex gap-1 font-bold"><AiFillStar/>{rate.average} - {rate.quantity} avis</span>
                                            </div>
                                        </div>
                                        <div className="border-b border-hr"/>
                                    </div>
                                    <div className="row-span-2">
                                        <div className="grid grid-cols-2">
                                            <div className="border-r border-hr mx-4">
                                                <div className="items-center text-center">
                                                    <p class="font-bold text-[#7d2ed3] pt-5">Avis recu</p>
                                                </div>
                                                <div className="items-center text-left my-5 mr-10">
                                                    {rate.to.length  ? !moreToDisplay ?
                                                            (
                                                                <NoteCard name={rate.to[0].ratedUser.name} firstname={rate.to[0].ratedUser.firstName} review={rate.to[0].comment}/>
                                                            ):null
                                                        :(
                                                            <div className="items-center text-center">
                                                                <p className="font-bold text-[#7d2ed3] pt-5">Aucun avis recu</p>
                                                            </div>
                                                        )}
                                                    {moreToDisplay ? rate.to.map((element)=>
                                                        (
                                                            <NoteCard name={element.ratedUser.name} firstname={element.ratedUser.firstName} review={element.comment}/>
                                                        )
                                                    ) :null}
                                                </div>
                                                {rate.to.length > 0 && !moreToDisplay ? (
                                                    <div className="items-center text-center">
                                                        <button className="btn btn-outline btn-primary" onClick={()=>{setMoreToDisplay(true)}}>Voir plus</button>
                                                    </div>
                                                ) :null}
                                            </div>
                                            <div className="mx-4">
                                            <div className="items-center text-center">
                                                    <p class="font-bold text-[#7d2ed3] pt-5">Avis laissé</p>
                                                </div>
                                                <div className="items-center text-left my-5">
                                                    {rate.from.length  ? !moreFromDisplay ?
                                                        (
                                                            <NoteCard name={rate.from[0].ratedUser.name} firstname={rate.from[0].ratedUser.firstName} review={rate.from[0].comment}/>
                                                        ):null
                                                     :(
                                                        <div className="items-center text-center">
                                                            <p className="font-bold text-[#7d2ed3] pt-5">Aucun avis laissé</p>
                                                        </div>
                                                    )}
                                                    {moreFromDisplay ? rate.from.map((element)=>
                                                        (
                                                            <NoteCard name={element.ratedUser.name} firstname={element.ratedUser.firstName} review={element.comment}/>
                                                        )
                                                    ) :null}
                                                </div>
                                                {rate.from.length > 0 && !moreFromDisplay ? (
                                                    <div className="items-center text-center">
                                                        <button className="btn btn-outline btn-primary" onClick={()=>{setMoreFromDisplay(true)}}>Voir plus</button>
                                                    </div>
                                                ) :null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        )}</div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MyProfile;
