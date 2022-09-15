import { MdEventSeat } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import {useNavigate} from "react-router-dom";

function CarCard() {
    let navigate = useNavigate();

    return (
        <>
            <div className="card w-full shadow-xl">
                <div className="card-body">
                    <div className="flex">
                        <img className="h-[75px] w-[100px] rounded-md object-cover" src="https://api.lorem.space/image/car?w=150&h=150" alt="users pictures"/>
                        <div className="grid grid-cols-1 px-4">
                            <p className="card-title text-md">Fiat - Multiplat</p>
                            <p className="card-title text-sm">Bleue - EF-456-GH - 1<MdEventSeat /></p>
                        </div>
                    </div>
                    <div>
                        <button className="btn border-primary text-primary hover:bg-white" onClick={()=>{navigate('/car/update')}}>Modifier</button>
                        <button className="btn border-primary text-primary hover:bg-white ml-4"><BsTrash /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CarCard;
