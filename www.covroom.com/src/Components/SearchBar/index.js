import {HiSearchCircle} from "react-icons/hi"
import {Link} from "react-router-dom";

function SearchBar() {
    return (
       <>
        <div class="bg-[#ffffff] w-7/12 lg:w-9/12 shadow-xl rounded-full border border-primary pl-5 pt-2 pb-2">
        <div class="flex flex-start justify-between">
            <div class="beginIn flex flex-col">
                <p class="font-semibold">Lieu de départ</p>
                <input type="text" placeholder="Paris" class="font-medium focus:outline-none"></input>
            </div>
            <div class="border h-5 w-0 border-grey bg-grey mr-10 mt-3"></div> 
            <div class="endIn flex flex-col">
                <p class="font-semibold">Lieu d'arrivé</p>
                <input type="text" placeholder="Metz" class="font-medium focus:outline-none"></input>
            </div>
            <div class="border h-5 w-0 border-grey bg-grey mr-1 mt-3"></div> 
            <div class="date flex flex-col">
                <p class="font-semibold">Date</p>
                <input type="text" placeholder="14/08/2022" class="font-medium focus:outline-none"></input>
            </div>
            <div class="border h-5 w-0 border-grey bg-grey mr-10 mt-3"></div> 
            <div class="person flex flex-col">
                <p class="font-semibold">Personnes</p>
                <input type="text" placeholder="2" class="font-medium focus:outline-none"></input>
            </div>
            <div class="border h-5 w-0 border-grey bg-grey mr-5 mt-3"></div> 
            <Link to="/" class="mr-5"><HiSearchCircle size={45} color={"#7D2ED3"}/></Link>
            </div>
        </div>
       </>
    );
}

export default SearchBar;
