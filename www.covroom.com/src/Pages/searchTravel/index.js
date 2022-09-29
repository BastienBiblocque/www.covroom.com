import '../../App.css';
import Footer from '../../Components/Footer';
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar";
import CardTravel from "../../Components/UserCard"
import axios from "axios";
import {useState, useEffect} from "react";
import {useSearchParams} from "react-router-dom";


function SearchTravel() {

    const [travels,setTravels] =useState(null);

    const [searchParams] = useSearchParams();

    const getData = () =>{
        console.log(searchParams.get("people"));
        axios.get(`http://127.0.0.1:8000/travel/search`,{
            people:searchParams.get("people") || 0,
            date:searchParams.get("date") || 0,
        })
            .then(res => {
                setTravels(res.data);
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
                <div class="resultSearch">
                    <h1 class="text-primary font-bold text-2xl">Résultas trouvés</h1>
                    {/*<button class="btn btn-secondary text-[#ffffff] rounded-full text-xs">*/}
                    {/*    Filtre*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6" fill="none" viewBox="0 3 10 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>*/}
                    {/*</button>*/}
                    <SearchBar />
                    {travels ? travels.map((travel)=>
                        (<CardTravel travel={travel}/>)
                    ) :null}
                </div>
            <Footer/>
        </>
    );
}

export default SearchTravel;
