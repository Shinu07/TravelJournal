import React from "react";
import Ilocation from "../img/location.svg";
export default function Card({
  imageUrl,
  location,
  googleMapsUrl,
  title,
  startDate,
  endDate,
  description,
}) {
  return (
    <>
      <div className="card-container">
        <div className="main-container">
          <img className="main-img" src={imageUrl} alt="Cardimage" />
        </div>

        <div className="info">
          <div className="location">
            <img src={Ilocation} className="small-icon" alt="location-icon" />
            <h5>{location}</h5>
            <a className="card-location-Url" href={googleMapsUrl}>
              View on Maps
            </a>
          </div>

          <h3 className="title">{title}</h3>
          <h5 className="date">
            {startDate} - {endDate}
          </h5>
          <p className="description">{description}</p>
        </div>
      </div>
    </>
  );
}
