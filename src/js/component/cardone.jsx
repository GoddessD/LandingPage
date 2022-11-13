import React from "react";
export const Card = (props) => {
  return (

<div className="card mx-2" style={{width: "18rem"}}>
  <img className="card-img-top" src="https://loremflickr.com/g/320/240/paris" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
</div>
)}