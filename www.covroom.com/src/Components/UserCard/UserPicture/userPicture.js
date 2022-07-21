import {AiFillStar} from "react-icons/ai";

function UserPicture() {
    return (
        <>
        <div class="flex grid-cols-3 gap-4">
            <div class="avatar pl-5">
                <div class="w-20 rounded-full ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" />
                </div>
            </div>
            <div class="userName pt-3">
                <span class="firstname font-semibold">Jean </span>
                <span class="lastname font-semibold">JACKY</span>     
                <div class="userAverage">
                    <span class="flex gap-1"><AiFillStar/>0</span> 
                </div>               
            </div>
        </div>
        </>
    );
}

export default UserPicture;
