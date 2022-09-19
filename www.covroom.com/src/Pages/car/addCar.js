import React, {useState} from "react";
import Header from '../../components/body/Header/Header';
import Footer from '../../components/body/Footer/Footer';
import AddCarForm from '../../components/form/formCar/AddCarForm/AddCarForm';
import MoreInformation from '../../components/form/formCar/AddCarForm/MoreInformationCar';


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
