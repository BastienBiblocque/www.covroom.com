import React, {useState} from 'react';
import Header from '../../components/body/Header/Header';
import Footer from '../../components/body/Footer/Footer';
import SignInForm from '../../components/account/SignInForm/SignInForm';
import MoreInformation from '../../components/account/SignInForm/SignInMoreInformations';



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
