import '../App.css';
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import TravelInformations from '../Components/Travelnformations/travelInformations';
import UserCard from '../Components/UserCard';
import UserPicture from '../Components/UserCard/UserPicture/userPicture';

function Index() {
  return (
    <div>
      <Header />
      <UserCard/>
      <Footer />
    </div>
  );
}

export default Index;
