import '../App.css';
import {Link} from "react-router-dom";
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import { BsMusicNote } from 'react-icons/bs';

import ElectricCarTop from '../img/svg/electricCarTop.svg';
import CarBot from '../img/svg/carBot.svg';
import SearchBar from '../Components/SearchBar';
import UserCard from '../Components/UserCard';
import axios from "axios";
import {useEffect, useState} from "react";

function Index() {
  const [travels, setTravels] = useState(null);

  const getData = () =>{
    axios.get(`http://127.0.0.1:8000/travel/last/3`)
        .then(res => {
          setTravels(res.data);
        })
  }

  useEffect(()=>{
    getData();
  },[])


  return (
    <>
      <Header />
      <div class="head">
        <div className="grid grid-cols-2 gap-8">
          <img src={ElectricCarTop} className="pl-20" alt="Voiture rouge pour le head"></img>
          <div className="my-auto">
            <div className="text-6xl text-primary flex">
              Vroom <BsMusicNote/> Vroom <BsMusicNote/>
            </div>
            <div className="text-6xl text-primary flex mt-4">
              Vroom <BsMusicNote/> Vroom <BsMusicNote/>
            </div>
            <div className="text-6xl text-primary mt-4">
              I want you in
            </div>
            <div className="text-8xl text-primary mt-8">
              COVROOM
            </div>
          </div>

        </div>
        <div class="flex justify-center mt-4">
          <SearchBar/>
        </div>
      </div>
      <div class="body">
        {/*<h1 class="text-primary font-bold text-4xl mt-20 mb-16 ml-48 underline underline-offset-8">Trajets pour vous :</h1>*/}
        {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">*/}
        {/*  /!*<UserCard/>*!/*/}
        {/*  /!*<UserCard/>*!/*/}
        {/*  /!*<UserCard/>*!/*/}
        {/*</div>*/}
        <h2 class="text-primary font-bold text-4xl mt-20 mb-16 ml-48 underline underline-offset-8">Nouveaux trajets :</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {travels? travels.map((travel)=><UserCard travel={travel}/>):null}
        </div>
        <div class="networkDriver flex m-20">
          <div class="card w-full bg-neutral text-neutral-content shadow-xl flex flex-row p-5">
            <div class="join flex items-center flex-col justify-center ml-40">
              <h3 class="text-primary font-bold text-4xl mt-20 mb-16 text-center">Rejoignez le réseau de conducteur</h3>
              <Link to="signIn"><button class="btn color-primary bg-primary text-[#ffffff] hover:bg-secondary border-none w-12/12 self-center rounded-full">Je rejoins</button></Link>
            </div>
            <img src={CarBot} class="w-1/2 mx-auto hidden md:flex" alt="Voiture bleu pour inscription"></img>
          </div>
          </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
