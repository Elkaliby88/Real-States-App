import "./Listing.scss"
import { FaBed } from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import House1 from '../assets/House1.jpg'
import House2 from "../assets/House2.jpg"
import House3 from "../assets/House3.jpg"
import House4 from "../assets/House4.jpg"
import House5 from "../assets/House5.jpg"
import House6 from "../assets/House6.jpg"

//we are going to use map method toloop throught a list of properties//
const properties = [
        {
            id : 1,
            image: House1,
            name:"Countryside Estate , Italy",
            price:"34.36",
            desc:"A Historic chateau in the Bordeaux wine regine , featuring vineyards.",
            beds:6,
        },
        {
            id : 2,
            image: House2,
            name:"New items",
            price:"100.50",
            desc:"A Historic chateau in the Bordeaux wine regine , featuring vineyards.",
            beds:6,
        },
        {
            id : 3,
            image: House3,
            name:"Waterfort Mansion",
            price:"45.30",
            desc:"A Historic chateau in the Bordeaux wine regine , featuring vineyards.",
            beds:6,
        },
        {
            id : 4,
            image: House4,
            name:"Luxury Penthouse, MY",
            price:"250",
            desc:"A Historic chateau in the Bordeaux wine regine , featuring vineyards.",
            beds:6,
        },
        {
            id : 5,
            image: House5,
            name:"Beachfront Ville, CA",
            price:"85.5",
            desc:"A Historic chateau in the Bordeaux wine regine , featuring vineyards.",
            beds:6,
        },
        {
            id : 6,
            image: House6,
            name:"Beachfront Ville, CA",
            price:"70.30",
            desc:"A Historic chateau in the Bordeaux wine regine , featuring vineyards.",
            beds:6,
        }
];
const Listing = () =>{
    return(
        <div className="Listing Container section">
            <div className="secContainer">
                <div className="secHeader">
                    <span className="orangeText">Our Value</span>
                    <h1 className="title">
                        Value We Give To You
                        <span className="orangeDot">.</span>
                    </h1>
                    <p>
                        We always ready to help by providing the best service for you. We believe a good place to live can make your life better.
                    </p>
                    <div className="btns flex">
                        <button className="btn active">
                            Exclusive
                        </button>
                        <button className="btn">
                            Standard
                        </button>
                    </div>
                </div>
                <div className="secContent grid">
                    {/*use map array method*/}
                    {
                        properties.map(({id, image, name, price, desc, beds}) =>{
                            return(
                                <div key={id} className="singleListing">
                                    <div className="imgDiv">
                                        <img src={image} alt="Listing Image"/>
                                    </div>
                                    <div className="info">
                                        <h2 className="name">
                                            {name}
                                        </h2>
                                        <span className="price">
                                            <span className="digits">{price}</span>
                                            <span className="orangeText">USD</span>
                                            <span className="duration">/Day</span>
                                        </span>
                                        <p>
                                            {desc}
                                        </p>
                                        <div className="ammenities flex">
                                            <span className="flex">
                                                <FaBed className="icon" />
                                                <blockquote>×{beds}</blockquote>
                                            </span>
                                            <span className="flex">
                                                <MdPool className="icon" />
                                            </span>
                                            <span className="flex">
                                                <AiOutlineWifi className="icon" />
                                            </span>
                                            <span className="flex">
                                                <MdFastfood className="icon" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Listing