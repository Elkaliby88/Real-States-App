import "./Contact.scss"
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidVideo } from "react-icons/bi";
import { BiSolidMessageDetail } from "react-icons/bi";
import contact from "../assets/contact (1).png"
const Contact = () => {
    return(
        <div className="Contact Container section">
            <div className="secContainer flex">
                <div className="contact__image">
                    <div className="orbe"></div>
                    <div className="imgDiv">
                        <img src={contact} alt="Contact Image"/>
                    </div>
                </div>
                <div className="textDiv">
                    <div className="secHeader flex">
                        <div className="secTitle">
                            <span className="orangeText">Contact Us</span>
                            <h1>Easy to Contact us<span className="orangeText">.</span></h1>
                            <p>Is there a problem finding your dream home? Need a guide in buying first home? or 
                                need a consultation on residential issues? just contact us.</p>
                        </div>
                    </div>
                    <div className="secContact grid">
                        <div className="phone active">
                            <div className="info flex">
                                <BiSolidPhoneCall className="icon" />
                                <span>
                                    <h4>Call</h4>
                                    <p>022.321.165.19</p>
                                </span>
                            </div>
                            <button>Call Now</button>
                        </div>
                        <div className="Chat ">
                            <div className="info flex">
                                <AiFillMessage className="icon" />
                                <span>
                                    <h4>Chat</h4>
                                    <p>022.321.165.19</p>
                                </span>
                            </div>
                            <button>Chat Now</button>
                        </div>
                        <div className="Video ">
                            <div className="info flex">
                                <BiSolidVideo className="icon" />
                                <span>
                                    <h4>Video Call</h4>
                                    <p>022.321.165.19</p>
                                </span>
                            </div>
                            <button>Video Call</button>
                        </div>
                        <div className=" Message">
                            <div className="info flex">
                                <BiSolidMessageDetail className="icon" />
                                <span>
                                    <h4>Message</h4>
                                    <p>022.321.165.19</p>
                                </span>
                            </div>
                            <button>Message Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact