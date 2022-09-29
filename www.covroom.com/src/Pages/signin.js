import React, {useEffect, useState} from 'react';
import '../App.css';
import Header from "../Components/Header";
import SignInForm from "../Components/SignInForm";
import Footer from "../Components/Footer";
import MoreInformation from "../Components/SignInForm/moreInformation";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function SignIn() {
    let navigate = useNavigate();

    const [type, setType] = useState("sign");

    const [mail, setMail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    const [phone, setPhone] = useState(null);
    const [gender, setGender] = useState(null);
    const [birthday, setBirthday] = useState(null);

    useEffect(()=>{
        const userId = localStorage.getItem('userId');
        if (userId){
            navigate('/');
        }
    },[])

    const SignType = () => {
        if (type === 'sign') {
            return (<SignInForm setType={setType} setMail={setMail} setFirstName={setFirstName} setName={setName} setPassword={setPassword} />)
        } else if (type === 'moreInformation') {
            return(<MoreInformation setPhone={setPhone} setGender={setGender} setBirthday={setBirthday} postSign={PostSign}/>)
        }
    }

    const PostSign = async () => {
        if (mail && firstName && name && password && phone && gender && birthday) {
            await axios.post('http://127.0.0.1:8000/user/new',{
                email: mail,
                firstName: firstName,
                name: name,
                password: password,
                phoneNumber: phone,
                gender: gender,
                birthday: birthday,
                role: 'user',
            }).then(()=>{navigate('/');});
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
