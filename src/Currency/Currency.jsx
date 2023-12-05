import { useState } from "react";
import { useEffect } from "react";
import "./Currency.css";

export function Currency() {
  const [inputEuro, setInputEuro] = useState("");
  const [equalsInDollar, setEqualsInDollar] = useState(""); // hier in allen useState(): ich hatte alle () leer, und in allen meinen Bedingungen ist es mit "" - deshalb die Nan Fehler

  const [inputDollar, setInputDollar] = useState("");
  const [equalsInEuro, setEqualsInEuro] = useState("");

  useEffect(() => {
    if (inputEuro !== "") {
      setEqualsInDollar(inputEuro * 1.08);
    } else {
      setEqualsInDollar("");
    }
  }, [inputEuro]);

  useEffect(() => {
    if (inputDollar !== "") {
      setEqualsInEuro(inputDollar * 0.92);
    } else {
      setEqualsInEuro("");
    }
  }, [inputDollar]);

  return (
    <div className="page-wrap">
      <input
        onChange={(e) => setInputEuro(e.target.value)}
        type="text"
        value={equalsInEuro === "" ? inputEuro : equalsInEuro}
      />{" "}
      <span>€</span> <span>=</span>{" "}
      <input
        onChange={(e) => setInputDollar(e.target.value)}
        type="text"
        value={equalsInDollar === "" ? inputDollar : equalsInDollar}
      />{" "}
      <span>$</span>
    </div>
  );
}
