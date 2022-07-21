import '../App.css';
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import SearchBar from '../Components/SearchBar';
import TravelInformations from '../Components/Travelnformations';
import UserCard from '../Components/UserCard';
import UserPicture from '../Components/UserCard/UserPicture/userPicture';

function Index() {
  return (
    <div>
      <Header />
      <SearchBar />
      <UserCard/>
      <Footer />
    </div>
  );
}

export default Index;
