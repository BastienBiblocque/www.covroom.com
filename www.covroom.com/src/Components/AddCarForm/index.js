import React, {useState} from 'react';

function AddCarForm(props) {
    const [numberplate, setNumberplate] = useState(null);


    const next = () => {
        if (numberplate) {
            props.setNumberplate(numberplate);
            props.setType('moreInformation');
        } else {
            console.log('need params');
        }
    }
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
            <div className="card-body text-center">
                <p className="text-xl text-primary">Identifier votre véhicule</p>
                <div className="border-b border-hr"/>
                <div className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Plaque d&apos;imatriculation</span>
                        </label>
                        <input type="text" placeholder="Plaque d'imatriculation"
                               className="input input-bordered input-primary w-full max-w-xs"
                                onChange={(e)=>setNumberplate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="card-actions justify-end my-4">
                    <button className="btn btn-primary" onClick={() => {next()}}>Suivant</button>
                </div>
            </div>
        </div>
    );
}

export default AddCarForm;
