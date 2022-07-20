import '../App.css';
import Header from "../Components/Header";
import LoginForm from "../Components/LoginForm";

function Login() {
    return (
        <>
            <Header />
            <div className="flex">
                <div className="mx-auto">
                    <LoginForm />
                </div>
            </div>
        </>
    );
}

export default Login;
