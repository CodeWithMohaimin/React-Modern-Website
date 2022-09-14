import React from 'react'

export default function ServicesCard(props) {
  return (
    <div className="card">
      <div className="cardBody">
        <div className="cardImage">
          <img src={props.image} alt="" />
        </div>
        <div className="cardText">
          <h2>{props.h1}</h2>
          <p>{props.p}</p>
        </div>
      </div>
    </div>
  )
}
