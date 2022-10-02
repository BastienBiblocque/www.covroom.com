import UserPicture from "../UserCard/UserPicture/userPicture";

function NoteCard(props) {

    return (
        <>
        <div class="card w-full bg-neutral shadow-xl cursor-pointer mb-5">
            <div class="items-left text-left pb-5">
                <UserPicture name={props.name} firstname={props.firstname} displayRate={false}/>
            </div>
            <div class="card-body items-center text-center">
            {props.isDetail ? (<p className="breakwords px-5">{props.review}</p>) : (<p className="truncate">{props.review}</p>) }
            </div>
            {props.isDetail ? (
            <div className="items-center text-center mb-5">
                <button className="btn btn-outline btn-primary">Voir plus</button>
            </div>) : null }
        </div>
        </>
    );
}

export default NoteCard;