import '../App.css';
import Header from "../Components/Header";
import LoginForm from "../Components/LoginForm";
import Footer from "../Components/Footer";

function Login() {
    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="flex">
                    <div className="mx-auto">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
}

export default Login;
