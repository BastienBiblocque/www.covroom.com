import '../App.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React, {useEffect, useRef, useState} from "react";


function MyProfile() {
    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
            </div>
            <Footer />
        </>
    );
}

export default MyProfile;
