import React, {useState, useEffect} from 'react'
import { getImages } from '../../service'
import './Gallery.css'
import { Link } from 'react-router-dom'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import { BiLeftArrow } from "react-icons/bi"


const Gallery = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getImages().then(res => {
            //console.log(res.data)
            setImages(res.data)
         })
    },[])
      
    return (
      <div className='wrapper'>
          <Link to="/aboutus"><BiLeftArrow className='arrow' color="white" fontSize="2em" /></Link>
          <h1>Our Work</h1>
          <div className='hr'></div>
                <Slide easing="ease">
                    {
                        images.map((el,i) => {
                            return (
                                <div key={i} className="each-slide">
                                <div className='div-card'>
                                <h2>{el?.alt_description.slice(0,40)}</h2>
                                    <h4>Likes: {el?.likes} 👍</h4> 
                                    
                                <img src={el?.urls?.small} alt='alt' />
                                <p>{el.user.name}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                </Slide>
      </div>
    )
};

export default Gallery