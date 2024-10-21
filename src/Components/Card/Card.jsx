import "./Card.scss";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`./src/assets/${props.img}`} className="card__image" />

      <div className="card__content">
        <div className="card__stats">
          <img
            src="./src/assets/Star.png"
            className="card__stats_star"
            alt="Star Icon"
          />
          <span className="card__stats_rating">{props.rating}</span>
          <span className="card__stats_count gray">
            ({props.reviewCount}) •
          </span>
          <span className="card__stats_location gray">{props.location}</span>
        </div>
        <h2 className="card__title">{props.title}</h2>
        <p>
          <strong>{`From ${props.price}$`}</strong> / person
        </p>
      </div>
    </div>
  );
}
