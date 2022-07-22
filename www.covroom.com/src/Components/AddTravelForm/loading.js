import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner'
function AddTravelLoading(props) {
    let navigate = useNavigate();
    const [travelPreferences, setTravelPrefrences] = useState(null);

    const goNext = () => {
        props.setTravelPreferences(travelPreferences);
        props.setType('finish');
        props.createTravel();
    }

    return (
        <div className="w-full w-auto">
            <div className="mx-auto">
                <div>
                    <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
                        <div className="card-body flex w-full">
                            <ThreeDots
                                height="150"
                                width="150"
                                color='#7D2ED3'
                                ariaLabel='loading'
                                wrapperClass="mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTravelLoading;
