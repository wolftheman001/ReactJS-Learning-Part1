import React from "react";

export default function Main(props) {
    return (
        <div className="container mt-3 mb-5 d-flex">
            <img src={props.image} alt="" className="content-image"></img>
            <div className="container">
                <i class="fa-solid fa-location-dot fa-flip location-icon"></i>
                <span className="location ml-2">{props.location}</span>
                <a href={props.mapLink} className="location-link ml-4 text-secondary">View on Google Maps</a>
                <h2 className="font-weight-bold">{props.name}</h2>
                <h5 className="font-weight-bold">{props.date}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}