import UserPicture from '../UserPicture/UserPicture';
import TravelInformations from "../../travel/Travelnformations/TravelInformations";


function UserCard() {
    return (
        <>
        <div class="card w-full bg-neutral shadow-xl">
            <div class="card-body items-center text-center">
                <TravelInformations/>
            </div>
            <div class="items-left text-left pb-5">
                <UserPicture/>
            </div>
        </div>
        </>
    );
}

export default UserCard;
