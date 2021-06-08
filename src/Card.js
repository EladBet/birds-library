import "./card.scss";
import { onImageLoadError } from "./utils";

export default function Card({ name, image, onSelect }) {
  return (
    <div className="card">
      <img
        className="image"
        width="100"
        height="100"
        alt=""
        src={image}
        onError={onImageLoadError}
      />
      <div className="name">{name}</div>
      <div className="add" onClick={onSelect}>
        ✚
      </div>
    </div>
  );
}
