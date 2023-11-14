import { useState } from "react";
import { useEffect } from "react";

export function Multiply() {
  const [inputNumber, setInputNumber] = useState();
  const [equals, setEquals] = useState();

  useEffect(() => {
    if (inputNumber) {
      setEquals(inputNumber * 2);
    }
  }, [inputNumber]);

  return (
    <div>
      <input onChange={(e) => setInputNumber(e.target.value)} type="text" />
      <p>
        You entered {inputNumber}. Multiplied by 2 that equals {equals}
      </p>
    </div>
  );
}

/* in return use getter e.g: inputNumber, equals - 
because these are the parameters that will be influenced. Setters are responsible for change "how the getter will be changed"*/
