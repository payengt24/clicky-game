import React from "react";

export default function CardComponent(props) {
  return (
    <div className="col-sm-3 imageContainer" key={props.id} >
      <img src={props.image} alt={props.name} width="200px" onClick={props.handleImagePress}/>
    </div>
  );
}
