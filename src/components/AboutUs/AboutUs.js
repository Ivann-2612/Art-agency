import './AboutUs.css'
import Typed from 'react-typed'
import { ButtonTop } from '../Buttons/ButtonTop'
import { ButtonLeft } from '../Buttons/ButtonLeft'
import { ButtonRight } from '../Buttons/ButtonRight'
import { ButtonBottom } from '../Buttons/ButtonBottom'


const AboutUs = () => {
    
    return (
        <div className='about-us'>
            <div className="circle top" id='hovertext-top' data-hover="Work">
                <div className="circle-inner" style={{borderColor: 'black'}}><ButtonTop /></div>
            </div>
            <div className="circle left" id='hovertext' data-hover="Shop">
                <div className="circle-inner" style={{borderColor: 'black'}}><ButtonLeft /></div>
            </div>
            <div className="circle right" id='hovertext-right' data-hover="Gallery">
                <div className="circle-inner" style={{borderColor: 'black'}}><ButtonRight /></div>
            </div>
            <div className="circle bottom" id='hovertext' data-hover="Contact Page">
                <div className="circle-inner" style={{borderColor: 'black'}}><ButtonBottom /></div>
            </div>
            <Typed className='title-cover'
                    strings={[
                              '1',
                              '2',
                              '3',
                              'We are...',
                              'Art Agency A|A',
                              'Start Exploring',
                              'Discover New Design',
                              'Get to Know us Better',
                                         
                    ]}
                    typeSpeed={85}
                    backSpeed={50}
                    loop
                   ></Typed>
            </div>
        
    )
}

export default AboutUs
