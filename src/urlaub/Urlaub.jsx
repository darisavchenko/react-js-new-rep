import "./Urlaub.css";
import { useState } from "react";
import tropical from "./tropical.jpg";
import winter from "./winter.jpg";

export function Urlaub() {
  const [image, setImage] = useState();

  return (
    <>
      <div className="page-wrap">
        <p className="urlaub-text">Choose your dream vacation</p>
        <div className="urlaub-buttons">
          <button
            onClick={() => {
              setImage(tropical);
            }}
            className={image === tropical ? "active-button" : ""}
          >
            {/* if image is tropical choose className="active-button", else: className="" */}
            {/* => is an arrow funktion - it is needed here for the fuction to be executed only on click and each milisecond the page is being rendered */}
            Tropical Iseland
          </button>
          <button
            onClick={() => {
              setImage(winter);
            }}
            className={image === winter ? "active-button" : ""}
          >
            Wilter Wonderland
          </button>
        </div>

        <img className="urlaub-img" src={image} />
      </div>
    </>
  );
}
