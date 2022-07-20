import React, {useState} from 'react';
import logo from '../../img/logo.png'
import {Link} from "react-router-dom";
import {MdViewHeadline} from "react-icons/md";

function Header() {
    const [usersLog, setUserLog] = useState(false);
    return (
        <header>
            <div className="bg-white flex">
                <div className="max-w-2xl mx-auto">
                    <div className="flex">
                        <img className="h-16 pr-32" src={logo} alt="logo"/>
                        <div className="flex space-x-8 my-auto">
                            <Link to="/search" className="text-primary">
                                Rechercher
                            </Link>
                            <Link to="/create" className="text-primary">
                                Publier un trajet
                            </Link>
                        </div>
                        <div className="dropdown dropdown-end my-auto">
                            <div tabIndex="0" className="cursor-pointer bg-[#FFFFFF] rounded-xl p-3"><MdViewHeadline/>
                            </div>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                {usersLog ? <>
                                        <li><Link to="/profil">Mon profil</Link></li>
                                        <li><Link to="/profil">Mes alertes</Link></li>
                                        <li><Link to="/search">Mes trajets</Link></li>
                                        <li><Link to="/search">Mes reservations</Link></li>
                                        <li><Link to="/search">Mes voitures</Link></li>
                                        <li><Link to="/search">Mes messages</Link></li>
                                        <li><Link to="/search">Mes favoris</Link></li>
                                        <li><Link to="/search">Déconnexion</Link></li>
                                    </> :
                                    <>
                                        <li><Link to="/login">Connexion</Link></li>
                                        <li><Link to="/signin">Inscription</Link></li>
                                    </>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
