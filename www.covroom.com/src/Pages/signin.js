import React, {useState} from 'react';
import '../App.css';
import Header from "../Components/Header";
import SignInForm from "../Components/SignInForm";
import Footer from "../Components/Footer";
import MoreInformation from "../Components/SignInForm/moreInformation";
import axios from "axios";



function SignIn() {
    const [type, setType] = useState("sign");

    const SignType = () => {
        if (type === 'sign') {
            return (<SignInForm setType={setType}/>)
        } else if (type === 'moreInformation') {
            return(<MoreInformation setType={setType} postSign={PostSign}/>)
        }
    }

    const PostSign = async () => {
        const newUsers = await axios.post('http://127.0.0.1:8000/user/');
        console.log(newUsers)
    }

    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="flex">
                    <div className="mx-auto">
                        <SignType/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SignIn;
