import React from 'react';
import './card-list.css'
import {Card} from '../card/card.js'
export  const CardList = ({monsters})=>{
    return(
    <div className='card-list'>      {
    monsters.map((monster)=>{
        return <Card key={monster.id} monster={monster}></Card>
    })
    }
    </div>)
}