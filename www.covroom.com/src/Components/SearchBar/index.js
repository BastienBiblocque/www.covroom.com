import {HiSearchCircle} from "react-icons/hi"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

function SearchBar() {

    const [people, setPeople] = useState(null);
    const [date, setDate] = useState(null);
    let navigate = useNavigate();
    function search() {
        let url = "/search?"
        if (people) {
            url+= "people=" + people + "&"
        }
        if (date) {
            url+= "date=" + date + "&"
        }
        navigate(url);
    }
    return (
       <>
        <div className="mx-auto bg-[#ffffff] w-7/12 lg:w-9/12 shadow-xl rounded-full border border-primary pl-5 pt-2 pb-2">
        <div className="flex flex-start justify-between">
            <div className="beginIn flex flex-col">
                <p className="font-semibold">Lieu de départ</p>
                <input type="text" placeholder="Paris" className="font-medium focus:outline-none"/>
            </div>
            <div className="border h-5 w-0 border-grey bg-grey mr-10 mt-3"/>
            <div className="endIn flex flex-col">
                <p className="font-semibold">Lieu d'arrivé</p>
                <input type="text" placeholder="Metz" className="font-medium focus:outline-none"/>
            </div>
            <div className="border h-5 w-0 border-grey bg-grey mr-1 mt-3"/>
            <div className="date flex flex-col">
                <p className="font-semibold">Date</p>
                <input type="date" className="font-medium focus:outline-none" onChange={(e)=>{setDate(e.target.value)}}/>
            </div>
            <div className="border h-5 w-0 border-grey bg-grey mr-10 mt-3"/>
            <div className="person flex flex-col">
                <p className="font-semibold">Personnes</p>
                <input type="text" placeholder="2" className="font-medium focus:outline-none" onChange={(e)=>{setPeople(e.target.value)}} />
            </div>
            <div className="border h-5 w-0 border-grey bg-grey mr-5 mt-3"/>
            <div onClick={search} className="mr-5"><HiSearchCircle size={45} color={"#7D2ED3"}/></div>
            </div>
        </div>
       </>
    );
}

export default SearchBar;
