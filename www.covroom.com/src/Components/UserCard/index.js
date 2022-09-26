import TravelInformations from "../Travelnformations";
import UserPicture from "./UserPicture/userPicture";
import {useNavigate} from "react-router-dom";


function CardTravel(props) {
    let navigate = useNavigate();

    return (
        <>
        <div class="card w-full bg-neutral shadow-xl cursor-pointer" onClick={()=>navigate(`../travel/${props.travel.id}`)}>
            <div class="card-body items-center text-center">
                <TravelInformations startAt={props.travel.startAt} endAt={props.travel.endAt} startCity={props.travel.start_city} endCity={props.travel.end_city}/>
            </div>
            <div class="items-left text-left pb-5">
                <UserPicture name={props.travel.user.name} firstname={props.travel.user.firstname}/>
            </div>
        </div>
        </>
    );
}

export default CardTravel;
