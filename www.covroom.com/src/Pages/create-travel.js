import React, {useState} from "react";
import AddTravelIndex from "../Components/AddTravelForm";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AddTravelWhere from "../Components/AddTravelForm/when";
import AddTravelCar from "../Components/AddTravelForm/car";
import AddTravelPrefrences from "../Components/AddTravelForm/travelPreferences";
import AddTravelFinish from "../Components/AddTravelForm/finish";
import AddTravelLoading from "../Components/AddTravelForm/loading";

function CreateTravel() {
    const [type, setType] = useState("where");

    const [departCity, setDepartCity] = useState(null);
    const [departLat, setDepartLat] = useState(null);
    const [departLong, setDepartLong] = useState(null);
    const [arriveCity, setArriveCity] = useState(null);
    const [arriveLat, setArriveLat] = useState(null);
    const [arriveLong, setArriveLong] = useState(null);

    const [startDay, setStartDay] = useState(null);
    const [endDay, setEndDay] = useState(null);

    const [selectedCar, setSelectedCar] = useState(null);
    const [numberOfSeat, setNumberOfSeat] = useState(null);

    const [travelPreferences, setTravelPreferences] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const createTravel = () => {
        //TODO post in api
        console.log('create');
    }


    const AddTravelStep = () => {
        if (isLoading) {
            return (<AddTravelLoading/>)
        } else if (type === 'where') {
            return (<AddTravelIndex setType={setType} setDepartCity={setDepartCity} setDepartLat={setDepartLat} setDepartLong={setDepartLong} setArriveCity={setArriveCity} setArriveLat={setArriveLat} setArriveLong={setArriveLong}/>)
        } else if (type === 'when') {
            return(<AddTravelWhere setType={setType} departCity={departCity} arriveCity={arriveCity} setStartDay={setStartDay} setEndDay={setEndDay} />)
        } else if (type === 'car') {
            return(<AddTravelCar setType={setType} departCity={departCity} arriveCity={arriveCity} startDay={startDay} endDay={endDay} setSelectedCar={setSelectedCar} setNumberOfSeat={setNumberOfSeat} />)
        } else if (type === 'travelPreferences') {
            return(<AddTravelPrefrences setType={setType} departCity={departCity} arriveCity={arriveCity} startDay={startDay} endDay={endDay} selectedCar={selectedCar} numberOfSeat={numberOfSeat} setTravelPreferenceprops={setTravelPreferences} createTravel={createTravel} />)
        } else if (type === 'finish') {
            return(<AddTravelFinish setType={setType} departCity={departCity} arriveCity={arriveCity} startDay={startDay} endDay={endDay} selectedCar={selectedCar} numberOfSeat={numberOfSeat} travelPreferences={travelPreferences} />)
        }
    }

    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="flex">
                    <div className="mx-auto">
                        <AddTravelStep />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CreateTravel;