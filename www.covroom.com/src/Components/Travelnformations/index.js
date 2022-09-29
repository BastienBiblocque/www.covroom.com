import {useState, useEffect} from "react";


function TravelInformations(props) {
    const [startAt] = useState(props.startAt);
    const [startDay, setStartDay] = useState('');
    const [startHours, setStartHours] = useState('');

    const [endAt] = useState(props.endAt);
    const [endDay, setEndDay] = useState('');
    const [endHours, setEndHours] = useState('');

    useEffect(()=>{
        const splitStart = startAt.split('T');
        setStartDay(splitStart[0]);
        let splitStartHours = splitStart[1].split('.');
        splitStartHours = splitStartHours[0].split(':');
        setStartHours(splitStartHours[0] + ':' + splitStartHours[1]);

        const splitEnd = endAt.split('T');
        setEndDay(splitEnd[0]);
        let splitEndHours = splitEnd[1].split('.');
        splitEndHours = splitEndHours[0].split(':');
        setEndHours(splitEndHours[0] + ':' + splitEndHours[1]);
    },[])

    return (
       <>
        <div className="travel flex">
            <div className="date font-bold mr-5 mt-5">{startDay}</div>
            <div className="hours">
                <div className="startHours font-medium">{startHours}</div>
                <div className="timeDuration text-xs">1h30</div>
                <div className="endHours font-medium">{endHours}</div>
            </div>
            <div className="way border h-18 w-0 border-black ml-5 mr-5"/>
            <div className="city">
                <div className="startCity font-medium">{props.startCity}</div>
                <p className="text-xs">Vers</p>
                <div className="endCity font-medium">{props.endCity}</div>
            </div>
        </div>
       </>
    );
}

export default TravelInformations;
