import React, { useState, useParams, useEffect } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function EquipmentCard() { 

  const { name, job, str, dex, int, luk, hp, mp, def, spd, jump, atk, matk } = this.props;
  console.log(this.props)
  return ( 
    <Card> 
      <div>
        <Link to={`/equipments/${id}`}><h2>{name}</h2></Link>
        <p>{job}</p>
        <p>{str}</p>
        <p>{dex}</p>
        <p>{int}</p>
        <p>{luk}</p>
        <p>{hp}</p>
        <p>{mp}</p>
        <p>{def}</p>
        <p>{spd}</p>
        <p>{jump}</p>
        <p>{atk}</p>
        <p>{matk}</p>

      </div>
    </Card>
  )
}

export default EquipmentCard;

const Card = styled.li`
display: flex;
flex-direction: row;
justify-content: start;
font-family: Arial, sans-serif;
margin: 10px;
&:hover {
  transform: scale(1.15);
  transform-origin: top left;
}
a{
  text-decoration: none;
  color: white;
}
img{
  width: 180px;
  margin-left: 20%;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, .9) 80%, transparent 100%);
}
position: relative;
div{
  position: absolute;
}
`