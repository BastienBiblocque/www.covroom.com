import '../App.css';
import Header from "../Components/Header";
import SignInForm from "../Components/SignInForm";

function SignIn() {
    return (
        <div>
            <Header />
            <div className="flex">
                <div className="mx-auto">
                    <SignInForm/>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
