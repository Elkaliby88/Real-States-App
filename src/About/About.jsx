
import { useState } from "react"
import "./About.scss"
import value from "../assets/value.jpg";
import Accordion from "./Accordion";
const About = () => {
    const [active , setActive] = useState("Proven Track Record");
    return(
        <div className="About Container section">
            <div className="secContainer flex">
                <div className="value__image">
                    <div className="orbe"></div>
                    <div className="imgDiv">
                        <img src={value} alt="About Image"/>
                    </div>
                </div>
                <div className="textDiv">
                    <div className="secHeader flex">
                        <div className="secTitle">
                            <span className="orangeText">Our Value</span>
                            <h1>
                                Value We Give To You
                                <span className="orangeDot">.</span>
                            </h1>
                            <p>
                            We always ready to help by providing the best service for you. We believe a good place to live can make your life better.
                            </p>
                        </div>
                    </div>
                    <div className="accordion grid">
                        {/*Single Accordion */}
                        <Accordion
                            title="Proven Track Record"
                            desc="Price we provides is the best 
                            for you, we guarantee no price changes on your property 
                            due to various unexpected costs that may come."
                            active={active}
                            setActive={setActive}
                        />
                        {/*Lets add more cards */}
                        <Accordion
                            title="Prevent unstable prices"
                            desc="Price we provides is the best for you, we guarantee no price 
                            changes on your property due to various unexpected costs that may come."
                            active={active}
                            setActive={setActive}
                        />
                        <Accordion
                            title="Best prices on the market"
                            desc="Price we provides is the best for you, we guarantee no price changes on your 
                            property due to various unexpected costs that may come."
                            active={active}
                            setActive={setActive}
                        />
                        <Accordion
                            title="Security of your data"
                            desc="Price we provides is the best for you, we guarantee no price changes on your property 
                            due to various unexpected costs that may come."
                            active={active}
                            setActive={setActive}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About