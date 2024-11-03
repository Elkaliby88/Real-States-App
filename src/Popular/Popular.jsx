import "./Popular.scss"
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import popular1 from "../assets/popular1.jpg"
import popular2 from "../assets/popular2.jpg"
import popular3 from "../assets/popular3.jpg"
import popular4 from "../assets/popular4.jpg"
import popular5 from "../assets/popular5.jpg"
const Popular = () => {
    return(
        <div className="Popular Container section">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <span className="orangeText">
                            Best Choise
                        </span>
                        <h1 className="title">
                            Popular Residences.
                            <span className="orangeDot">.</span>
                        </h1>
                    </div>
                    <div className="icons flex">
                        <BiLeftArrowAlt className="icon" />
                        <BiRightArrowAlt className="icon" />
                    </div>
                </div>
                    <div className="secContent grid">
                        <div className="singleProperty">
                            <div className="imgDiv">
                                <img src={popular1} alt="Image Popular"/>
                            </div>
                            <div className="info">
                                <span className="price">
                                    <span className="orangeText">$</span>
                                    <span className="digits">66.563</span>
                                </span>
                                <h2 className="name">garden City Assat</h2>
                                <p>Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876</p>
                            </div>
                        </div>
                        <div className="singleProperty">
                            <div className="imgDiv">
                                <img src={popular2} alt="Image Popular"/>
                            </div>
                            <div className="info">
                                <span className="price">
                                    <span className="orangeText">$</span>
                                    <span className="digits">35.125</span>
                                </span>
                                <h2 className="name">garden Orchard City</h2>
                                <p>Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876</p>
                            </div>
                        </div>
                        <div className="singleProperty">
                            <div className="imgDiv">
                                <img src={popular3} alt="Image Popular"/>
                            </div>
                            <div className="info">
                                <span className="price">
                                    <span className="orangeText">$</span>
                                    <span className="digits">75.24</span>
                                </span>
                                <h2 className="name">Gables Luxurious House</h2>
                                <p>Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876</p>
                            </div>
                        </div>
                        <div className="singleProperty">
                            <div className="imgDiv">
                                <img src={popular4} alt="Image Popular"/>
                            </div>
                            <div className="info">
                                <span className="price">
                                    <span className="orangeText">$</span>
                                    <span className="digits">192.55</span>
                                </span>
                                <h2 className="name">Aliva Priavte Garden</h2>
                                <p>Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876</p>
                            </div>
                        </div>
                        <div className="singleProperty">
                            <div className="imgDiv">
                                <img src={popular5} alt="Image Popular"/>
                            </div>
                            <div className="info">
                                <span className="price">
                                    <span className="orangeText">$</span>
                                    <span className="digits">45.63</span>
                                </span>
                                <h2 className="name">Luxurious City Garden</h2>
                                <p>Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Popular