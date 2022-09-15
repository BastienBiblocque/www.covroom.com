import '../../App.css';
import Footer from '../../components/Footer/footer';
import Header from "../../components/Header/header";
import CarCard from "../../components/CarCard/carCard";
import {useNavigate} from "react-router-dom";

function listCar() {
    let navigate = useNavigate();

    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-5xl mx-auto">
                    <div className="card bg-base-100 max-h-60 shadow-xl col-span-1 hidden md:flex">
                        <div className="card-body">
                            <h2 className="card-title text-primary text-sm">Mathilde LaCaille</h2>
                            <img className="h-32 w-32 mx-auto rounded-full" src="https://api.lorem.space/image/face?w=300&h=300" alt="users pictures"/>
                        </div>
                    </div>
                    <div className="col-span-3 grid grid-cols-1 mx-4 md:mx-0">
                        <h1 className="text-primary text-xl">Vos Voitures</h1>
                        <button className="btn btn-primary mt-4 justify-self-end" onClick={()=>{navigate('/car/add')}}>Ajouter</button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <CarCard />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default listCar;
