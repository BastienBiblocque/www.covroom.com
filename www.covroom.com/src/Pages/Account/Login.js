import Header from '../../components/body/Header/Header';
import LoginForm from '../../components/account/LoginForm/LoginForm';
import Footer from '../../components/body/Footer/Footer';

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
