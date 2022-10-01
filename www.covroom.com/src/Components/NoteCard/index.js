import UserPicture from "../UserCard/UserPicture/userPicture";

function NoteCard(props) {

    return (
        <>
        <div class="card w-full bg-neutral shadow-xl cursor-pointer">
            <div class="items-left text-left pb-5">
                <UserPicture name={props.name} firstname={props.firstname}/>
            </div>
            <div class="card-body items-center text-center">
                <p className="breakwords">{props.review}</p>
            </div>
        </div>
        </>
    );
}

export default NoteCard;