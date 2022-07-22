import '../App.css';
import {Link} from "react-router-dom";
import Footer from '../Components/Footer';
import Header from "../Components/Header";

import ElectricCarTop from '../img/svg/electricCarTop.svg';
import CarBot from '../img/svg/carBot.svg';
import SearchBar from '../Components/SearchBar';
import UserCard from '../Components/UserCard';

function Index() {
  return (
    <>
      <Header />
      <div class="head">
        <img src={ElectricCarTop} class="w-1/2 pl-20" alt="Voiture rouge pour le head"></img>
        <div class="flex justify-center">
          <SearchBar/>
        </div>
      </div>
      <div class="body">
        <h1 class="text-primary font-bold text-4xl mt-20 mb-16 ml-48 underline underline-offset-8">Trajets pour vous :</h1>
        <div class="travelForYou flex flex-row justify-evenly">
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </div>
        <h2 class="text-primary font-bold text-4xl mt-20 mb-16 ml-48 underline underline-offset-8">Nouveaux trajets :</h2>
        <div class="newTravel flex flex-row justify-evenly">
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </div>
        <div class="networkDriver flex m-20">
          <div class="card w-full bg-neutral text-neutral-content shadow-xl flex flex-row p-5">
            <div class="join flex items-center flex-col justify-center ml-40">
              <h3 class="text-primary font-bold text-4xl mt-20 mb-16 text-center">Rejoignez le réseau de conducteur</h3>
              <Link to="signIn"><button class="btn color-primary bg-primary text-[#ffffff] hover:bg-secondary border-none w-12/12 self-center rounded-full">Je rejoins</button></Link>
            </div>
            <img src={CarBot} class="w-1/2 mx-auto" alt="Voiture bleu pour inscription"></img>
          </div>
          </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
