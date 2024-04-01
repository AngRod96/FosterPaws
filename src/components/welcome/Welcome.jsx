import "./Welcome.css"
import "./images.css"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

export const Welcome = () => {
    return (
        <div className="welcome-container">
            <h1>
                <span>Welcome to</span>
                <span>Foster Paws </span>
            </h1>
            <div>
            We are dedicated to finding loving homes for dogs and cats who are currently being fostered. Our furry friends are waiting for their forever families to shower them with love and care. 
            </div>
        </div>
    )
} 


const Images = () => {
  
    return (
        <div className="slider">
            {/* <BsArrowLeftCircleFill className="arrow arrow-left" /> */}
            <div className="slide">
            <img className="slide" src="src/components/petImages/Bella.jpeg" alt="Image #1" />
            <img className="slide" src="src/components/petImages/clarescat.jpg" alt="Image #2" />
            <img className="slide" src="src/components/petImages/claresdog.jpg" alt="Image #3" />
            <img className="slide" src="src/components/petImages/ezracat.jpg" alt="Image #4" />
            <img className="slide" src="src/components/petImages/Moss.jpeg" alt="Image #5" />
            <img className="slide" src="src/components/petImages/Lex.jpg" alt="Image #5" />
            </div>
            {/* <BsArrowRightCircleFill className="arrow arrow-right"/> */}
           
        </div>
    )
}

export default Images
