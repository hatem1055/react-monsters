import React from 'react';
import './search-box.css'


export const SearchBox = ({placeholder,search})=>{
    return (<input type='search' placeholder={placeholder}  onChange={search} className='search'/>)
}