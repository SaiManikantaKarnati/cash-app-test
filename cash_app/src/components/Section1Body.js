import intro_cube_1 from "../utils/intro_cube_1.png"
import intro_stairs_1 from "../utils/intro_stairs_1.png"
import intro_phone_1 from "../utils/intro_phone_1.png"

const Section1Body = () => {
    return (
        <div className="section-1-body">
            <img className="intro-cube-1" src={intro_cube_1} alt="intro-cube1"></img>
            <img className="intro-stairs-1" src={intro_stairs_1} alt="intro_stairs_1"></img>
            <p className="cash">CASH</p>
            <img className="intro-phone-1" src={intro_phone_1} alt="intro_phone_1"></img>
            <p className="app">APP</p>
        </div>
    );
}

export default Section1Body;