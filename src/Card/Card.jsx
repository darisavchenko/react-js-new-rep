import "./Card.css";

export function Card({ image, title, link }) {
  return (
    <a href={link} className="program-card">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <a href={link}>{link}</a>
    </a>
  );
}
