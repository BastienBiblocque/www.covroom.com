import '../App.css';
import Header from "../Components/Header";
import SignInForm from "../Components/SignInForm";
import Footer from "../Components/Footer";

function SignIn() {
    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="flex">
                    <div className="mx-auto">
                        <SignInForm/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SignIn;
