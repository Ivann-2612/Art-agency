import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { getAllBooks } from '../../service'
import { useState, useEffect } from 'react'
import './OneShopSearch.css'


const OneNewsSearch = () => {
    const [sources,setSources] = useState([])
    const  {id}  = useParams()
    let history = useHistory()
    

    const titlePlaceholder = 'Fjallraven - Foldsack No. 1 Backpack, Fits 15" Laptops'
    const imgPlaceholder = 'https://m.media-amazon.com/images/I/81fPKd-2AYL._AC_SY606_.jpg'
    const contentPlaceholder = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    
    function handleClick() {
        history.push('/shop')
    }
    useEffect(() => {
        getAllBooks().then(res => {
             //console.log(res.data)
             setSources(res.data)
         })
    },[])
    let oneNewsArray = sources?.filter(el => el.title.id === id)
    let oneNews = oneNewsArray[0]
    const maxLength = 260


        return (
        <div className='oneshop-div'>
          <h2>{oneNews?.title ? oneNews?.title : titlePlaceholder}</h2>
          <img src={oneNews?.image ? oneNews?.image : imgPlaceholder} alt='alt' />
          <p>{oneNews?.description ? oneNews?.description.substr(0,maxLength) : contentPlaceholder}....</p>
          <button type='button' onClick={handleClick}>Back to list</button>     
        </div>
    )
}

export default OneNewsSearch
