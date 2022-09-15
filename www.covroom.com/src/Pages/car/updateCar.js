import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import UpdateCarForm from "../../components/UpdateCarForm/updateCarForm";


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
