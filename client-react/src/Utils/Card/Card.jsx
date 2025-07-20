import React from 'react';
import './Card.css'
function Card(props) {
  const handleClick = ()=>{
    <a href='App2.html'></a>
  }
  return (
    <div className='main'>
      <img src={props.image} alt="" onClick={handleClick}/>
      <h1 className="title">{props.title}</h1>
      <p className='desc'>{props.description}</p>
      <p className="cost">{props.cost} </p>
      <p className='ogcost'>{props.ogCost}</p>
      <p className="off">&nbsp; &nbsp;({props.off} off)</p>
      <br />
      <button className='btn btn1'>Buy</button>
      <button className='btn btn2'>Add to Cart</button>
    </div>
  );
}

export default Card;
