import '../../App.css';
import Footer from '../../components/Footer/footer';
import Header from "../../components/Header/header";
import AddCarForm from "../../components/AddCarForm/addCarForm";
import React, {useState} from "react";
import MoreInformation from "../../components/AddCarForm/moreInformationCar";


function AddCar() {
    const [type, setType] = useState("add");

    const AddCarStep = () => {
        if (type === 'add') {
            return (<AddCarForm setType={setType}/>)
        } else if (type === 'moreInformation') {
            return(<MoreInformation setType={setType}/>)
        }
    }
    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="flex">
                    <div className="mx-auto">
                        <AddCarStep />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AddCar;
