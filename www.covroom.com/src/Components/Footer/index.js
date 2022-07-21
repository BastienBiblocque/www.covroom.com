import {Link} from "react-router-dom";
import mns from '../../img/mns.png'

function Footer() {
    return (
        <>
        <footer class="footer p-10 bg-base-200 text-base-content">
            <div>
                <p>Covroom est un projet développé par 3 Alternants dans le milieu du developpement web.</p>
                <p>Ce dernier est à presenté à Metz Numeric School</p>
            </div> 
            <div>
                <span class="footer-title text-primary">Informations</span> 
                <Link to="/faq">Foire aux questions</Link>
                <Link to="/legal-notice">Mentions légales</Link>
                <Link to="/about-us">A propos de nous</Link>
                <p>Localisation : Metz </p>
            </div> 
            <div>
                <img className="h-32 pr-20" src={mns} alt="logo mns"/>
            </div>
            </footer> 
            <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 border-primary">
            <div class="items-center grid-flow-col text-primary">
                <p>© 2022 tout droit réservé</p>
            </div> 

        </footer>
        </>
    );
}

export default Footer;
