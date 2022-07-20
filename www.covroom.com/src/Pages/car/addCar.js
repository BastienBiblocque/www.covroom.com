import '../../App.css';
import Footer from '../../Components/Footer';
import Header from "../../Components/Header";
import AddCarForm from "../../Components/AddCarForm";
import React, {useState} from "react";
import MoreInformation from "../../Components/AddCarForm/moreInformation";


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
