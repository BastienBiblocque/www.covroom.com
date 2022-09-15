import React, {useState} from 'react';
import '../App.css';
import Header from "../../components/Header/header";
import SignInForm from "../../components/SignInForm/signInForm";
import Footer from "../../components/Footer/footer";
import MoreInformation from "../../components/SignInForm/signInMoreInformations";



function SignIn() {
    const [type, setType] = useState("sign");

    const SignType = () => {
        if (type === 'sign') {
            return (<SignInForm setType={setType}/>)
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
                        <SignType/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SignIn;
