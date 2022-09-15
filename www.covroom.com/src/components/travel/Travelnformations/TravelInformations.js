

function TravelInformations() {
    return (
       <>
        <div class="travel flex">
            <div class="date font-bold mr-5 mt-5">14/08</div>
            <div class="hours">
                <div class="startHours font-medium">08:00</div>
                <div class="timeDuration text-xs">1h00</div>
                <div class="endHours font-medium">09:00</div>
            </div>
            <div class="way border h-18 w-0 border-black ml-5 mr-5"></div> 
            <div class="city">
                <div class="startCity font-medium">Metz</div>
                <p class="text-xs">Vers</p>
                <div class="endCity font-medium">Thionville</div>

            </div>

        </div>
       </>
    );
}

export default TravelInformations;
