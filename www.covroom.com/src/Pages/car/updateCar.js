import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import UpdateCarForm from "../../Components/UpdateCarForm";


function UpdateCar() {
    return (
        <>
            <div id="container" className="md:h-screen">
                <Header />
                <div className="flex">
                    <div className="mx-auto">
                        <UpdateCarForm />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UpdateCar;
