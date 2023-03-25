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
        <picture className="card--img-box">
          <img className="card--img" src={imageUrl} alt="Cardimage" />
        </picture>
      </div>

      <div className="card--infos">
        <h2 className="card--location">{location}</h2>
        <a className="card--location-Url" href={googleMapsUrl}>
          View on Maps
        </a>

        <h3 className="card--title">{title}</h3>
        <p className="card--date">
          {startDate} - {endDate}
        </p>
        <p className="card--description">{description}</p>
      </div>
    </>
  );
}
