import Header from "../Header/Header";
import { FaArrowAltCircleUp } from "react-icons/fa";
const Home=()=>{
   return <div className="hero-container">
    <Header/>
        <div className="hero-content">
            <h1>React is a front-end JavaScript library.<br/> React was developed by the Facebook Software Engineer Jordan Walke.<br/> React is also known as React.js or ReactJS.<br/> React is a tool for building UI components.</h1>

            <button>
                Explore Page{" "}
                <FaArrowAltCircleUp style={{
                transform:"rotate(40deg)",
                }}/>
            </button>
        <div className="Footer">
            <h1>Created By : Vishwajeet Ydv</h1>
        </div>
        </div>
            
    </div> 
}
export default Home;