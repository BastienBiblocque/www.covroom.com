import React, {useState} from 'react';
import logo from '../../img/logo.png'
import {Link} from "react-router-dom";

function Header() {
    const [usersLog] = useState(false);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/search">
                            Rechercher
                        </Link></li>
                        <li><Link to="/create">
                            Publier un trajet
                        </Link></li>
                    </ul>
                </div>
                <Link to="/" className="text-primary hidden md:flex">
                    <img className="h-16" src={logo} alt="logo"/>
                </Link>
            </div>
            <div className="navbar-center">
                <div className="flex md:hidden">
                    <Link to="/">
                        <img className="h-16" src={logo} alt="logo"/>
                    </Link>
                </div>
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/search" className="text-primary">
                            Rechercher
                        </Link></li>
                        <li><Link to="/create" className="text-primary">
                            Publier un trajet
                        </Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end my-auto">
                    <label tabIndex="0" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
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
    );
}

export default Header;
