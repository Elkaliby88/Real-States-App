import "./Sponsors.scss"
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
const Sponsors = () => {
    return(
        <div className="Sponsors">
            <div className="secContainer flex">
                <span>
                    <img src={logo1} alt="Logo image"/>
                </span>
                <span>
                    <img src={logo2} alt="Logo image"/>
                </span>
                <span>
                    <img src={logo3} alt="Logo image"/>
                </span>
                <span>
                    <img src={logo4} alt="Logo image"/>
                </span>
            </div>
        </div>
    )
}
export default Sponsors