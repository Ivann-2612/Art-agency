import { Redirect } from "react-router"
import './Home.css'
// import SocialNetwork from "./SocialNetwork"

const Home = ({ loggedIn }) => {
    return (
        <div className='home-wrapper'>
        <span>Art Agency A|A</span>        
            {loggedIn ? <Redirect to='/' /> : <Redirect to='/login' />}
         {/* <SocialNetwork /> */}
        </div>
    )
}

export default Home