import '../../App.css';
import Footer from '../../components/Footer/footer';
import Header from "../../components/Header/header";
import SearchBar from '../../components/SearchBar/searchBar';
import CardTravel from "../../components/UserCard/userCard"


function SearchTravel() {
    return (
        <>
            <Header />
                <div class="resultSearch">
                    <h1 class="text-primary font-bold text-2xl">Resultats trouvés</h1>
                    <button class="btn btn-secondary text-[#ffffff] rounded-full text-xs">
                        Filtre
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6" fill="none" viewBox="0 3 10 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <SearchBar/>
                    <CardTravel/>
                </div>
            <Footer/>
        </>
    );
}

export default SearchTravel;
