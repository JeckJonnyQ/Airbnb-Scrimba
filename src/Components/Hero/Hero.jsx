import "./Hero.scss";
import HeroPhoto from "../../assets/Hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={HeroPhoto} className="hero__photo" alt="Hero Photo" />
      <h1 className="hero__title">Online Experiences</h1>
      <p className="hero__text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
