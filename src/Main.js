import "./main.scss";
import { onImageLoadError } from "./utils";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => <div>{text}</div>;

export default function Main({ image, name, location, sound }) {
  return (
    <div className="main">
      <h3>{name}</h3>
      {image && (
        <img
          className="image"
          width="300"
          height="300"
          alt=""
          src={image}
          onError={onImageLoadError}
        />
      )}

      {location && (
        <div style={{ height: "200px", width: "300px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyD15L2OwgCJiFDHz8oESgP1xIPcDYPO2HQ"
            }}
            defaultCenter={location}
            defaultZoom={0}
          >
            <Marker lat={location.lat} lng={location.lng} text="✖" />
          </GoogleMapReact>
        </div>
      )}
      {sound && <audio controls src={sound}></audio>}
    </div>
  );
}
