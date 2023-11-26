import { useState } from "react";
import { useEffect } from "react";

export function Hooks() {
  const [selectedButton, setSelectedButton] = useState();
  const [count, setCount] = useState(0);
  /* [getter, setter] */

  useEffect(() => {
    if (selectedButton) {
      setCount((count) => count + 1);
    }
  }, [selectedButton]);
  /* => {what should happen} 
  , [Bedingung]*/

  return (
    <div className="page-wrap">
      <button onClick={() => setSelectedButton(1)}>1</button>
      <button onClick={() => setSelectedButton(2)}>2</button>
      <button onClick={() => setSelectedButton(3)}>3</button>
      <p>selectedButton: {selectedButton}</p>
      <p>count: {count}</p>
    </div>
  );
}
