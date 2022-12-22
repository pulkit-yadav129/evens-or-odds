import React from "react";
import {connect} from 'react-redux';

const Card=(props)=>{
    console.log('card props',props);

    if(!props.cards[0])
    return null;

    const {value,suit,image}=props.cards[0];

    return (
        <div>
            <h3>{value} of {suit}.</h3>
            <img src={image} alt='card-image'/>
        </div>
    )
}

export default connect(
    ({deck:{cards}})=>({cards})
)(Card);