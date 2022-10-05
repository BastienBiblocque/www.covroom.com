import '../../App.css';
import Footer from '../../Components/Footer';
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar";
import CardTravel from "../../Components/UserCard"
import axios from "axios";
import React, {useState, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import Loading from "../../Components/AddTravelForm/loading";
import {ThreeDots} from "react-loader-spinner";


function SearchTravel() {

    const [travels,setTravels] =useState(null);

    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    const [searchParams] = useSearchParams();

    const getData = () =>{
        const dataToSend = {
            people: searchParams.get("people") || 0,
            date: searchParams.get("date") || 0,
            startLong: 'null',
            startLat: 'null',
            endLong: 'null',
            endLat: 'null',
        };
        if (searchParams.get("start")) {
            const startSplit = searchParams.get("start").split([',']);
            dataToSend.startLong = startSplit[1] || 'null';
            dataToSend.startLat = startSplit[0] || 'null';
        }
        if (searchParams.get("end")) {
            const endSplit = searchParams.get("end").split([',']);
            dataToSend.endLong = endSplit[1] || 'null';
            dataToSend.endLat = endSplit[0] || 'null';
        }

        axios.post(`http://127.0.0.1:8000/travel/search`,dataToSend)
            .then(res => {
                setTravels(res.data);
                setIsLoading(false);
                if (res.data.length === 0) {
                    setIsEmpty(true);
                    console.log(res.data.length);
                }
            })
    }

    useEffect(()=>{
        if (searchParams) {
            getData();
        }
    },[searchParams])

    return (
        <>
            <Header />
                <div class="resultSearch min-h-screen">
                    <h1 class="text-primary font-bold text-2xl">Résultas trouvés</h1>
                    {/*<button class="btn btn-secondary text-[#ffffff] rounded-full text-xs">*/}
                    {/*    Filtre*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6" fill="none" viewBox="0 3 10 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>*/}
                    {/*</button>*/}
                    <SearchBar />
                    {isLoading ? (
                        <div className="flex mx-auto">
                            <ThreeDots
                                height="150"
                                width="150"
                                color='#7D2ED3'
                                ariaLabel='loading'
                                wrapperClass="mx-auto"
                            />
                        </div>
                    ) : isEmpty ? (<div className="flex mx-auto"><div className="mx-auto">Aucun résultat trouvé veuillez essayer une autre recherche.</div></div>) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-16">
                        {travels ? travels.map((travel)=>
                            (<CardTravel travel={travel}/>)
                        ) :null}
                    </div>)}

                </div>
            <Footer/>
        </>
    );
}

export default SearchTravel;
