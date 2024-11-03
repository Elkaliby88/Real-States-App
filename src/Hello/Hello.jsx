import "./Hello.scss"
import { HiLocationMarker } from "react-icons/hi";
import Home from '../assets/home.jpg'
const Hello = () => {
    return(
        <div className="Hello">
            <div className="secContainer container flex">
                <div className="textDiv">
                    <h1>Discover Most Suitable Property</h1>
                    <p>
                    Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you
                    </p>
                    <div className="searchBar flex">
                        <div className="inputBar flex">
                        <HiLocationMarker className="icon" />
                        <input type="search" placeholder="Search By Locaton..." />
                        </div>
                        <button className="btn">Search</button>
                    </div>
                    <div className="numbers flex">
                        <div className="singleNumber">
                            <span>
                                9k <blockquote>+</blockquote>
                            </span>
                            <small>Premium Product</small>
                        </div>
                        <div className="singleNumber">
                            <span>
                                2K <blockquote>+</blockquote>
                            </span>
                            <small>Happy Customer</small>
                        </div>
                        <div className="singleNumber">
                            <span>
                                28K <blockquote>+</blockquote>
                            </span>
                            <small>Awards Winning</small>
                        </div>
                    </div>
                </div>
                <div className="hello__image">
                    <div className="orbe"></div>
                    <div className="imgDiv">
                        <img src={Home} alt="Home Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hello