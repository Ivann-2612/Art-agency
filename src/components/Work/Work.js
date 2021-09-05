import './Work.css'
import { Link } from 'react-router-dom'
import { BiLeftArrow } from "react-icons/bi";

const Work = () => {
    return (
        <div className='work'>
            <Link to="/aboutus"><BiLeftArrow color="white" fontSize="2em" /></Link>
            <h1>Our work page</h1>
        </div>
    )
}

export default Work
