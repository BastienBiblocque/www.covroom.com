import '../../App.css';
import Footer from '../../Components/Footer';
import Header from "../../Components/Header";
import AddCarForm from "../../Components/AddCarForm";
import React, {useEffect, useState} from "react";
import MoreInformation from "../../Components/AddCarForm/moreInformation";
import axios from "axios";


function AddCar() {
    const [type, setType] = useState("add");

    const [numberplate, setNumberplate] = useState(null);
    const [brand, setBrand] = useState(null);
    const [model, setModel] = useState(null);
    const [year, setYear] = useState(null);
    const [color, setColor] = useState(null);
    const [seat, setSeat] = useState(null);

    console.log(color)

    const createCar = () => {
        console.log(color);
        axios.post(`http://127.0.0.1:8000/car/add`,{
            numberplate: numberplate,
            brand: brand,
            model: model,
            year: year,
            color: color,
            seat: seat,
            idUser: 1,
            //a modifier
        })
        .then(res => {
            console.log(res)
        })
    }
    useEffect(()=>{
        if (brand && model && year && color && seat && numberplate) {
            createCar();
        }
    },[brand, model, year, color, seat, numberplate])


    const AddCarStep = () => {
        if (type === 'add') {
            return (<AddCarForm setType={setType} setNumberplate={setNumberplate}/>)
        } else if (type === 'moreInformation') {
            return(<MoreInformation setSeat={setSeat} setType={setType} setBrand={setBrand} setModel={setModel} setYear={setYear} setColor={setColor} />)
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
