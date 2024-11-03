
import "./Footer.scss"
import { SiTreehouse } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
    return(
        <div  className="Footer">
            <div className="secContainer container grid">
                <div className="logoDiv">
                    <div className="footerLogo">
                        <SiTreehouse className="icon" />
                        <span>Homuz</span>
                    </div>
                    <p>
                        Our vision is to make all people
                        the best place to live for them.
                    </p>
                    <div className="social flex">
                        <ImFacebook className="icon" />
                        <ImTwitter className="icon" />
                        <AiFillInstagram className="icon" />
                    </div>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">Informtion</span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Explore</a>
                    </li>
                    <li>
                        <a href="">Travel</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">Helpful Links</span>
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href="">Support</a>
                    </li>
                    <li>
                        <a href="">Travel & Condition</a>
                    </li>
                    <li>
                        <a href="">Privacy</a>
                    </li>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">Contact Ditails</span>
                    <span className="phone">123 252 676 0025</span>
                    <span className="email">mostafaElkaliby@gmail.com</span>
                    <span className="website">www.Elkaliby.com</span>
                </div>
            </div>
        </div>
    )
}
export default Footer