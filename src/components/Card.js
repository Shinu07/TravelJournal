import React from "react";

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
      <div className="card">
        <picture className="card-img">
          <img className="image" src={imageUrl} alt="Cardimage" />
        </picture>
      </div>

      <div className="card-info">
        <h2 className="loaction">{location}</h2>
        <a className="location-Url" href={googleMapsUrl}>
          View on Maps
        </a>

        <h3 className="card-title">{title}</h3>
        <p className="card-date">
          {startDate} - {endDate}
        </p>
        <p className="card-description">{description}</p>
      </div>
    </>
  );
}
