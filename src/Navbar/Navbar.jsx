

import "./Navbar.scss"
import { SiTreehouse } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import {useState} from "react"
const Navbar = () => {
    //fun to show Navbar
    const [menu,setMenu] = useState("menu")
    const shownavbar = () =>{
        setMenu("showNavbar menu")
    };
     //fun to remove Navbar
    const removenavbar = () =>{
        setMenu("remove menu")
    };
    //fun to add background to the navbar on scroll
    const [transparent, setTransparent] = useState("Navbar")
    const addBg = () => {
        if (window.scrollY >= 10){
            setTransparent("Navbar addBackground")
        }else{
            setTransparent("Navbar")
        }
    };
    window.addEventListener("scroll",addBg)
    return(
        <div className={transparent}>
            <div className="IogoDiv">
                <SiTreehouse className="icon" />
                <span>Homuz</span>
            </div>
            <div className={menu}>
                <ul className="navList">
                    <li>Property</li>
                    <li>Services</li>
                    <li>Product</li>
                    <li>About Us</li>
                </ul>
                {/*icon to close navbar on small device*/}
                <AiFillCloseCircle className=" icon closeIcon" onClick={removenavbar} /> 
            </div>
            {/*icon to open/show navber on small device*/ }
            <button className="contactBtn btn">
                Contact
            </button>
            {/*icon to open/show navber on small device*/ }
            <PiDotsNineBold className="icon menuIcon" onClick={shownavbar} />
        </div>
    )
}
export default Navbar