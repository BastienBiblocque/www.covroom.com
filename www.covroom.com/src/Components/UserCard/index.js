import TravelInformations from "../Travelnformations";
import UserPicture from "./UserPicture/userPicture";
import {useNavigate} from "react-router-dom";


function CardTravel() {
    let navigate = useNavigate();

    return (
        <>
        <div class="card w-full bg-neutral shadow-xl cursor-pointer" onClick={()=>navigate('/travel/25')}>
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

export default CardTravel;
