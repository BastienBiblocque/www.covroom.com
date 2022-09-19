

function TravelInformations() {
    return (
       <>
        <div className="travel flex">
            <div className="date font-bold mr-5 mt-5">14/08</div>
            <div className="hours">
                <div className="startHours font-medium">08:00</div>
                <div className="timeDuration text-xs">1h00</div>
                <div className="endHours font-medium">09:00</div>
            </div>
            <div className="way border h-18 w-0 border-black ml-5 mr-5"/>
            <div className="city">
                <div className="startCity font-medium">Metz</div>
                <p className="text-xs">Vers</p>
                <div className="endCity font-medium">Thionville</div>

            </div>

        </div>
       </>
    );
}

export default TravelInformations;
