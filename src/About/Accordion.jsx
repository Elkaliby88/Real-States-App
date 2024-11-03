/* eslint-disable react/prop-types */
import "./About.scss"
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
const Accordion = ({ title , desc, active, setActive }) => {
    return(
        <div
            className={
                (active === title ? "activeAccordion " : "") + "singleAccordion"
            }>
                <span 
    onClick={() => setActive(active === title ? "" : title)} // لتغيير حالة الـactive
    className={`${active === title ? "activeTitle" : ""} accordionTitle flex`}>
                                <span className="flex">
                                    <AiFillCheckCircle className="icon" />
                                    <span className="titleText">
                                        {title}
                                    </span>
                                </span>
                                <span className="dropDownIcon">
                                    {active === title ? (
                                        <BiSolidDownArrow className="icon" />
                                    ) : (
                                        <BiSolidUpArrow className="icon" />
                                    ) 
                                    }
                                </span>
                            </span>
                            <p className={`${active === title ? "show" : ""} description`}>
                                {desc}
                            </p>
                        </div>
    );
};
export default Accordion