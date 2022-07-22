import TravelInformations from "../Travelnformations";
import UserPicture from "./UserPicture/userPicture";


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
