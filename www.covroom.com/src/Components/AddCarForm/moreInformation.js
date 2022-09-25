import React, {useState} from 'react';

function MoreInformation(props) {

    const [brand, setBrand] = useState(null);
    const [model, setModel] = useState(null);
    const [year, setYear] = useState(null);
    const [color, setColor] = useState(null);
    const [seat, setSeat] = useState(null);

    const post = () => {
        if (brand && model && year && color && seat) {
            props.setBrand(brand);
            props.setModel(model);
            props.setYear(year);
            props.setColor(color);
            props.setSeat(seat);
        } else {
            console.log('need params');
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
            <div className="card-body text-center">
                <p className="text-xl text-primary">Completer les informations</p>
                <div className="border-b border-hr"/>
                <div className="grid md:grid-cols-2 md:gap-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Marque</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Marque"
                            className="input input-bordered input-primary w-full max-w-xs"
                            onChange={(e)=>{
                                setBrand(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Modèle</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Modèle"
                            className="input input-bordered input-primary w-full max-w-xs"
                            onChange={(e)=>{
                                setModel(e.target.value)
                            }}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Année</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Année"
                            className="input input-bordered input-primary w-full max-w-xs"
                            onChange={(e)=>{
                                setYear(e.target.value)
                            }}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Nombre de place</span>
                        </label>
                        <input
                            type="number"
                            placeholder="2"
                            className="input input-bordered input-primary w-full max-w-xs"
                            onChange={(e)=>{
                                setSeat(e.target.value)
                            }}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Couleur</span>
                        </label>
                        <input
                            type="text"
                            placeholder="couleur"
                            className="input input-bordered input-primary w-full max-w-xs"
                            onChange={(e)=>{
                                setColor(e.target.value)
                            }}/>
                    </div>
                </div>
                <div>
                    <input type="file" id="pictures" className="hidden" />
                    <label
                        htmlFor="pictures"
                        className="text-primary">Ajouter une photo</label>
                </div>
                <div className="card-actions justify-end my-4">
                    <button className="btn btn-primary" onClick={()=>{post()}}>Suivant</button>
                </div>
            </div>
        </div>
    );
}

export default MoreInformation;
