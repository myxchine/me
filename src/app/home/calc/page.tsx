"use client";

import { useState } from "react";

const Calc = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const handleClick = () => {
    setC(a + b);
  };

  return (
    <main>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />

      <button onClick={handleClick}>Add</button>

      <p>
        The sum of {a} and {b} is {c}
      </p>
    </main>
  );
};

export default Calc;
