import '../../App.css';
import {AiFillStar} from "react-icons/ai";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import UserPicture from "../../Components/UserCard/UserPicture/userPicture";
import NoteCard from '../../Components/NoteCard';
import React, {useEffect, useRef, useState} from "react";


function MyProfile() {

    const isUser = true;

    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="flex">
                    <div className="mx-auto">
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
                                            <p class="font-bold">Nom Prenom</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-7">
                                <div className="grid grid-row-3 gap-8">
                                    <div className="row-span-1">
                                        <div className="grid grid-cols-2">
                                            <div className="items-left text-left py-5">
                                                <p class="font-bold text-[#7d2ed3] pt-5">Nom Prenom</p>
                                            </div>
                                            <div className="items-right text-right py-5">
                                                {isUser ? (<button className="btn btn-primary">Modifier</button>) : null }
                                            </div>
                                            <div className="pt-5 mb-4">
                                                <span class="flex gap-1 font-bold"><AiFillStar/>4,5 - 2 avis</span> 
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
                                                    <NoteCard name="NOM" firstname="PRENOM" review="Lorem Ipsum Blablablabla"/>
                                                </div>
                                                <div className="items-center text-center">
                                                    <button className="btn btn-outline btn-primary">Voir plus</button>
                                                </div>
                                            </div>
                                            <div className="mx-4">
                                            <div className="items-center text-center">
                                                    <p class="font-bold text-[#7d2ed3] pt-5">Avis laissé</p>
                                                </div>
                                                <div className="items-center text-left my-5">
                                                    <NoteCard name="NOM" firstname="PRENOM" review="Lorem Ipsum Blablablabla"/>
                                                </div>
                                                <div className="items-center text-center">
                                                    <button className="btn btn-outline btn-primary">Voir plus</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MyProfile;
