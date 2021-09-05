import './Work.css'
import { Link } from 'react-router-dom'
import { BiLeftArrow } from "react-icons/bi"
import HandMade  from '../images/hand-made.jpg'

const Work = () => {
    return (
        <>
        <div className='work'>
            <Link to="/aboutus"><BiLeftArrow color="white" fontSize="2em" /></Link>
        </div>
        <div className='left-side'>
                <img src={HandMade} alt='hand-made'/>
        </div>
        <div className='right-side'>
             <h1>My work</h1>
             <Link to='/aboutus'>Clipper</Link>
             <Link to='/aboutus'>Red Agency</Link>
             <Link to='/aboutus'>My Accountant</Link>
             <Link to='/aboutus'>Blue Hospital</Link>
        </div>
        </>
    )
}

export default Work
