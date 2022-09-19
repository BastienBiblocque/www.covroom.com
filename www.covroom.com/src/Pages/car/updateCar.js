import Header from '../../components/body/Header/Header';
import Footer from '../../components/body/Footer/Footer';
import UpdateCarForm from '../../components/form/formCar/UpdateCarForm/UpdateCarForm';


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
