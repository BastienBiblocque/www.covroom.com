import {HiSearchCircle} from "react-icons/hi"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function SearchBar() {

    const [people, setPeople] = useState(null);
    const [date, setDate] = useState(null);
    const [startCity, setStartCity] = useState(null);
    const [endCity, setEndCity] = useState(null);
    let navigate = useNavigate();

    async function searchCity() {
        let start;
        let end;
        if (startCity) {
            const resStartCity = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${startCity}.json`, {
                params: {
                    access_token: 'pk.eyJ1IjoiYmFiYWJpYmkiLCJhIjoiY2w1dXA5eThlMDIwOTNpbnBhdXpzODN2bSJ9.nC1vliGUOsBf2BK6WQzm3g',
                    country: ['FR'],
                    limit: 5,
                    types: 'poi,place',
                    language: 'FR',
                },
            });
            start = [resStartCity.data.features[0].geometry.coordinates[0], resStartCity.data.features[0].geometry.coordinates[1]];
        }

        if (endCity) {
            const resEndCity = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${endCity}.json`, {
                params: {
                    access_token: 'pk.eyJ1IjoiYmFiYWJpYmkiLCJhIjoiY2w1dXA5eThlMDIwOTNpbnBhdXpzODN2bSJ9.nC1vliGUOsBf2BK6WQzm3g',
                    country: ['FR'],
                    limit: 5,
                    types: 'poi,place',
                    language: 'FR',
                },
            });
            end = [resEndCity.data.features[0].geometry.coordinates[0], resEndCity.data.features[0].geometry.coordinates[1]];
        }

        return({
            start:start,
            end:end,
        })
    }

    async function search() {
        const coord = await searchCity();

        let url = "/search?"
        if (people) {
            url += "people=" + people + "&"
        }
        if (date) {
            url += "date=" + date + "&"
        }
        if (coord.start) {
            url += "start=" + coord.start + "&"
        }
        if (coord.end) {
            url += "end=" + coord.end + "&"
        }
        navigate(url);
    }
    return (
       <>
        <div className="mx-auto bg-[#ffffff] w-7/12 lg:w-9/12 shadow-xl rounded-full border border-primary pl-5 pt-2 pb-2">
        <div className="flex flex-start justify-between">
            <div className="beginIn flex flex-col">
                <p className="font-semibold">Lieu de départ</p>
                <input type="text" placeholder="Paris" className="font-medium focus:outline-none" onChange={(e)=>{setStartCity(e.target.value)}}/>
            </div>
            <div className="border h-5 w-0 border-grey bg-grey mr-10 mt-3"/>
            <div className="endIn flex flex-col">
                <p className="font-semibold">Lieu d'arrivé</p>
                <input type="text" placeholder="Metz" className="font-medium focus:outline-none" onChange={(e)=>{setEndCity(e.target.value)}}/>
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
