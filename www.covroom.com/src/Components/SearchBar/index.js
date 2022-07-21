import { primary } from "daisyui/src/colors";
import {HiSearchCircle} from "react-icons/hi"
import {Link} from "react-router-dom";

function SearchBar() {
    return (
       <>
        <div class="navbar w-7/12 shadow-xl rounded-full border border-primary flex justify-center">
        <div class="flex flex-start justify-between">
            <div class="beginIn flex flex-col">
                <p class="font-semibold">Lieu de départ</p>
                <input type="text" placeholder="Paris" class="font-medium focus:outline-none"></input>
            </div>
            <div class="border h-5 w-0 border-grey mr-10"></div> 
            <div class="endIn flex flex-col">
                <p class="font-semibold">Lieu d'arrivé</p>
                <input type="text" placeholder="Metz" class="font-medium focus:outline-none"></input>
            </div>
            <div class="border h-5 w-0 border-grey mr-10"></div> 
            <div class="date flex flex-col">
                <p class="font-semibold">Date</p>
                <input type="text" placeholder="14/08/2022" class="font-medium focus:outline-none"></input>
            </div>
            <div class="border h-5 w-0 border-grey mr-10"></div> 
            <div class="person flex flex-col">
                <p class="font-semibold">Personnes</p>
                <input type="text" placeholder="2" class="font-medium focus:outline-none"></input>
            </div>
            <div class="border h-5 border-grey mr-10"></div> 
            <Link to="/"><HiSearchCircle size={40} color={"#7D2ED3"}/></Link>
            </div>
        </div>
       </>
    );
}

export default SearchBar;
