import {AiFillStar} from "react-icons/ai";

function UserPicture(props) {
    return (
        <>
        <div class="flex grid-cols-3 gap-4">
            <div class="avatar pl-5">
                <div class="w-20 rounded-full ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" alt="users-pictures"/>
                </div>
            </div>
            <div class="userName pt-3">
                <span class="firstname font-semibold">{props.firstname} </span>
                <span class="lastname font-semibold">{props.name}</span>
                {props.displayRate ? (<div className="userAverage">
                    <span className="flex gap-1"><AiFillStar/>0</span>
                </div>) :null}
            </div>
        </div>
        </>
    );
}

export default UserPicture;
