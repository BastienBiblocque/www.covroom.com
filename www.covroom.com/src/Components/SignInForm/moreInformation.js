import React, {useState} from 'react';
function MoreInformation(props) {

    const [phone, setPhone] = useState(null);
    const [gender, setGender] = useState(null);
    const [birthday, setBirthday] = useState(null);

    function goSign() {
        if (phone && gender && birthday) {
            props.setPhone(phone);
            props.setGender(gender);
            props.setBirthday(birthday);
            props.postSign();
        }
    }

    return (
        <div className="card md:w-96 bg-base-100 shadow-xl my-8 mx-4 md:mx-0">
            <div className="card-body text-center">
                <p className="text-xl text-primary">Pour mieux vous connaître...</p>
                <div className="border-b border-hr"/>
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 md:gap-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Téléphone</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Téléphone"
                                className="input input-bordered input-primary w-full max-w-xs"
                                onChange={(e)=>{setPhone(e.target.value)}}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Genre</span>
                            </label>
                            <select className="select select-primary w-full max-w-xs"
                                    onChange={(e)=>{setGender(e.target.value)}}
                            >
                                <option disabled selected>Genre</option>
                                <option value="women">Femme</option>
                                <option value="men">Homme</option>
                                <option value="other">Autre</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Date de naissance</span>
                            </label>
                            <input
                                type="date"
                                className="input input-bordered input-primary w-full max-w-xs"
                                onChange={(e)=>{setBirthday(e.target.value)}}
                            />
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    <input type="file" id="pictures" className="hidden" />*/}
                    {/*    <label*/}
                    {/*        htmlFor="pictures"*/}
                    {/*        className="text-primary">Ajouter une photo</label>*/}
                    {/*</div>*/}
                </div>
                <div className="card-actions justify-end my-4">
                    <button className="btn btn-primary" onClick={() => {
                        goSign()
                    }}>Je m&apos;inscris</button>
                </div>
            </div>
        </div>
    );
}

export default MoreInformation;
