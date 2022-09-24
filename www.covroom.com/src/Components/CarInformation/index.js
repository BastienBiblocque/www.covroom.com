

function CarInformation(props) {
    return (
        <>
            <div className="font-bold mr-5 mt-5">{props.car.model} - {props.car.color}</div>
            {/*<div className="font-medium">35km</div>*/}
            <div className="font-medium">{props.seat.available} places disponibles sur {props.seat.max}</div>
        </>
    );
}

export default CarInformation;
