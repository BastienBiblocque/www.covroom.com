import Footer from '../../Components/Footer';
import Header from "../../Components/Header";
import UserPicture from "../../Components/UserCard/UserPicture/userPicture";
import { Link } from 'react-router-dom';

function TravelNotation() {



    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="border border-primary rounded-md pt-10 mx-auto w-96 m-10">
                    <UserPicture
                    firstname="Nina"
                    name="Bonnasse" />
                    <div className='flex justify-center mt-5'>
                        <span className='font-bold'>Destination du voyage</span>
                    </div>
                        <p className='flex justify-center'>Paris Marseille baby</p>
                    <div className='p-10 flex justify-center'>
                        <Link to="signIn">
                            <button class="btn color-primary bg-primary text-[#ffffff] hover:bg-secondary border-none w-12/12 self-center rounded-full">Notation</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TravelNotation;
