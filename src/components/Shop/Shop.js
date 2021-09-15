import React, {useState, useEffect} from 'react'
import { getAllBooks } from '../../service'
import './Shop.css'
import { Link } from 'react-router-dom'
import { BiLeftArrow } from "react-icons/bi"

const Shop = () => {

    
    const [resultOfSearch,setResultOfSearch] = useState()
    const [search,setSearch] = useState('')

    useEffect(() => {
        getAllBooks().then(res => {
            //console.log(res.data[0])
           
            setResultOfSearch(res.data)
         })
    },[])
 
    return (
        <>
        <div className='shop-back-arrow'>
            <Link to="/aboutus"><BiLeftArrow color="white" fontSize="2em" /></Link>
            <input type='search' placeholder='search...' onChange={(e) => {setSearch(e.target.value.toLowerCase())}} />

        </div>
        
        <div  className='div-shop'>
           
              {                
                   resultOfSearch?.filter((value) => value?.title.toLowerCase().includes(search))
                   .map(({title,description,image,source,rating,id,price}) => {
                     return (
                    <div className='card-shop' key={id}>
                        <h2>{title.slice(0,20)}</h2>
                        <p>*{rating?.rate}</p>
                        <img src={image} alt={description} />
                        <div className='buy'><span>$ {price}</span> <span className='shop'>Buy</span></div>
                        <Link to={'/shop/:id'}>Find more..</Link>
                    </div>
                     ) 
                  })
              }
        </div>
        </>
    )
}

export default Shop
