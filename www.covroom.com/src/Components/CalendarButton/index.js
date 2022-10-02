import 'add-to-calendar-button/assets/css/atcb.css';
import React, {useEffect, useState} from 'react';
import {atcb_action, atcb_init} from "add-to-calendar-button";

function CalendarButton(props) {
    useEffect(() => {
        atcb_init();
    }, []);

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
            <form onSubmit={(e) => {
                e.preventDefault();
                atcb_action({
                    name: 'Covroom',
                    "startDate":startDay,
                    "endDate":endDay,
                    "startTime":startHours,
                    "endTime":endHours,
                    options: ['Apple', 'Google', 'Microsoft365', 'Outlook.com', 'iCal|iCal'],
                    timeZone: 'Europe/Berlin',
                    trigger: 'click',
                    iCalFileName: 'Reminder-Event',
                });
            }}
            >
                <button className="btn btn-white">
                    Ajouter au calendrier
                </button>
            </form>
        </>
    );
}

export default CalendarButton;
