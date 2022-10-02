import '../../App.css';
import {AiFillStar} from "react-icons/ai";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import NoteCard from '../../Components/NoteCard';
import React, {useEffect, useRef, useState} from "react";


function MyProfileUpdate() {

    const nom = "NOM";
    const prenom = "PRENOM";


    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="flex">
                    <div className="mx-auto">
                        <div className="grid grid-cols-10 gap-10 mx-10">
                            <div className="col-span-3 h-full">
                                <div className="card md:w-72 bg-[#eff0f2] shadow-xl my-8 mx-4 md:mx-0 h-full">
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

                            <div className="col-span-7 px-5">
                                <div className="grid grid-row-3 gap-8">
                                    <div className="row-span-1">
                                        <div className="grid grid-cols-2">
                                            <div className="items-left text-left py-5">
                                                <p class="font-bold text-[#7d2ed3] pt-5 text-2xl">Bonjour {prenom}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-left text-left my-5 mr-10">
                                        <div class="form-control w-full">
                                            <label class="label">
                                                <span class="label-text">Nouveau mail</span>
                                            </label>
                                            <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full" />
                                        </div>
                                        <div class="form-control w-full">
                                            <label class="label">
                                                <span class="label-text">Numéro de téléphone</span>
                                            </label>
                                            <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full" />
                                        </div>
                                        <div class="form-control w-full">
                                            <label class="label">
                                                <span class="label-text">Description</span>
                                            </label>
                                            <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full" />
                                        </div>
                                        <div className="grid grid-row-1 py-2">
                                            <div class="grid grid-cols-5 ">
                                                <div class="col-span-3">
                                                    {/* <button className="btn btn-outline btn-error">Supprimer le compte</button> */}
                                                </div>
                                                <div class="items-right text-right"><button className="btn btn-outline btn-primary">Annuler</button></div>
                                                <div class="items-right text-right"><button className="btn btn-primary">Valider</button></div>
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

export default MyProfileUpdate;
