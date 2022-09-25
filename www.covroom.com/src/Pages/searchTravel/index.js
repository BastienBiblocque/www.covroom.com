import '../../App.css';
import Footer from '../../Components/Footer';
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar";
import CardTravel from "../../Components/UserCard"
import axios from "axios";
import {useState, useEffect} from "react";


function SearchTravel() {

    const [travels,setTravels] =useState(null);

    const getData = () =>{
        axios.get(`http://127.0.0.1:8000/travel`)
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
                <div class="resultSearch">
                    <h1 class="text-primary font-bold text-2xl">Resultas trouvés</h1>
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
