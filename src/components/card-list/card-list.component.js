import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

export const CardList = (props) => {
    console.log(props.monsters);
    return (
    <div className='card-list-class-css'> 
    {
        props.monsters.map(item => 
        (<Card key={item.key} monster={item}/>)
    )
    }
    </div>)
};