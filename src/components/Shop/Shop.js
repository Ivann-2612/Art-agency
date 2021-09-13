import React, {useState, useEffect} from 'react'
import { getAllBooks } from '../../service'
import './Shop.css'
import { Link } from 'react-router-dom'
import { BiLeftArrow } from "react-icons/bi"

const Shop = () => {

    const [shop, setShop] = useState([])

    useEffect(() => {
        getAllBooks().then(res => {
            //console.log(res.data[0])
            setShop(res.data)
         })
    },[])
 
    return (
        <>
        <div className='shop-back-arrow'>
            <Link to="/aboutus"><BiLeftArrow color="white" fontSize="2em" /></Link>
        </div>
        
        <div  className='div-shop'>
              {
                  shop.map((item,id) => {
                     return (
                    <div className='card-shop' key={id}>
                        <h2>{item?.title.slice(0,22)}</h2>
                        <p>*{item?.rating?.rate}</p>
                        <img src={item?.image} alt={item?.description} />
                        <div className='buy'><span>$ {item?.price}</span> <span className='shop'>Buy</span></div>
                    </div>
                     ) 
                  })
              }
        </div>
        </>
    )
}

export default Shop
