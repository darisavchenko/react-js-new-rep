import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { Card } from "./Card";

export function Cards({ image, title, link }) {
  return (
    <div className="page-wrap">
      <div className="card-container">
        <Card image={reactLogo} title={"React"} link={"https://react.dev/"} />
        <Card image={viteLogo} title={"Vite"} link={"https://vitejs.dev/"} />
      </div>
    </div>
  );
}
